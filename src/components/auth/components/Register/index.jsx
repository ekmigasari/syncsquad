"use client";

import { API_URL } from "@/config/apiUrl";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(registerData);

  function handleChange(e){
    const { name, value } = e.target;
    setRegisterData({...registerData, [name]: value});
  }

  async function handleSubmitRegister(){
    console.log(registerData);
    console.log(API_URL)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section>
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center overflow-hidden" alt="bg-login"
          style={{ backgroundImage: 'url("/images/bg-login.png")' }}
        >
          <div className="mx-auto w-full md:max-w-md sm:w-full md:h-auto items-center bg-neutral-900 rounded-lg p-4 text-white">
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="">Please Register to create an account</p>
            </div>
            <form className="mt-5">
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="user@mail.com"
                  className="bg-neutral-800 border-none shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="user@mail.com"
                  className="bg-neutral-800 border-none shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
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
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
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
                >
                  Register
                </button>
              </div>
              <div className="mt-3 py-4 text-center">
                <h5 className="text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary">
                    Login
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
