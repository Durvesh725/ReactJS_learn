import { useState } from "react";

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(Number(score) <= 5 && comment.length <= 10){
      alert("Please provide a feedback for poor experience.");
      return;
    }

    console.log("Form submitted");
    setScore("10");
    setComment("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Feild">
            <label>Score:</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
            ></input>
          </div>
          <div className="Feild">
            <label>Comment</label>
            <textarea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
