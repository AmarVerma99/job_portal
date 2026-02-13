import React from "react";

const AppliedJobTable = () => {
  // Example applied jobs data
  const appliedJobs = [
    {
      date: "27-12-2024",
      role: "Frontend Developer",
      company: "Microsoft",
      status: "Selected",
    },
    {
      date: "27-12-2024",
      role: "Frontend Developer",
      company: "Google",
      status: "Selected",
    },
    {
      date: "27-12-2024",
      role: "Frontend Developer",
      company: "Amazon",
      status: "Selected",
    },
    {
      date: "27-12-2024",
      role: "Frontend Developer",
      company: "Apple",
      status: "Selected",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Applied Jobs</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Job Role</th>
              <th className="py-2 px-4 border-b text-left">Company</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{job.date}</td>
                <td className="py-2 px-4 border-b">{job.role}</td>
                <td className="py-2 px-4 border-b">{job.company}</td>
                <td className="py-2 px-4 border-b">
                  <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobTable;
