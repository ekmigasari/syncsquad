"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmitLogin() {
    // Problem ada di backend
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    Cookies.set("token", data.token);

    if (!data) {
      setLoading(false);
      toast.error("Error login!");
      return;
    }

    setLoading(false);
    toast.success("Login succesfully, redirecting...");
    setTimeout(() => router.push("/dashboard"), 2000);
  }

  return (
    <div>
      <section>
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: 'url("/images/bg-login.png")' }}
        >
          <div className="mx-auto w-full md:max-w-md sm:w-full md:h-auto items-center bg-neutral-900 rounded-lg p-4 text-white">
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="">Please Login to your account</p>
            </div>
            <form className="mt-5">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@mail.com"
                  className="bg-neutral-800 border-none shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4 relative">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="bg-neutral-800 border-none  shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {showPassword ? (
                      <FaEyeSlash
                        onClick={handleTogglePassword}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEye
                        onClick={handleTogglePassword}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-white p-3"
                  onClick={handleSubmitLogin}
                  disabled={loading}
                >
                  Login
                </button>
              </div>
              <div className="mt-3 py-4 text-center">
                <h5 className="text-sm">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-primary">
                    Register
                  </Link>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
