import Allblog from "@/components/Allblog";
import PopularPhoto from "@/components/PopularPhoto";
import Trending from "@/components/Trending";
export default function Home(props) {
  const { posts } = props;
  console.log("trend=", posts);
  return (
    <div className="flex h-[3005px] flex-col items-center gap-25 bg-white">
      {posts.map((e) => (
        <PopularPhoto url={e.cover_image} />
      ))}
      {posts.map((e) => {
        <Trending title={e.title} url={e.cover_image} />;
      })}
      {posts.map((e) => {
        <Allblog title={e.title} url={e.cover_image} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://dev.to/api/articles?top=3&per_page=1");
  console.log(response);
  const posts = await response.json();
  console.log("post=", posts);
  return {
    props: { posts },
  };
};
