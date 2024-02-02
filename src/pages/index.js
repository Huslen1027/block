import PopularPhoto from "@/components/PopularPhoto";
import Allblog from "@/components/Allblog";
import Trending from "@/components/Trending";

export default function Home(props) {
  const { Populars, Trendings, Allblogs } = props;
  console.log("trend=", Populars, Trendings, Allblogs);
  return (
    <div className="flex h-[3005px] flex-col items-center gap-25 bg-white">
      <PopularPhoto Populars={Populars} />
      <Trending Trendings={Trendings} />;
      <Allblog Allblogs={Allblogs} />;
    </div>
  );
}

export const getStaticProps = async () => {
  const Popular = await fetch("https://dev.to/api/articles?top=5&per_page=9");
  const Trending = await fetch(
    "https://dev.to/api/articles?top=1&per_page=4&page=2"
  );
  const Allblog = await fetch("https://dev.to/api/articles?top=4&per_page=9");
  const Populars = await Popular.json();
  const Trendings = await Trending.json();
  const Allblogs = await Allblog.json();

  console.log("post=", Popular, Trending, Allblog);

  return {
    props: { Populars, Trendings, Allblogs },
  };
};
