import { useForm } from "react-hook-form";
import axios from "axios";

export default function Add(props) {
    // 1.
    const { register, handleSubmit } = useForm();
    // 2.
    const onSubmit = (data) => {
      console.log(data);
      addComment(data);
    };
  
    // function to make a POST req to the server to insert data to MySQL db
    const addComment = (data) => {
      axios.post("http://localhost:3000/comments", data).then(() => {
        // 4.
        props.setComments([...props.comments, {data}]);
      });
    };
  }
  