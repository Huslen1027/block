export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-25">
      <div className="flex w-[895px] h-[895px] flex-col items-center">
        <div className="flex w-[769px] h-[389px] pt-[14px] px-[10px] flex-col items-center ">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-[#000] text-4xl font-semibold ">Contact Us</h1>
            <p className="w-[624px] h-[163px] text-base text-[#696A75] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex py-[10px] items-center gap-12">
            <div className="flex w-[294px] h-[133px] p-[16px] flex-col gap-[10px] items-start rounded-xl border border-[#E8E8EA]">
              <h1 className="text-[#000] text-[24px] font-semibold">Adress</h1>
              <p className="text-base text-[#696A75] font-normal">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="flex w-[294px] h-[133px] p-[16px] flex-col gap-[10px] items-start rounded-xl border border-[#E8E8EA]">
              <h1 className="text-[#000] text-[24px] font-semibold">Contact</h1>
              <p className="text-base text-[#696A75] font-normal">
                85250765 hvslenhvslen566@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-[29px] pr-[130px] pb-[26px] pl-[35px] items-center rounded-lg bg-[#F6F6F7] ">
          <div className="flex flex-col items-start gap-4  ">
            <h1 className="text-[#000] text-[18px] font-semibold">
              Leave a Message
            </h1>
            <div className="flex w-[478px] pb-[18px] justify-center items-center">
              <div className=" flex flex-col w-[478px] h-[317px] gap-6">
                <div className="w-[589px] h-[39px] flex gap-7 ">
                  <input
                    className="flex w-[225px] h-[38px] gap-3 items-center py-[14px] pl-[20px] pr-[14px] bg-[#FFF] border border-[#DCDDDF] rounded-md text-[#97989F] text-[16px]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="flex w-[225px] h-[38px] gap-3 items-center py-[14px] pl-[20px] pr-[14px] bg-[#FFF] border border-[#DCDDDF] rounded-md text-[#97989F] text-[16px]"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <input
                  className="flex w-[478px] h-[134px] py-[14px] pl-[20px] pr-[14px] gap-3 items-start rounded-md border border-[#DCDDDF] bg-[#FFF] text-[#97989F] text-[16px]"
                  type="text"
                  placeholder="Write a message"
                />
                <input
                  className="flex w-[478px] h-[35px] items-center gap-3 rounded-md border border-[#DCDDDF] bg-[#FFF] text-[#97989F] text-[16px]"
                  type="text"
                  placeholder="Subject"
                />
                <button className="inline-flex py-[10px] px-[16px] justify-center flex-col items-center rounded-md bg-[#4B6BFB] w-[110px] h-[40px]">
                  <p className="text-[#fff] text-center text-[14px] font-medium">
                    Sent Message
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
