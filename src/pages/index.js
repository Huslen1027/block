import PopularPhoto from "@/components/PopularPhoto";
import Allblog from "@/components/Allblog";
import Trending from "@/components/Trending";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
export default function Home(props) {
  const [articles, setArticles] = useState(props);
  const [pageNumber, setpageNumber] = useState(1);
  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?top=2&per_page=3&page=${pageNumber}`
    );
    const datas = await response.json();
    setArticles([...articles, ...datas]);
    setpageNumber((pageNumber) => pageNumber + 1);
  }

  const { Populars, Trendings, Allblogs } = props;

  return (
    <div className="flex h-[3005px] flex-col items-center gap-25 bg-white">
      <PopularPhoto Populars={Populars} />
      <Trending Trendings={Trendings} />;
      <Allblog Allblogs={Allblogs} />
      <div className="m-auto ">
        <button
          className="border border-[#696A75] rounded-lg py-2.5 px.2.5 text-[#696A75] w-[100px]"
          onClick={loadMoreHandler}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const Popular = await fetch("https://dev.to/api/articles?top=1&per_page=9");
  const Trending = await fetch(
    "https://dev.to/api/articles?top=1&per_page=4&page=2"
  );
  const Allblog = await fetch("https://dev.to/api/articles?top=4&per_page=9");
  const Populars = await Popular.json();
  const Trendings = await Trending.json();
  const Allblogs = await Allblog.json();

  return {
    props: { Populars, Trendings, Allblogs },
  };
};
