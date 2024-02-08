export default function Page() {
  return (
    <div className="flex w-[642px] h-[208px] justify-center items-center gap-10 max-w-[1220px] m-auto">
      <h1 className="text-[#000] text-[72px] ">404</h1>
      <h1 className="w-[1px] h-[156px] bg-[#e8e8ea]">|</h1>
      <div className="flex flex-col items-start justify-end py-2 gap-5 ">
        <h1 className="text-[#000] text-[24px] font-semibold">
          Page Not Found
        </h1>
        <p className="w-[392px] text-[18px] text-[#696a75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <button className="flex py-[10xp] px-[16px] justify-center items-center bg-[#4b6bfb] rounded">
          Back to Home
        </button>
      </div>
    </div>
  );
}
