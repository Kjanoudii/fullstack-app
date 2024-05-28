'use client'

import {useEffect, useState} from 'react'
import axios from 'axios'
type PageProps = {
  params: {
    id: any;
  };
};
type Post = {
  title: string;
  postText:string;
  username:string;
};
const Page = ({params}:PageProps) => {
  const [post, setPost] = useState<Post>({ title: "", postText: "", username:"" }); 

  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/posts/byId/${id}`);
        setPost(res.data);
        console.log("This is the data:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-3xl">
      <h2>{post.title}</h2>
      <h2>{post.postText}</h2>
      <h2>{post.username}</h2>
    </div>
  );
}

export default Page