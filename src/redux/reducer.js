import {
    CHANGE_AMOUNT,
    CHANGE_DIFFICULTY,
    CHANGE_SCORE,
    CHANGE_TAG,
  } from "./actionsTypes";
  
  const initialState = {
    question_difficulty: "",
    question_tag: "",
    amount_of_question: 20,
    score: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_DIFFICULTY:
        return {
          ...state,
          question_difficulty: action.payload,
        };
      case CHANGE_TAG:
        return {
          ...state,
          question_tag: action.payload,
        };
      case CHANGE_AMOUNT:
        return {
          ...state,
          amount_of_question: action.payload,
        };
      case CHANGE_SCORE:
        return {
          ...state,
          score: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;