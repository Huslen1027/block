import React from "react";
import parse from "html-react-parser";

export default function Page({ data }) {
  console.log(data.body_html);
  return <div>[id]</div>;
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const response = await fetch(`https://dev.to/api/articles/${id}`);
  //   const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
