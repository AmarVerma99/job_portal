import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

const Jobs = () => {
  // ✅ Correct: "job", not "Job"
  const allJobs = useSelector((store) => store.job?.allJobs) || [];

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl m-auto mt-5">
        <div className="flex gap-5">
          {/* Left filter section */}
          <div className="w-1/5">
            <FilterCard />
          </div>

          {/* Jobs list section */}
          {allJobs.length === 0 ? (
            <span>No jobs found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <Job key={job._id} job={job} /> 
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
