import React from "react";
import axios from "axios";
export default function AddButton({token}) {
  const formData = new FormData();
  const onSelectImageHandler = (files) => {
    const file = files[0];
    formData.append("file", file);
    console.log(formData.get("file"));
    axios.post("http://localhost:5000/images", formData, {
      headers: {
        "Contetnt-Type": "multipart/form-data",
        token:token
    },
    });
    
  };
  return (
    <input
      type="file"
      accept=".png, .jpg, .jpeg" 
      class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
      onChange={(e) => onSelectImageHandler(e.target.files)}
    />
  );
}
