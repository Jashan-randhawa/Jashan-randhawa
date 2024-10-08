import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spin from "../components/spin";

export const Showbooks = () => {
  const [book, setbook] = useState([]);
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((response) => {
        setbook(response.data);
        setloading(false);
      })
      .catch((error) => {
        setbook(error.response.data);
        setloading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spin />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">Id</span>{" "}
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">Publish Year</span>
            <span>{book.publishyear}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className=" text-xl mr-4 text-gray-500 ">
              Last Update Time
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};
