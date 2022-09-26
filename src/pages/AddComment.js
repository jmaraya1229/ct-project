import "../App.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Typography, TextField, Rating} from '@mui/material';


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
        <Typography>Add a Comment!</Typography>
        <Typography>Name</Typography>
          <input {...register('comment_name', { required: true, maxLength: 20 })} />
        <Typography>Message</Typography>
          <input {...register('comment_message', { required: true, maxLength: 450 })}  />
        <Typography>Rating</Typography>
          <input
          {...register('comment_rating', { required: true, max: 5, min: 0 })} 

          />
        <br />
        <input id="btn" type="submit" />
      </form>
    );

  }
  