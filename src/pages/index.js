import PopularPhoto from "@/components/PopularPhoto";
import Allblog from "@/components/Allblog";
import Trending from "@/components/Trending";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

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
      <Button />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://dev.to/api/articles?top=2&per_page=");
  console.log(response);
  const posts = await response.json();
  console.log("post=", posts);
  return {
    props: { posts },
  };
};
