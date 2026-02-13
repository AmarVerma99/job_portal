import React from "react"
import Navbar from "./shared/Navbar"
import Job from "./Job"

const jobsArray = [1, 2,45];


const Browse = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto mt-6">
        {/* Search results heading */}
        <h1 className="text-2xl font-bold mb-5">
          Search Results ({jobsArray.length})
        </h1>

        {/* Jobs grid */}
        {jobsArray.length === 0 ? (
          <span>No jobs found</span>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {jobsArray.map((item, index) => (
              <Job key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse
