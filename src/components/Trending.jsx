import React from "react";
export default function Trending(props) {
  return (
    <div className="flex felx-col gap-[10px] items-center h-[390px]">
      <div className="flex w-[1230px] h-[390px] flex-col items-center">
        <div className="flex gap-[30px] items-start flex-col w-[1231px]">
          <div className="header flex items-start gap-8">
            <p className="w-[184px] text-black text-2xl font-bold"></p>
          </div>
          <div className="flex items-start gap-5">
            <div className="flex w-[293px] h-[320px] flex-col items-start rounded-xl">
              <img className="w-[289px] h-[320px]" src={props.url} alt="" />
              <div className="w-[230px] h-[120px] flex flex-col items-start gap-4 absolute left-[28.5px] bottom-[28px] ">
                <div className="flex py-1 px-[10px] items-center justify-center gap-1 rounded-md bg-[#4B6BFB]">
                  <h1 className="text-[#FFF] text-sm">Technology</h1>
                </div>
                <h1 className="w-[230px] h-[76px] text-white text-lg font-semibold">
                  {props.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
