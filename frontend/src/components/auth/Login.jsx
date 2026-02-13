import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { User_API_END_POINT } from "../../../utils/constant.js";
import axios from "axios";
import { toast } from "sonner"; // ✅ using sonner
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../../redux/authSlice.js";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
   const {loading} =useSelector(store=>store.auth)
  const navigate = useNavigate();
  const dispatch =useDispatch();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true))
      const res = await axios.post(
        `${User_API_END_POINT}/login`,
        input, // ✅ send input directly
        {
          header: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user))
        toast.success(res.data.message);
        navigate("/"); // ✅ after login, go to homepage (not login page again)
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }finally{
      dispatch(setLoading(false))
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={submitHandler}
          className="border p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-xl font-bold mb-4">Log in</h2>

          {/* Email */}
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="amar@gmail.com"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>

          {/* Role */}
          <RadioGroup defaultValue="student" className="flex gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                id="student"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                id="recruiter"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
          {
          loading ?<Button className="w-full my-4"> <Loader2 className="w-full my-4"/> please wait</Button>:  <Button type="submit" className="w-full">
            Login
          </Button>
            }
        

          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
