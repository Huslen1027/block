import React from "react";
import Link from "next/link";
export default function Trending({ Trendings }) {
  return (
    <div className="flex flex-col gap-[10px] items-center h-[390px]">
      <div className="flex w-[1230px] h-[390px] flex-col items-center">
        <div className="flex gap-[30px] items-start flex-col w-[1231px]">
          <div className="header flex items-start gap-8">
            <p className="w-[184px] text-black text-2xl font-bold">Trending</p>
          </div>
          <div className="flex items-start gap-5">
            {Trendings.map((e, index) => (
              <Link href={`/blog/articles/${e.id}`}>
                <div
                  key={index}
                  className="flex w-[293px] h-[320px] items-start relative"
                >
                  <img
                    className="w-[289px] h-[320px] object-cover rounded-xl"
                    src={e.social_image}
                    alt=""
                  />
                  <div className="w-[230px] h-[120px] flex flex-col items-start gap-5  absolute left-5 top-40">
                    <div className="flex py-1 px-[10px] items-center justify-center gap-1 rounded-md bg-[#4B6BFB]">
                      <h1 className="text-[#FFF] text-sm">Technology</h1>
                    </div>
                    <h1 className="w-[230px] h-[76px] text-white text-lg font-semibold">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
