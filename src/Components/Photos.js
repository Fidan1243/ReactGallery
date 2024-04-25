import React from "react";
import Photo from "./Photo";

export default function Photos({ photos,token }) {
  return (
    <div style={{display:'flex', flexFlow:'wrap'}}>
      {photos.map((item, index) => (
        <Photo key={index} item={item} token={token}></Photo>
      ))}
    </div>
  );
}
