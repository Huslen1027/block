import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/articles/${blog.id}`}>
      <div className="Card w-[390px] h-[488px] flex flex-col gap-4 rounded-xl p-4 border border-[#E8E8EA]">
        <div>
          <img
            className="h-60 w-[360px] object-fit rounded-md"
            src={blog.social_image}
            alt=""
          />
        </div>
        <div className="p-2 flex flex-col gap-5 h-[200px] justify-between">
          <div className="flex flex-wrap gap-2 ">
            {blog.tag_list.map((e, index) => (
              <button
                key={index}
                className="mb-4 px-2.5 py-1 flex justify-center items-center rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] font-medium text-sm "
              >
                {e}
              </button>
            ))}

            <p className="font-semibold text-xl text-[#181A2A]">{blog.title}</p>
          </div>
          <div className="flex gap-5 text-[#97989F] items-center">
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 rounded-full">
                <img
                  className="w-9 h-9 rounded-full"
                  src={blog.user.profile_image_90}
                  alt=""
                />
              </div>
              <p>{blog.user.name}</p>
            </div>
            <p>{new Date(blog.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
