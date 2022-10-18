// frisby = REST testing framework
const frisby = require('frisby');
// Joi = data validator
const Joi = frisby.Joi;

it ('should return a status of 200 and a list of unique questions, answer choices, and correct answers', function () {
  return frisby
    .get('http://quizapi.io/api/v1/questions?apiKey=lO6AWe9K6faBneDIMSY28g4R5qja5vzsdcX6hwiC')
    .expect('status', 200)
    .expect("jsonTypes", "*", [{
        "id": Joi.number().required(),
        "question": Joi.string().required(),
    }])
    .expect("jsonTypes", "*", [{"correct_answers": {
        "answer_a_correct": Joi.string().required(),
        "answer_b_correct": Joi.string().required(),
        "answer_c_correct": Joi.string().required(),
        "answer_d_correct": Joi.string().required(),
        "answer_e_correct": Joi.string().required(),
        "answer_f_correct": Joi.string().required()
    }}])
    .expect("jsonTypes", "*", [{"answers":{
        "answer_a": Joi.alternatives().try(Joi.string(), Joi.number()).required(),
        "answer_b": Joi.alternatives().try(Joi.string(), Joi.number()).required(),
        "answer_c": Joi.alternatives().try(Joi.string(), Joi.number(), null),
        "answer_d": Joi.alternatives().try(Joi.string(), Joi.number(), null),
        "answer_e": Joi.alternatives().try(Joi.string(), Joi.number(), null),
        "answer_f": Joi.alternatives().try(Joi.string(), Joi.number(), null)
    }}])
});

it ('should return one random easy HTML question with affiliated data', function () {
    return frisby
        .get('http://quizapi.io/api/v1/questions?apiKey=lO6AWe9K6faBneDIMSY28g4R5qja5vzsdcX6hwiC&limit=1&difficulty=easy&tags=html')
        .inspectBody()
        .expect("jsonTypes", "*", [{
            "id": Joi.number().required(),
            "question": Joi.string().required(),
            "difficulty": Joi.string().required()
        }])
        .expect("jsonTypes", "*.tags.*", {
            "name": Joi.string().required()
        })
        .expect("jsonTypes", "*", [{"correct_answers": {
            "answer_a_correct": Joi.string().required(),
            "answer_b_correct": Joi.string().required(),
            "answer_c_correct": Joi.string().required(),
            "answer_d_correct": Joi.string().required(),
            "answer_e_correct": Joi.string().required(),
            "answer_f_correct": Joi.string().required()
        }}])
        .expect("jsonTypes", "*", [{"answers":{
            "answer_a": Joi.alternatives().try(Joi.string(), Joi.number()).required(),
            "answer_b": Joi.alternatives().try(Joi.string(), Joi.number()).required(),
            "answer_c": Joi.alternatives().try(Joi.string(), Joi.number(), null),
            "answer_d": Joi.alternatives().try(Joi.string(), Joi.number(), null),
            "answer_e": Joi.alternatives().try(Joi.string(), Joi.number(), null),
            "answer_f": Joi.alternatives().try(Joi.string(), Joi.number(), null)
        }}])
});