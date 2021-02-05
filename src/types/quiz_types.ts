export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type questionType = {
  question: string;
  answer: string;
  option: string[];
  correct_answer: string;
};
