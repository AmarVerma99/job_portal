import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, Phone, Edit2, Upload } from "lucide-react";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const Profile = () => {
  const [resume, setResume] = useState(null);
  const [open, setOpen] = useState(false);

  // ✅ get user from redux
  const { user } = useSelector((store) => store.auth);

// Handle Resume Upload
const handleResumeUpload = async (e) => {
  const file = e.target.files[0];
  if (file) {
    setResume(file);

    try {
      const formData = new FormData();
      formData.append("resume", file); // field name must match multer.single("resume")

      const res = await axios.put(
        "http://localhost:8000/api/user/update-profile", // 🔥 adjust to your backend route
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true, // if auth uses cookies
        }
      );

      console.log("Resume uploaded:", res.data);
      alert("Resume uploaded successfully!");
    } catch (err) {
      console.error("Error uploading resume:", err);
      alert("Upload failed!");
    }
  }
};


  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-6 border">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://placehold.co/100x100" alt="profile" />
              <AvatarFallback>
                {user?.fullname ? user.fullname[0] : "U"}
              </AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div>
              <h2 className="text-xl font-semibold">
                {user?.fullname || "Guest User"}
              </h2>
              <p className="text-gray-600">
                {user?.profile?.bio || "No bio available"}
              </p>

              {/* Email & Phone */}
              <div className="mt-2 flex flex-col gap-1 text-gray-700">
                {user?.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {user.email}
                  </div>
                )}
                {user?.phoneNumber && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {user.phoneNumber}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <Edit2 className="w-4 h-4" /> Edit
          </Button>
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <h3 className="font-semibold">Skills</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))
            ) : (
              <p className="text-gray-500">No skills added</p>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="mt-4">
          <h3 className="font-semibold">Resume</h3>

          {resume ? (
            <a
              href={URL.createObjectURL(resume)}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resume.name}

            </a>
          ) : user?.profile?.resume ? (
            <a
              href={user.profile.resume}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Uploaded Resume
            </a>
          ) : (
            <p className="text-gray-500">No resume uploaded</p>
          )}

          <div className="mt-2">
            <label className="cursor-pointer flex items-center gap-2 text-sm text-purple-600 hover:underline">
              <Upload className="w-4 h-4" />
              Upload Resume
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleResumeUpload}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Applied Jobs Table */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-6 p-4">
        <h1 className="text-xl font-bold mb-4">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* Update Profile Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
