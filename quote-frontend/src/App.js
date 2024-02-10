
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import edgy from './edgy_new.png';
import logo from './amb-labs-logo.png'



function App() {
  const [quote, setQuote] = useState({quote:[]});
  //For running React App locally
  //const baseURL = "quote.ambassador.svc.cluster.local:80/"
  //For running in Docker container
  const baseURL = "/backend/"
  /*const config = {
    headers: {
      "x-telepresence-intercept-id": "bae00cbc-9817-40ec-9c3b-c04afb3a447a:quote",
    }
  };
  */


  const getQuote = () => {
    axios.get(baseURL)
      .then((res, err) => {
        if(res.status === 200){
          console.log(res.data)
          setQuote(res.data)
          console.log(quote)
        }
      });
    };
 
     
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace the image with the Ambassador Logo by 
        replacing "edgy" with "logo" below */}
        <img src={edgy} alt="image" style={{width: "50%"}}/> 
        <div title={"Server: " + quote.server}>
        {quote.quote}
        </div>
        <div>
        <button onClick={getQuote}>Generate A New Quote</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
