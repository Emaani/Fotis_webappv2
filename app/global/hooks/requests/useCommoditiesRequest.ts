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
  const [commodityDetails, setCommodityDetails] = useState<Commodity | null>(null);

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

  const fetchCommodityDetails = async (commodityId:number) => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/commodities/details/${commodityId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setCommodityDetails(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  return {
    fetchCommodities,
    isFetching,
    commodities,
    saveCommodityDetails,
    savingCommodity,
    fetchCommodityDetails,
    commodityDetails
  }
}

export default useCommoditiesRequest;
