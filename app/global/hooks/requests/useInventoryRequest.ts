import { useState } from "react";
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import useApiRequest from "~/app/global/utils/apiRequest";
import { BASE_URL } from "~/app/global/utils/constants";
import useErrorToast from "~/app/global/utils/errorToast";
import { Inventory } from "../../types/inventory";
import { IFormData } from "../validate/validateFormFields";

const useInventoryRequest = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [savingInventory, setSavingInventory] = useState(false);
  const [inventory, setInventory] = useState<Inventory[]>([]);

  const apiRequest = useApiRequest()
  const errorToast = useErrorToast()
  const accessToken = useAppSelector(selectAccessToken);

  const fetchInventory = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/inventory`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setInventory(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  const saveInventoryDetails = async (formData: IFormData) => {
    setSavingInventory(true);
    try {
      const response = await apiRequest({
        method: 'post',
        url: BASE_URL + "/api/inventory/create",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData
      });
      setSavingInventory(false);
      return response;
    } catch (error) {
      errorToast(error);
      setSavingInventory(false);
      throw error;
    }
  };


  return {
    fetchInventory,
    isFetching,
    inventory,
    saveInventoryDetails,
    savingInventory,
  }
}

export default useInventoryRequest;
