import "./App.css";

import { useEffect,useState } from "react";
import { useRef } from "react";
function App() {
  const [result, setresult] = useState(false)
  const count = useRef(0)
  const text = `let name = "John"; let age = 25; const PI = 3.141 59265359; function multiply(a, b) { return a * b; }
   const userList = ['Alice', 'Bob', 'Charlie', 'David'];userList.forEach((user, index) => {
    message += 'user is number index + 1 in the list. ';
  }); 
`;
  let starttime = new Date();
  useEffect(() => {
    let func = () => {
      let splittext = text.split("").forEach((s) => {
        let span = document.createElement("span");
        span.classList.add("gg");
        span.innerText = s;
        document.getElementById("app").appendChild(span);
      });
    };
    func();
  }, []);
  // let ggg = document.querySelectorAll("gg")
  // console.log(ggg)
  const gg = () => {
    const app = document.getElementById("app");
    const qoute = app.querySelectorAll("span");
    const input = document.getElementById("input");
    const value = input.value.split("");
    qoute.forEach((character, index) => {
      const char = value[index];
      
      if (char == null) {
        character.classList.remove("white");
        character.classList.remove("red");
      } else if (char == character.innerText) {
        character.classList.add("white");
        character.classList.remove("red");
        count.current = index
        console.log(count.current)
      } else {
        character.classList.add("red");
        character.classList.remove("white");
      }
    });
    timmer()
  };

  const timerfunction = () => {
    let timenow = new Date();
    return Math.floor((timenow - starttime) / 1000);
  };
let yourTypingSpeed = (count.current/5)/(60/60)
  const timmer = ()=>{
    console.log(count.current)
 let mega =  setInterval(() => {
    const timer = document.getElementById("timer");
    const finaltime = timerfunction();
    const htmltext = 60 - finaltime;
    timer.innerHTML = htmltext;
    if(htmltext==0){
      clearInterval(mega)
      setresult(true)
    }
  }, 1000);

}
  return (
    <div className="App">
      <h2 id="timer"></h2>
      <h3>
        Your Result = <span id="result">{result && <span>{yourTypingSpeed} wpm</span>}</span>
      </h3>
      <div id="app" className="app"></div>
      <div className="cen">
        <textarea
          name=""
          autoFocus
          onChange={gg}
          className="input"
          id="input"
          cols="40"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
