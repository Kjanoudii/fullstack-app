"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type PageProps = {
  params: {
    id: any;
  };
};

type Post = {
  title: string;
  postText: string;
  username: string;
};

type Comment = {
  commentBody: string;
  username:string

};

const Page = ({ params }: PageProps) => {
  const [post, setPost] = useState<Post>({
    title: "",
    postText: "",
    username: "",
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const { id } = params;

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: sessionStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert("Login before posting a comment");
          console.log(response.data.error)
        } else {
          const commentToAdd = { commentBody: newComment, username: response.data.username };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/posts/byId/${id}`);
        setPost(res.data);
        console.log("This is the data:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/comments/${id}`);
        setComments(res.data);
        console.log("This is the data:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
    fetchComments();
  }, [id]);

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          {post ? (
            <>
              <div className="title"> {post.title} </div>
              <div className="body">{post.postText}</div>
              <div className="footer">{post.username}</div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                <div>{comment.commentBody}</div>
               <div>{comment.username}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
