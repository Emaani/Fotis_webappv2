import { useState } from "react";
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import useApiRequest from "~/app/global/utils/apiRequest";
import { BASE_URL } from "~/app/global/utils/constants";
import useErrorToast from "~/app/global/utils/errorToast";

const useReportsRequest = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);

  const apiRequest = useApiRequest()
  const errorToast = useErrorToast()
  const accessToken = useAppSelector(selectAccessToken);

  const fetchDashboardStats = async () => {
    setIsFetching(true);
    await apiRequest({
      method: 'get',
      url: BASE_URL + `/api/reports/dashboard-stats`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      setDashboardStats(response.data);
      setIsFetching(false)
    }).catch((error) => {
      errorToast(error);
      setIsFetching(false)
    });
  }

  return {
    fetchDashboardStats,
    isFetching,
    dashboardStats

  }
}

export default useReportsRequest;
