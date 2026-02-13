import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import useGetAllJob from "@/hooks/useGetAllJob";

const LatestJob = () => {
  useGetAllJob();  // ✅ This hook should handle fetching & dispatching

  const allJobs = useSelector((store) => store.job?.allJobs) || [];

  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-4xl font-bold flex items-center">
        <span className="text-purple-600 flex items-center">Latest</span> Job & Top Openings
      </h1>

      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span className="text-gray-500 col-span-3">No jobs available</span>
        ) : (
          allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestJob;
