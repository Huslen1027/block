import parse from "html-react-parser";

const Page = ({ data }) => {
  console.log(data.body_html);
  console.log("data");
  return (
    <div className="w-[1220px] max-h-full m-auto gap-[50px] flex flex-col justify-center">
      <div className="font-semibold text-4xl text-[#181A2A] flex justify-center">
        {data.title}
      </div>
      <div className="flex gap-5 ">
        <img
          className="rounded-full w-9 h-9"
          src={data.user.profile_image_90}
          alt=""
        />
        <p className="text-black">{data.user.name}</p>
        <div>
          <p className="text-black">
            {new Date(data.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={data.social_image}
          className=" w-[900px] h-[500px] rounded-xl "
        />
      </div>
      <div className="text-black  h-full ">{parse(data.body_html)}</div>
    </div>
  );
};
export default Page;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
