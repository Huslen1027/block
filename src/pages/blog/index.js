import Allblog from "@/components/Allblog";
export default function Page({ Allblogs }) {
  return (
    <div>
      <Allblog Allblogs={Allblogs} />
    </div>
  );
}

export const getStaticProps = async () => {
  const Allblog = await fetch("https://dev.to/api/articles?top=4&per_page=9");

  const Allblogs = await Allblog.json();

  return {
    props: { Allblogs },
  };
};
