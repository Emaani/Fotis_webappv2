import { useState } from "react";
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import useApiRequest from "~/app/global/utils/apiRequest";
import { BASE_URL } from "~/app/global/utils/constants";
import useErrorToast from "~/app/global/utils/errorToast";
import { Warehouse } from "../../types/warehouse";
import { IFormData } from "../validate/validateFormFields";

const useWarehousesRequest = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [savingWarehouse, setSavingWarehouse] = useState(false);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [myWarehouse, setMyWarehouse] = useState<Warehouse | null>(null);

  const apiRequest = useApiRequest()
  const errorToast = useErrorToast()
  const accessToken = useAppSelector(selectAccessToken);

  const fetchWarehouses = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/warehouses`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setWarehouses(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  const saveWarehouseDetails = async (formData: IFormData) => {
    setSavingWarehouse(true);
    try {
      const response = await apiRequest({
        method: 'post',
        url: BASE_URL + "/api/warehouses/create",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData
      });
      setSavingWarehouse(false);
      return response;
    } catch (error) {
      errorToast(error);
      setSavingWarehouse(false);
      throw error;
    }
  };

  const getMyWarehouse = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/warehouses/mine`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setMyWarehouse(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  return {
    fetchWarehouses,
    isFetching,
    warehouses,
    saveWarehouseDetails,
    savingWarehouse,
    getMyWarehouse,
    myWarehouse
  }
}

export default useWarehousesRequest;
