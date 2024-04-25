import React from "react";
import axios from "axios";
export default function DeleteButton({ id, token }) {
  const DeleteHandler = () => {
    console.log("TOKEN ISSSS" + token);
    axios.post(`http://localhost:5000/images/delete/${id}`, null, {
      headers: {
        token: token,
      },
    }).catch((err)=>{
        console.log(err);
    });
  };
  return (
    <input
      type="button"
      value={"Delete"}
      class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => DeleteHandler()}
    />
  );
}
