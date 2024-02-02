import Navigationbar from "./Navigationbar";
export default function Allblog({ Allblogs }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="content flex flex-col  gap-5 w-[1216px] h-[1468px] ">
            <Navigationbar />
            <div className="flex gap-5 flex-wrap">
              {Allblogs.map((blog) => (
                <div className=" w-[392px] h-[476px] flex p-4 flex-col justify-between items-center  border border-[#E8E8EA] bg-[#FFF] rounded-xl">
                  <img
                    src={blog.social_image}
                    className="w-[360px] h-[240px] rounded-md"
                    alt=""
                  />
                  <div className="flex p-2 flex-col items-start gap-5 ">
                    <div className="flex  gap-2 flex-wrap">
                      {blog.tag_list.map((e) => (
                        <button className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm ">
                          {e}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="text-black text-2xl font-semibold leading-7">
                        {blog.title}
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
