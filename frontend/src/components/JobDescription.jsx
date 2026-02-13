import React from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const JobDescription = () => {
  const isApplied = false

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="font-bold text-2xl mb-2">Title</h1>
          <div className="flex gap-2 flex-wrap">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              12 positions
            </Badge>
            <Badge className="text-red-600 font-bold" variant="ghost">
              Full Time
            </Badge>
            <Badge className="text-indigo-600 font-bold" variant="ghost">
              5 LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left side - description */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-2"> <span className="text-red-700">Job Description</span></h2>
          <p className="text-gray-700 leading-relaxed">
            We are looking for a skilled Frontend Developer to join our team. You will be
            responsible for building modern, responsive, and scalable web applications using
            React, Tailwind CSS, and other modern frontend technologies.
          </p>
        </div>

        {/* Right side - details */}
        <div className="border-l pl-6 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-bold">Role:</span> Frontend Developer
          </p>
          <p>
            <span className="font-bold">Location:</span> India
          </p>
          <p>
            <span className="font-bold">Experience:</span> 2+ years
          </p>
          <p>
            <span className="font-bold">Salary:</span> 5 LPA
          </p>
          <p>
            <span className="font-bold">Total Applicants:</span> 123
          </p>
          <p>
            <span className="font-bold">Posted Date:</span> 3 days ago
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
