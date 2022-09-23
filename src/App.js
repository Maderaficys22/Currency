import logo from './logo.svg';
import './App.css';
import Convertor from './CurrencyConvertor';
import Header from  './Header'
import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {

  const [rates, setRates] = useState({});
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  useEffect(() => {
    getCurrencyConvertor();
  }, []);

  const getCurrencyConvertor = async () => {
    const response = await axios.get(`https://cdn.cur.su/api/nbu.json`);
    setRates(response.data.rates)
  };

  return (
    <div className="App">
      <Header 
      
      // callback={customFunc}
      rates={rates} currentDate={currentDate}/>
      <Convertor rates={rates} currentDate={currentDate}/>
    </div>
  );
}

export default App;
