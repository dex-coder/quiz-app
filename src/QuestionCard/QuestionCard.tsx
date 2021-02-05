import React,{useState} from "react";

type questionPropType = {
  question: string;
  options: string[];
  callback: (e:React.FormEvent<HTMLFormElement>, ans: string)=>void;
};

const QuestionCard: React.FC<questionPropType> = ({ question, options, callback }) => {
  //console.log(question);
  let [ selectAns, selectedAns ] = useState("")

  function handleChange(ev:any) {
      console.log(ev.target.value);
      selectedAns(ev.target.value)
  }
  return (
    <div className="card_container">
      <div className="question">
        <h3>{question}</h3>
      </div>
      <div className="options">
        <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>callback(e, selectAns)}>
          {options.map((opt: string, ind: number) => {
            return (
              <div key={ind}>
                <label>
                  <input 
                  type="radio" 
                  name="opt" 
                  required
                  value={opt} 
                  //checked ={selectedAns === opt}
                  onChange={handleChange}
                   />
                  {opt}
                </label>
              </div>
            );
          })}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
