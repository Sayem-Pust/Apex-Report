import Image from 'next/image';
import loginImg from "@/asstes/login.png";
import userImg from "@/asstes/user.png";
import StarIcon from '../StarIcon';

const LoginBanner = () => {
  return (
    <div className="w-full lg:w-[40%] flex-grow">
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          alt="Peep"
          src={loginImg}
          decoding="async"
          data-img="intrinsic"
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
  );
}

export default LoginBanner