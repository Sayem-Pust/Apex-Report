"use client";

import * as actions from "@/actions";
import { Poppins } from "next/font/google";
import { useFormState } from "react-dom";
import LoginBanner from "@/components/Login/LoginBanner";

const PoppinsFont = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Login() {
  const [formState, action] = useFormState(actions.credentialsSignIn, {
    errors: {},
  });

  return (
    <section className="overflow-hidden md:h-screen">
      <div className="py-5 h-full">
        <div className="container-fluid mx-auto h-full">
          <div className="flex flex-col items-center h-full gap-6 md:flex-row lg:gap-20">
            {/* First Section: Login Banner */}
            <LoginBanner />

            {/* Second Section: Login Form */}
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
                <div className={`${PoppinsFont.className}`}>
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
                      name="email"
                      aria-label="Your email address"
                      placeholder="boss@gmail.com"
                      id="email"
                      type="text"
                      aria-invalid="false"
                      className="w-full lg:w-[60%] p-2 border rounded border-[#CBD5E1] outline-none"
                    />
                  </div>
                  {formState.errors.email && (
                    <div className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="15px"
                          height="15px"
                        >
                          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </span>
                      <span className="text-sm font-roboto font-light  text-opacity-80 text-red-500">
                        {formState.errors.email?.join(", ")}
                      </span>
                    </div>
                  )}
                </div>
                <div className={`${PoppinsFont.className}`}>
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
                        className="w-full lg:w-[60%] p-2 border rounded border-[#CBD5E1] outline-none"
                        id="password"
                        placeholder="anyPassword1971"
                        aria-label="Your password"
                      />
                    </div>
                  </div>
                  {formState.errors.password && (
                    <div className="flex items-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="15px"
                          height="15px"
                        >
                          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </span>
                      <span className="text-sm font-roboto font-light  text-opacity-80 text-red-500">
                        {formState.errors.password?.join(", ")}
                      </span>
                    </div>
                  )}
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
