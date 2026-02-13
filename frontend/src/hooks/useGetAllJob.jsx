import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllJobs } from "../../redux/jobSlice"; // adjust path
import { JOB_API_END_POINT } from "../../utils/constant"; // adjust path

const useGetAllJob = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
        console.log("Jobs from API:", res.data); // 🔍 debug

        if (res.data.success) {
  const jobs = res.data.jobs || res.data.job || [];
  dispatch(setAllJobs(jobs));
}

        else {
          dispatch(setAllJobs([])); // fallback to empty array
        }

      } catch (error) {
        console.error("Error fetching jobs:", error);
        dispatch(setAllJobs([])); // fallback if API fails
      }
    };

    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJob;
