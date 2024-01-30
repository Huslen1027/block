import React from "react";

export default function Footer() {
  return (
    <div className="flex h-[495px] pt-[64px] pl-[450px] pr-[352px] flex-col items-start gap-[25px] border-t bg-[#F6F6F7]">
      <div className="flex w-[1215px] items-start gap-5">
        <div className="flex w-[289px] flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <p className="text-lg text-[#181A2A] font-semibold">About</p>
            <p className="w-[280px] text-[#696A75] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-normal text-base text-[#3B3C4A]">
              Email : info@jstemplate.net
            </p>
            <p className="font-normal text-base text-[#3B3C4A]">
              Phone : 880 123 456 789
            </p>
          </div>
        </div>
        <div className="flex w-[521px] justify-center items-start gap-[88px]">
          <div className="flex flex-col items-start gap-3">
            <p className="text-[16px] text-[#3B3C4A] font-normal">Home</p>
            <p className="text-[16px] text-[#3B3C4A] font-normal">Blog</p>
            <p className="text-[16px] text-[#3B3C4A] font-normal">Contact</p>
          </div>
        </div>
        <div className="w-[144px] h-[16px] flex gap-2">
          <img src="/facebook.svg" alt="" />
          <img src="/twitter.svg" alt="" />
          <img src="/ig.svg" alt="" />
          <img src=".in.svg" alt="" />
        </div>
      </div>
      <div className="flex w-[1216px] h-[95px] items-center gap-16 py-[32px] border-t">
        <div className="flex items-center gap-[10px]">
          <img src="/B.svg" alt="" />
          <div className="flex flex-col items-start gap-[2px]">
            <h1 className="text-xl font-normal text-[#141624]">MetaBlog</h1>
            <p className="text-[#3B3C4A] font-normal text-base">
              © All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[16px] justify-end ml-[500px]">
          <p className="text-[#3B3C4A] text-base font-normal">Terms of Use</p>
          <p className="w-[1px] h-[24px] bg-[#E8E8EA]">|</p>
          <p className="text-[#3B3C4A] text-base font-normal">Privacy Policy</p>
          <p className="w-[1px] h-[24px] bg-[#E8E8EA]">|</p>
          <p className="text-[#3B3C4A] text-base font-normal">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
