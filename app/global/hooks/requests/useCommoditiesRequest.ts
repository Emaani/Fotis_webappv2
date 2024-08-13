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
    const [savingPrice, setSavingPrice] = useState(false);
    const [commodities, setCommodities] = useState<Commodity[]>([]);
    const [commodityDetails, setCommodityDetails] = useState<Commodity | null>(null);
    const [error, setError] = useState<string | null>(null);

    const apiRequest = useApiRequest();
    const errorToast = useErrorToast();
    const accessToken = useAppSelector(selectAccessToken);

    const fetchCommodities = async () => {
        setIsFetching(true);
        setError(null); // Reset error state before fetching
        try {
            const response = await apiRequest({
                method: 'get',
                url: `${BASE_URL}/api/commodities`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setCommodities(response.data);
        } catch (error) {
            setError('Failed to fetch commodities.');
            errorToast(error);
        } finally {
            setIsFetching(false);
        }
    };

    const saveCommodityDetails = async (formData: IFormData) => {
        setSavingCommodity(true);
        setError(null);
        try {
            const response = await apiRequest({
                method: 'post',
                url: `${BASE_URL}/api/commodities/create`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: formData,
            });
            return response;
        } catch (error) {
            setError('Failed to save commodity details.');
            errorToast(error);
            throw error;
        } finally {
            setSavingCommodity(false);
        }
    };

    const saveCommodityPrice = async (formData: IFormData) => {
        setSavingPrice(true);
        setError(null);
        try {
            const response = await apiRequest({
                method: 'post',
                url: `${BASE_URL}/api/commodities/create-price`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                data: formData,
            });
            return response;
        } catch (error) {
            setError('Failed to save commodity price.');
            errorToast(error);
            throw error;
        } finally {
            setSavingPrice(false);
        }
    };

    const fetchCommodityDetails = async (commodityId: number) => {
        setIsFetching(true);
        setError(null);
        try {
            const response = await apiRequest({
                method: 'get',
                url: `${BASE_URL}/api/commodities/details/${commodityId}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setCommodityDetails(response.data);
        } catch (error) {
            setError('Failed to fetch commodity details.');
            errorToast(error);
        } finally {
            setIsFetching(false);
        }
    };

    return {
        fetchCommodities,
        isFetching,
        commodities,
        saveCommodityDetails,
        savingCommodity,
        fetchCommodityDetails,
        commodityDetails,
        saveCommodityPrice,
        savingPrice,
        error, // Return error state for UI display if needed
    };
};

export default useCommoditiesRequest;
