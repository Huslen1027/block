import Link from "next/link";
export default function Navigationbar() {
  const title = [
    "All",
    "design",
    "travel",
    "fashion",
    "technology",
    "branding",
  ];
  return (
    <div className="flex flex-col gap-8 font-bold text-[#495057]">
      <h2 className="font-bold text-2xl text-[#181a2a] ">All blog post </h2>
      <div className="flex gap-5">
        <Link href={`/blog/${title}`}>{title}</Link>
      </div>
    </div>
  );
}
