import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Add from "./Add";

function AllComments() {

  const [comments, setComments] = useState([]);

  const getComments = () => {
      axios.get("http://localhost:3000/comments").then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
      getComments();
  }, [comments]);

  return(
    <div className="App">

      <Add comments={comments} setComments={setComments} />
  
      <div className="comments">
      {comments.map((item) => {
          return (
            <div className="comment">
              <h3>Name: {item.comment_name}</h3>
              <h3>Comment: {item.comment_message}</h3>
              <h3>Rating: {item.comment_rating}</h3>
            </div>
          );
      })}
      </div>

    </div>
  )
}

export default AllComments;