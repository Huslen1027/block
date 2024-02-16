import React from "react";
export default function PopularPhoto({ Populars }) {
  return (
    <div className="slider w-[1216px] h-[651px] flex-shrink mt-20 relative carousel">
      {Populars.map((e, key) => (
        <div id={key} className="flex flex-col  carousel-item">
          <img
            className="w-[1216px] h-[600px] flex-shrink rounded-xl "
            src={e.cover_image}
            alt=""
          />
          <div className="flex w-[598px] py-[40px] px-10 flex-col items-start gap-6 rounded-xl border-[#E8E8EA] bg-[#FFF] shadow-lg absolute h-[225px] left-1 bottom-14">
            <div className="flex flex-col items-start gap-4 ">
              <div className="flex py-1 px-[10px] items-center justify-center gap-1 rounded-md bg-[#4B6BFB]">
                <h1 className="text-[#FFF] text-sm">Technology</h1>
              </div>
              <p className="text-3xl text-[#181A2A] font-semibold">{e.title}</p>
              <div className="flex items-center gap-5">
                <p className="text-[#97989F] text-base">August 20, 2022</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="forward inline-flex justify-center items-center rounded-md w-10 h-10  border border-[#696A75] mr-2">
              <a href={`#${key == 1 ? 0 : key - 1}`}>
                <img src="/leftsum.svg" alt="" />
              </a>
            </div>
            <div className="back inline-flex justify-center items-center rounded-md w-10 h-10  border border-[#696A75]">
              <a href={`#${key == 0 ? 1 : key + 1}`}>
                <img src="/rightsum.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
