import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <>
      <div className=" flex items-center justify-center gap-4 bg-slate-500 text-3xl text-center font-bold p-5 text-white m-4">
        <img className=" w-[100px] h-[100px]" src={data.avatar_url} alt="" />
        Followers: {data.followers}
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Kaif09");
  return response.json();
};
