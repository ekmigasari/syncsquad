"use client";

import Image from "next/image";

export const Login = () => {
  return (
    <div>
        <section>
            <div className="w-full min-h-screen">
                <Image 
                    src="/images/bg-login.png"
                    alt="Login"
                    width={1920}
                    height={1080}
                />
            </div>
        </section>
    </div>
  )
}
