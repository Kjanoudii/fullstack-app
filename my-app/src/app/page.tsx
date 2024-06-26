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
