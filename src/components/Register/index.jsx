"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(registerData)

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  function handleSubmitRegister() {

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
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  className="bg-neutral-800 border-none shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
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
                    placeholder="Password"
                    className="bg-neutral-800 border-none  shadow appearance-none border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
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
