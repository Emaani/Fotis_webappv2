import { useState } from "react";
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import useApiRequest from "~/app/global/utils/apiRequest";
import { BASE_URL } from "~/app/global/utils/constants";
import useErrorToast from "~/app/global/utils/errorToast";
import { Commodity } from "../../types/commodity";
import { IFormData } from "../validate/validateFormFields";

const useCommoditiesRequest = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [savingCommodity, setSavingCommodity] = useState(false);
  const [commodities, setCommodities] = useState<Commodity[]>([]);

  const apiRequest = useApiRequest()
  const errorToast = useErrorToast()
  const accessToken = useAppSelector(selectAccessToken);

  const fetchCommodities = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/commodities`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setCommodities(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  const saveCommodityDetails = async (formData: IFormData) => {
    setSavingCommodity(true);
    try {
      const response = await apiRequest({
        method: 'post',
        url: BASE_URL + "/api/commodities/create",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData
      });
      setSavingCommodity(false);
      return response;
    } catch (error) {
      errorToast(error);
      setSavingCommodity(false);
      throw error;
    }
  };


  return {
    fetchCommodities,
    isFetching,
    commodities,
    saveCommodityDetails,
    savingCommodity,
  }
}

export default useCommoditiesRequest;
