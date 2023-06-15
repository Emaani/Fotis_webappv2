import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useAppDispatch } from '../state/hooks';
import { sessionExpired } from '../state/features/auth/authSlice';

const useApiRequest = () => {
    const dispatch = useAppDispatch()
    const fetchData=(config: AxiosRequestConfig):  Promise<any>=>{
        return axios(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          const errorResponse = error as AxiosError;
          if (errorResponse.response?.request.status === 401) {
            dispatch(sessionExpired("error"));
          }
          throw error;
        });
    }
    return fetchData;
};

export default useApiRequest;
