import React, { useState } from "react";

type questionPropType = {
  question: string;
  options: string[];
  callback: (e: React.FormEvent<HTMLFormElement>, ans: string) => void;
};

const QuestionCard: React.FC<questionPropType> = ({
  question,
  options,
  callback,
}) => {
  //console.log(question);
  let [selectedAns, setselectedAns] = useState("");

  function handleChange(ev: any) {
    console.log(ev.target.value);
    setselectedAns(ev.target.value);
  }
  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      <div className="card_container">
        <div className="question">
          <h2>{question}</h2>
        </div>
        <div className="options">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              callback(e, selectedAns)
            }
          >
            {options.map((opt: string, ind: number) => {
              return (
                <div key={ind} className="radio_option">
                  <label>
                    <input
                      type="radio"
                      name="opt"
                      required
                      value={opt}
                      checked={selectedAns === opt}
                      onChange={handleChange}
                    />
                    {opt}
                  </label>
                </div>
              );
            })}
            <div className="button_container">
              <button className="submit_ans">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
