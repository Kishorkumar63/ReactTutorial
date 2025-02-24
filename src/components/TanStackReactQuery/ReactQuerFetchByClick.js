import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchPosts = async () => {
  return axios.get("http://localhost:3001/posts");
};
const ReactQuerFetchByClick = () => {

    const { data, isLoading, error, isFetching, isError,refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
        enabled:false,
      });
      if (isLoading) {
        return <p>Please wait while loading</p>;
      }
      if (isError) {
        return <p>Error in fetching data: {error.message} </p>;
      }
    
      return (
        <div className="container">
          <h3>React Query Fetch</h3>
          <ul className="posts">
            {data?.data.map((post) => (
              <li className="post" key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
          <button onClick={refetch}>Load Data</button>
        </div>
      );
  
};

export default ReactQuerFetchByClick;
