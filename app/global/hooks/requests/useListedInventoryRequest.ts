import { useState } from "react";
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import useApiRequest from "~/app/global/utils/apiRequest";
import { BASE_URL } from "~/app/global/utils/constants";
import useErrorToast from "~/app/global/utils/errorToast";
import { IFormData } from "../validate/validateFormFields";
import { ListedInventory } from "../../types/inventory";

const useListedInventoryRequest = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [savingListedInventory, setSavingListedInventory] = useState(false);
  const [listedInventory, setListedInventory] = useState<ListedInventory[]>([]);

  const apiRequest = useApiRequest()
  const errorToast = useErrorToast()
  const accessToken = useAppSelector(selectAccessToken);

  const fetchListedInventory = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/inventory/listed`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setListedInventory(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  const saveListedInventoryDetails = async (formData: IFormData) => {
    setSavingListedInventory(true);
    try {
      const response = await apiRequest({
        method: 'post',
        url: BASE_URL + "/api/inventory/list",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData
      });
      setSavingListedInventory(false);
      return response;
    } catch (error) {
      errorToast(error);
      setSavingListedInventory(false);
      throw error;
    }
  };

  const fetchListedInventoryByCommodityId = async (commodityId: number) => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/inventory/listed/commodity/${commodityId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setListedInventory(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  return {
    fetchListedInventory,
    isFetching,
    listedInventory,
    saveListedInventoryDetails,
    savingListedInventory,
    fetchListedInventoryByCommodityId
  }
}

export default useListedInventoryRequest;
