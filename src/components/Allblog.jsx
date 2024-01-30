import React from "react";
export default function Allblog(props) {
  const { Allblogs } = props;
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="header flex flex-col items-start gap-8 ">
            <h1 className="w-[184px] text-[#181A2A] text-xl">All Blog Post</h1>
            <div className="flex w-[1216px] items-center gap-[30px] ">
              <div className="flex items-center gap-5 text-black">
                <p className="">All</p>
                <p>Design</p>
                <p>Travel</p>
                <p>Fashion</p>
                <p>Technology</p>
                <p>Branding</p>
              </div>
              <p className="text-black">View all</p>
            </div>
          </div>
          <div className="content flex flex-col  gap-5 w-[1216px] h-[1468px] ">
            <div className="flex gap-5 flex-wrap">
              {Allblogs.map((e) => (
                <div className=" w-[392px] h-[476px] flex p-4 flex-col justify-center items-center gap-4d border border-[#E8E8EA] bg-[#FFF] rounded-xl">
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
