import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState("")
  const [live, setLive] = useState(false)
 
  function handleChange(e) {
    setText(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setLive(true)
    const speech = new SpeechSynthesisUtterance()
    speech.text = text
    speechSynthesis.speak(speech)
  }



  return (
    <div className="App">
      <h1>Simple Text to Speech</h1>
      <span>Because the robots are taking over, so might as well learn the beginings of our ai overlords</span>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder='Your text here' value={text}/>
        <button>Robot speaks</button>
      </form>
      {live && <p>{text}</p>}
    </div>
  );
}

export default App;
