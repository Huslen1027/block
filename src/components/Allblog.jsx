import React from "react";
import Navigationbar from "./Navigationbar";
export default function Allblog({ Allblogs }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="content flex flex-col  gap-5 w-[1216px] h-[1468px] ">
            <Navigationbar />
            <div className="flex gap-5 flex-wrap">
              {Allblogs.map((e) => (
                <div className=" w-[392px] h-[476px] flex p-4 flex-col justify-between items-center  border border-[#E8E8EA] bg-[#FFF] rounded-xl">
                  <img
                    src={e.social_image}
                    className="w-[360px] h-[240px] rounded-md"
                    alt=""
                  />
                  <div className="flex p-2 flex-col items-start gap-5 ">
                    <div className="flex flex-col gap-4 items-start ">
                      <button className="flex py-1 px-[10px] justify-center items-center gap-1 rounded-md bg-gray-200">
                        <p className="text-[14px] text-[#4B6BFB] ">
                          Technology
                        </p>
                      </button>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="text-black text-2xl font-semibold leading-7">
                        {e.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="text-[#97989F] text-base">
                        August 20, 2022
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
