import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_tag,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let apiUrl = `/api/v1/questions?apiKey=lO6AWe9K6faBneDIMSY28g4R5qja5vzsdcX6hwiC&limit=${amount_of_question}`;

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_tag) {
    apiUrl = apiUrl.concat(`&tags=${question_tag}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  // grabs all the questions and answers from the api
  useEffect(() => {
    if (response != null ) {
        if (response.length) {
        const question = response[questionIndex];
        let array_answers = Object.values(question.answers);
        
        //creates an array of answers and removes null choices from the answer choices 
        array_answers = array_answers.filter(function (el) {
          return el != null;
        });
        let answers = array_answers;
        answers.splice(
          getRandomInt(question.answers.length),
          0
        );
        setOptions(answers);
      }
    }

  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  // Handles score keeping when user clicks right answer
  const handleClickAnswer = (e) => {
    if (response != null ){
      const question = response[questionIndex];
      
      // saves the correct answer from the api
      let correct_answer_index = null
      let array_correct_answers = Object.values(question.correct_answers);
      for (let i=0; i < array_correct_answers.length; i++){
        if (array_correct_answers[i] == "true"){
          correct_answer_index = i
        }
      }
      let array_ans = Object.values(question.answers); 
      let correct_answer = array_ans[correct_answer_index]

      // increments score if chosen answer is correct
      if (e.target.textContent === correct_answer) {
        dispatch(handleScoreChange(score + 1));
      }

      // moves to the next question unless question limit has been reached
      if (questionIndex + 1 < response.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        navigate("/score");
      }
  }
  };

  // Displays question and answers
  if (response != null){
    return (
      <Box>
        <Typography variant="h4">Questions {questionIndex + 1}</Typography>
        <Typography mt={5}>
          {decode(response[questionIndex].question)}
        </Typography>
        {options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button onClick={handleClickAnswer} variant="contained">
              {decode(data)}
            </Button>
          </Box>
        ))}
        <Box mt={5}>
          Score: {score} / {response.length}
        </Box>
      </Box>
    );
  }
};

export default Questions;