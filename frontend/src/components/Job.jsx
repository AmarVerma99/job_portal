import { Bookmark } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Navigate, useNavigate } from "react-router-dom"

const Job = (job) => {
  const navigate=useNavigate();
  const jobId="12hfkhfkkjsseied"
  return (
    <div className="p-4 border rounded-xl shadow-sm flex flex-col justify-between">
      {/* Top: posted time + bookmark */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {/* Company section */}
      <div className="flex items-center gap-3 mt-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">Google</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      {/* Job title */}
      <div className="mt-3">
        <h2 className="text-xl font-bold">title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-2 flex-wrap">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-red-700 font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-purple-600 font-bold" variant="ghost">
          5 LPA
        </Badge>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between mt-4">
        <Button variant="default" className="rounded-full" onClick={()=>navigate(`/description/${job?._id}`)}>
          Details
        </Button>
        <Button variant="outline" className="rounded-full">
          Save for later
        </Button>
      </div>
    </div>
  )
}

export default Job
