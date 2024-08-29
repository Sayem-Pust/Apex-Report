import Image from "next/image";
import { ReactNode } from "react";
import userImg from "@/asstes/user.png";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md">
        <div className="container-fluid mx-auto flex justify-between items-center">
          <div className="flex p-4 items-center gap-3 shadow-md">
            <div className="user_thumb">
              <Image
                src={userImg}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className="rounded-full w-[25px] h-[25px] md:w-[50px] md:h-[50px]"
              />
            </div>
            <div className="user_des flex flex-col justify-center h-6 2xl:text-2xl xl:text-xl lg:text-lg text-base font-medium">
              <h6 className="text-[#545454] font-[95px] leading-3 font-archivo">
                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </h6>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container-fluid mx-auto p-4">{children}</main>

      <footer className="bg-gray-800 p-4 text-center text-white">
        © {new Date().getFullYear()} Your Company Name
      </footer>
    </div>
  );
}
