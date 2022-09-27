import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_AMOUNT,
    CHANGE_TAG,
    CHANGE_SCORE,
  } from "./actionsTypes";
  
  export const handleCategoryChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
  });
  
  export const handleDifficultyChange = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
  });
  
  export const handleTagChange = (payload) => ({
    type: CHANGE_TAG,
    payload,
  });
  
  export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
  });
  
  export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
  });