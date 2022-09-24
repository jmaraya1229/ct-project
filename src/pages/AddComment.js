import "../App.css";
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
        <h5>Name</h5>
          <input {...register('comment_name', { required: true, maxLength: 20 })} />
        <h5>Message</h5>
          <input {...register('comment_message', { required: true, maxLength: 450 })}  />
        <h5>Rating</h5>
          <input {...register('comment_rating', { required: true, max: 5, min: 0 })} />
        <input id="btn" type="submit" />
      </form>
    );

  }
  