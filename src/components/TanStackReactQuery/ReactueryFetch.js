import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchPosts = async () => {
  return axios.get("http://localhost:3001/posts");
};
const ReactueryFetch = () => {
  const { data, isLoading, error,isFetching, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    //staleTime:50000
   // refetchInterval:1000,
   // refetchIntervalInBackground:true
  });
  if (isLoading) {
    return <p>Please wait while loading</p>;
  }
  if (isError) {
    return <p>Error in fetching data: {error.message} </p>;
  }
  // console.log(data);
  // console.log("isLoading",isLoading+isFetching);
  
  return (
    <div className="container">
      <h3>React Query Fetch</h3>
      <ul className="posts">

{
    data?.data.map((post)=>(
        <li className="post" key={post.id}>{post.title}</li>
    ))
}

      </ul>
    </div>
  );
};

export default ReactueryFetch;
