import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className=" bg-slate-500 text-3xl text-center font-bold p-5 text-white">
      User: {userId}
    </div>
  );
}

export default User;
