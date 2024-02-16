import { useRouter } from "next/router";
import React from "react";
export default function Header() {
  const router = useRouter();
  return (
    <div className="  flex w-[1200px] py-[32px]  m-auto items-start gap-[10px] flex-col ">
      <div className="flex items-start gap-[118px]">
        <img
          onClick={() => router.push("/")}
          className=""
          src="/logo.svg"
          alt=""
        />
        <div className="flex items-center gap-[21px]">
          <div className="flex w-[667px] justify-center items-center gap-10 ">
            <div className="flex items-center gap-1">
              <button
                onClick={() => router.push("/")}
                className="text-base text-[#3B3C4A]"
              >
                Home
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => router.push("blog")}
                className="text-base text-[#3B3C4A]"
              >
                Blog
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => router.push("Contact")}
                className="text-base text-[#3B3C4A]"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-4 items-center">
              <input
                className="pl-4 py2 pr-2 w-[166px] bg-[#F4F4F5] text-black"
                type="text"
                placeholder="search"
              />
              <img src="/location.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
