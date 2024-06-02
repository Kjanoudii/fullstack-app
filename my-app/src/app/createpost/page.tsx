"use client";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { title } from "process";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Post = {
  id: number;
  title: string;
  postText: string;
  username: string;
};
const Page = () => {
    const router = useRouter();
  const [postsData, setPostsData] = useState<Post[]>([]);

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validation = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  const onSubmit = (data: any) => {
    axios.post("http://localhost:3001/posts", data).then((res) => {
      setPostsData(res.data);
      console.log("it worked");
      router.push('/')
    });
  };
  return (
    <div className="flex flex-col items-center">
      <Link
        className="border border-gray-200 text-gray-900 bg-gray-100 transition duration-200 ease-in-out 
        rounded-md py-3 px-5 mt-5 hover:bg-gray-400 font-semibold hover:text-white"
        href={"/"}
      >
        Back to home
      </Link>
      <div className="createPostPage">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form className="formContainer">
            <label>Title: </label>
            <ErrorMessage name="title" component="span" />
            <Field
              autocomplete="off"
              id="inputCreatePost"
              name="title"
              placeholder="(Ex. Title...)"
            />
            <label>Post: </label>
            <ErrorMessage name="postText" component="span" />
            <Field
              autocomplete="off"
              id="inputCreatePost"
              name="postText"
              placeholder="(Ex. Post...)"
            />
            <label>Username: </label>
            <ErrorMessage name="username" component="span" />
            <Field
              autocomplete="off"
              id="inputCreatePost"
              name="username"
              placeholder="(Ex. John123...)"
            />

            <button type="submit"> Create Post</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Page;
