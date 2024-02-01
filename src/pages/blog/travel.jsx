import Navigationbar from "@/components/Navigationbar";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
const Page = ({ data }) => {
  const [articles, setArticles] = useState(data);
  const [pageNumber, setpageNumber] = useState(1);
  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?tag=travel&per_page=3&page=${pageNumber}`
    );
    const datas = await response.json();
    setArticles([...articles, ...datas]);
    setpageNumber(pageNumber + 1);
  }
  return (
    <div className="w-[1220px] m-auto flex flex-col gap-8">
      <Navigationbar />
      <div className="flex flex-wrap  gap-5">
        {articles.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <div className="m-auto ">
        <button
          className="border border-[#696A75] rounded-lg py-2.5 px.2.5 text-[#696A75]"
          onClick={loadMoreHandler}
        >
          Load more
        </button>
      </div>
    </div>
  );
};
export default Page;
export async function getServerSideProps(context) {
  const response = await fetch(
    "https://dev.to/api/articles?tag=travel&per_page=15"
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
