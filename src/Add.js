import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      addComment(data);
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    const addComment = (data) => {
      axios.post("http://localhost:3000/comments", data).then(() => {
        props.setComments([...props.comments, {data}]);
      });
    };

    return (
      <form className="add-comment" onSubmit={handleSubmit(onSubmit)}>
        <h4>Add Comment</h4>
        <input
          type="text"
          placeholder="Name"
          name="comment_name"
          {...register({ required: true, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="Comment"
          name="comment_message"
          {...register({ required: true, maxLength: 450 })}
        />
        <input
          type="number"
          placeholder="Rating"
          name="comment_rating"
          {...register({ required: true, max: 5, min: 0 })}
        />
  
        <input id="btn" type="submit" />
      </form>
    );

  }
  