/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import * as actions from "@/actions";
// import { redirect } from "next/navigation";
import { Hind_Siliguri } from "next/font/google";
import Link from "next/link";
import { useFormState } from "react-dom";
// import { useSession } from "next-auth/react";
import loginImg from "@/asstes/login.png";
import userImg from "@/asstes/user.png";
import Image from "next/image";
import StarIcon from "@/components/StarIcon";

const HindFont = Hind_Siliguri({
  weight: "400",
  subsets: ["latin"],
});

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [formState, action] = useFormState(actions.credentialsSignIn, {
    errors: {},
  });

  return (
    <section className="overflow-hidden">
      <div className="py-5 h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center h-full gap-6 md:flex-row lg:gap-20">
            {/* First Section: 40% Width */}
            <div className="w-full lg:w-[40%] flex-grow">
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  alt="Peep"
                  src={loginImg}
                  decoding="async"
                  data-nimg="intrinsic"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
                  <div className="flex flex-col">
                    <span className="text-white text-4xl font-semibold p-2 rounded">
                      Welcome to
                    </span>
                    <span className="text-white text-4xl -mt-2 font-semibold p-2 rounded">
                      our community
                    </span>
                    <div className="mt-1 text-left">
                      <p className="text-[#CBD5E1] text-xs p-2 rounded">
                        Clarity gives you the blocks & components
                      </p>
                      <p className="text-[#CBD5E1] text-xs p-2 -mt-2 rounded">
                        you need to create a truly professional website.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex mb-2">
                      <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                      <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                      <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                      <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                      <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                    </div>

                    <div className="text-left">
                      <p className="text-[#CBD5E1] text-xs p-1 rounded">
                        &quot;We love Landingfolio! Our designers were
                      </p>
                      <p className="text-[#CBD5E1] text-xs p-1 -mt-2 rounded">
                        using it for their projects, so we already knew
                      </p>
                      <p className="text-[#CBD5E1] text-xs p-1 -mt-2 rounded">
                        what kind of design they want.&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                      <div className="user_thumb">
                        <Image
                          src={userImg}
                          alt=""
                          width="25"
                          height="25"
                          className="rounded-full"
                        />
                      </div>
                      <div className="user_des flex flex-col justify-center h-6 2xl:text-2xl xl:text-xl lg:text-lg text-base font-medium">
                        <h6 className="text-white text-xs font-[95px] leading-3 font-archivo">
                          Abu Sayed Chy
                        </h6>
                        <span className="text-white text-xs font-light">
                          Co-Founder, Design.co
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section: 60% Width */}
            <div className="w-full lg:w-[60%] flex-grow items-center ml-4 md:ml-0">
              <div className="lg:mb-14">
                <h1 className="section-title">Welcome back!</h1>
                <div className="mt-1 text-left">
                  <p className="text-[#52525B] text-xs p-2 rounded">
                    Clarity gives you the blocks & components
                  </p>
                  <p className="text-[#52525B] text-xs p-2 -mt-2 rounded">
                    you need to create a truly professional website.
                  </p>
                </div>
              </div>
              <form className="space-y-4" action={action}>
                <div className={`${HindFont.className}`}>
                  <label
                    htmlFor="identifier"
                    id="email-label"
                    className=" !text-black "
                  >
                    Email address
                    <span className="text-red-400" aria-hidden="true">
                      {" "}
                      *
                    </span>
                  </label>
                  <div className="mantine-TextInput-wrapper relative">
                    <input
                      name="identifier"
                      aria-label="Your email address"
                      placeholder="boss@gmail.com"
                      id="identifier"
                      type="text"
                      aria-invalid="false"
                      className="w-full lg:w-[60%] p-2 border rounded border-[#CBD5E1] outline-none"
                    />
                  </div>
                </div>
                <div className={`${HindFont.className}`}>
                  <label
                    htmlFor="password"
                    id="password-label"
                    className=" !text-black "
                  >
                    Password
                    <span className="text-red-400" aria-hidden="true">
                      {" "}
                      *
                    </span>
                  </label>
                  <div className="mantine-PasswordInput-wrapper relative">
                    <div aria-invalid="false">
                      <input
                        name="password"
                        type={showPass ? "text" : "password"}
                        className="w-full lg:w-[60%] p-2 border rounded border-[#CBD5E1] outline-none"
                        id="password"
                        placeholder="anyPassword1971"
                        aria-label="Your password"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className={`mt-0 lg:!mt-10 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400`}
                >
                  Sign In
                </button>
              </form>
              {formState?.errors?._form ? (
                <div className="rounded p-2 bg-red-200 border border-red-400">
                  {formState.errors._form?.join(", ")}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
