"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// Define the type for the post data
type Post = {
  id: number;
  title: string;
 postText:string;
 username:string;
};

export default function Home() {
  // Use the defined type in the state
  const [postsData, setPostsData] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPostsData(res.data);
    });
  }, []);
console.log("hello")
  return (
    <div className="App">
      <div className="flex gap-2">
        <Link
          className="border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white"
          href={"/"}
        >
          HOME
        </Link>
        <Link
          className="border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white"
          href={"/createpost"}
        >
          CREATE POST
        </Link>
        <Link
          className="border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white"
          href={"/login"}
        >
          LOGIN
        </Link>
        <Link
          className="border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out 
        rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white"
          href={"/register"}
        >
         REGISTER
        </Link>
      </div>

      {postsData.map((item) => (
        <Link href={`/${item.id}`} className="post" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <h2 className="body">{item.postText}</h2>
          <p className="footer">{item.username}</p>
        </Link>
      ))}
    </div>
  );
}
