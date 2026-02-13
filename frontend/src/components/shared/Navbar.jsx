import { Avatar, AvatarImage } from "@/components/ui/avatar";
import * as Popover from "@radix-ui/react-popover"; // ✅ fixed import
import React from "react";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../redux/authSlice"; // ✅ update with your actual slice import

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ handle logout
  const handleLogout = () => {
    dispatch(setUser(null)); // clear Redux user
    navigate("/login");
  };

  return (
    <div className="bg-white shadow">
      <div className="flex items-center justify-between mx-auto max-w-6xl h-16 px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            job<span className="text-red-600">Portal</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {/* Auth section */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover.Root>
              <Popover.Trigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </Popover.Trigger>

              <Popover.Content className="bg-white shadow-md rounded-md p-4 w-64">
                {/* User Info */}
                <div className="flex gap-2 mb-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user.fullname}</h4>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 text-gray-700">
                  <Link to="/profile" className="flex items-center gap-2">
                    <User2 className="w-4 h-4" />
                    <Button variant="link" className="p-0 h-auto">
                      View Profile
                    </Button>
                  </Link>

                  <div
                    onClick={handleLogout}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <Button variant="link" className="p-0 h-auto">
                      Logout
                    </Button>
                  </div>
                </div>
              </Popover.Content>
            </Popover.Root>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
