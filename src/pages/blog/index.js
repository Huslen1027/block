import Navigationbar from "@/components/Navigationbar";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
export default function Page({ data }) {
  const [Articles, setArticles] = useState(data);
  const [pageNumber, setpageNumber] = useState(1);
  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=6&page=${pageNumber}`
    );
    const datas = await response.json();
    setArticles([...Articles, ...datas]);
    setpageNumber(pageNumber + 1);
  }
  console.log("blog", data);
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-8">
      <Navigationbar />
      <div className="flex flex-wrap  gap-5">
        {Articles.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <div className="m-auto">
        <button
          className="border border-[#696A75] rounded-lg py-2.5 px-2.5 text-[#696A75] w-[100px]"
          onClick={loadMoreHandler}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://dev.to/api/articles?per_page=15");
  const data = await response.json();
  console.log(data);
  return {
    props: { data },
  };
}
