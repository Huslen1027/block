import React from "react";
export default function PopularPhoto(props) {
  return (
    <div className="slider w-[1216px] h-[651px] flex-shrink mt-20 relative">
      <img
        className="w-[1216px] h-[600px] flex-shrink rounded-xl "
        src={props.url}
        alt=""
      />
      <div className="flex w-[598px] py-[40px] px-10 flex-col items-start gap-6 rounded-xl border-[#E8E8EA] bg-[#FFF] shadow-lg absolute h-[225px] left-1 bottom-14">
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex py-1 px-[10px] items-center justify-center gap-1 rounded-md bg-[#4B6BFB]">
            <h1 className="text-[#FFF] text-sm">Technology</h1>
          </div>
          <p className="text-4xl text-[#181A2A] font-semibold">
            Grid system for better Design User Interface
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[#97989F] text-base">August 20, 2022</p>
          </div>
        </div>
      </div>
      <div className="forward inline-flex justify-center items-center rounded-md w-10 h-10 border-[#696A75]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
        >
          <path
            d="M8.5 16L1 8.5L8.5 1"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="back inline-flex justify-center items-center rounded-md w-10 h-10 border-[#696A75]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
        >
          <path
            d="M1 1L8.5 8.5L1 16"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}