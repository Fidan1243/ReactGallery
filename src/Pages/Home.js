import React, { useEffect, useState } from "react";
import Photos from "../Components/Photos";
import AddButton from "../Components/AddButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchImages } from "../Stores/ImageSlice";

export default function Home({ token, setToken }) {
  const API_URI = "http://localhost:5000/images/";
  const [photos, setPhotos] = useState([]);
  setInterval(() => {
    getPhotos();
  }, 5000);
  const getPhotos = async () => {
    try {
      console.log(token);
      fetchImages();
      const fetchData = await axios.get(API_URI);
      setPhotos(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("load", getPhotos);
    return () => {
      window.removeEventListener("load", getPhotos);
    };
  }, [photos]);
  useEffect(() => {}, [token]);
  return (
    <div className="App">
      <Photos photos={photos} token={token}></Photos>
      {token ? (
        <AddButton getPhotos={getPhotos} token={token}></AddButton>
      ) : (
        <p>
          For Uploading, Please{" "}
          <Link
            to={{
              pathname: "/signin",
              data: {
                setToken,
              },
            }}
          >
            {" "}
            Sign In
          </Link>
          !
        </p>
      )}
    </div>
  );
}
