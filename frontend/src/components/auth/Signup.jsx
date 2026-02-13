import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../shared/Navbar";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/authSlice.js";
import { Button } from "../ui/button";

// replace this with your actual API endpoint
const User_API_END_POINT = "http://localhost:8000/api/v1/user";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    profile: null,
  });

  // ✅ handle text inputs
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // ✅ handle file input
  const changeFileHandler = (e) => {
    setInput({ ...input, profile: e.target.files?.[0] });
  };

  // ✅ form submit
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);

      if (input.profile) {
        formData.append("profile", input.profile);
      }

      const res = await axios.post(
        `${User_API_END_POINT}/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="fullname"
            value={input.fullname}
            onChange={changeHandler}
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={input.email}
            onChange={changeHandler}
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="text"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={changeHandler}
            placeholder="Phone Number"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeHandler}
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <div className="flex gap-4 mb-3">
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeHandler}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeHandler}
              />{" "}
              Recruiter
            </label>
          </div>

          <input
            type="file"
            name="profile"
            onChange={changeFileHandler}
            className="w-full mb-3"
          />

          {/* ✅ Signup button is now at the bottom */}
          {loading ? (
            <Button className="w-full mt-4" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
            </Button>
          ) : (
            <Button type="submit" className="w-full mt-4">
              Signup
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
