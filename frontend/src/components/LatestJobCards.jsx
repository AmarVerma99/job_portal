import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCards = ({ job }) => {
  if (!job) return null; // safety check

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition">
      {/* Company Info */}
      <div className="mb-2">
        <h2 className="font-medium text-lg">{job?.company?.name || "Unknown Company"}</h2>
        <p className="text-sm text-gray-500">{job?.location || "Location not specified"}</p>
      </div>

      {/* Job Title & Description */}
      <div className="mb-2">
        <h3 className="font-semibold text-lg">{job?.title || "Job Title"}</h3>
        <p className="text-sm text-gray-600">
          {job?.description?.slice(0, 80) || "No description available"}...
        </p>
      </div>

      {/* Badges: positions, type, salary */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.positions || "N/A"} positions
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          {job?.type || "Full/Part-time"}
        </Badge>
        <Badge className="text-purple-600 font-bold" variant="ghost">
          {job?.salary ? `${job.salary} LPA` : "Salary N/A"}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
