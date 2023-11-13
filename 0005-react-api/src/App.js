import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react'
import axios from 'axios'

function App() {
  // Updatable stuff
  const [name, setName] = useState("")
  const [card, setCard] = useState("")
  const [loading, setLoading] = useState(false)

  const yugiohApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name='

  function handleNameChange (e) {
    setName(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setLoading(true)
    console.log(name)
    axios.get(`${yugiohApi}${name}`)
      .then((res) => {
        console.log(res.data.data[0])
        setCard(res.data.data[0])
        setLoading(false)
      })
      .catch((error) => {
        alert(error.message)
        setLoading(false)
      })
      setName("")
  }
  


  return (
    <div className="App">
      <h1>Yugioh!</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} placeholder='Search a card!' value={name}/>
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {card && <div>
        <h2>{card.name}</h2>
        <img src={card.card_images[0].image_url}/>
        <p>{card.desc}</p>
      </div>}
    </div>
  );
}

export default App;
