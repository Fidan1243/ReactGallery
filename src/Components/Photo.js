import React from "react";
import "../Styles/Photo.css";
import DeleteButton from "./DeleteButton";
export default function Photo({ item,token }) {
  return (
    <div>
      <img
        src={`http://localhost:5000/images/${item.filename}`}
        className="img-fluid object-scale-down"
        alt={item.title}
      />
      {
        token !== "" ? <> <DeleteButton id={item._id} token={token}></DeleteButton></> : ""
      }
    </div>
  );
}
