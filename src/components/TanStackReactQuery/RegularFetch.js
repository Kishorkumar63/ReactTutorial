import axios from "axios";
import React, { useEffect, useState } from "react";

const RegularFetch = () => {
  const [posts, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [Error, setError] = useState("");

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/posts`);
      setPost(res.data);
    } catch (error) {
      setIsError(true);
      setError(Error)
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  if (isLoading) {
    return <p>Please wait while loading</p>;
  }
  if (isError) {
    return <p>Error in fetching data: {Error} </p>;
  }
  return (
    <div className="container">
      <h3>Regular fetch</h3>

      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id} className="post">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularFetch;
