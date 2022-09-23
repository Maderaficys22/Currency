import React, {useState, useEffect} from "react";
import {Card} from "antd";
import './currency.style.css';
import Form from 'react-bootstrap/Form';



const avalibleCurrncies = ["USD", "UAH", "EUR"];

const Convertor = ({rates,currentDate}) => {

    const [currencies, setCurencies] = useState([]);
    const [base, setBase] = useState('');
    const [convertTo, setConvertTo] = useState('');
    const [amount, setAmount] = useState(0);
    const [convertResult, setConvertResult] = useState(0);

    useEffect(() => {
        const allCurrencies = Object.keys(rates)
            .map((currency)=> currency)
            .filter((currency)=>avalibleCurrncies.includes(currency));
        
        setCurencies(allCurrencies);
        setBase(allCurrencies.at(0));
        setConvertTo(allCurrencies.at(1));
    }, [rates])

    useEffect(()=>{
        let result = 0;

        const convert = rates[base] * rates[convertTo];

        if(rates[base] < rates[convertTo]){
            result = (convert * amount)
        }else if(rates[base] > rates[convertTo]){
            result = (amount / convert)
        }
        
        setConvertResult((parseInt(result * 100)) / 100);
    }, [amount, base, convertTo])


    const handleSwap = (e) => {
        e.preventDefault();

        const updConvertTo = base;
        const updBase = convertTo;

        setConvertTo(updConvertTo);
        setBase(updBase);
    };

    return(
        // container ml-5
        <div className="wpapper"> 
        {/* row */}
            <div className="convertor">
            {/* style={{padding: "30px", background: "#ececec"}} */}
                <div >
                    <div
                    title="currency convertor"
                    bordered={false}
                    style={{width: 550}}
                    >   
                        <h5>{`${amount} ${base} is equivalent to `}</h5>
                        <h3>{`${convertResult} ${convertTo}`}</h3>

                        <p>As of {currentDate}</p>
                        {/* //row */}
                        <div className=""> 
                        {/* //col-lg-10 */}
                            <div className=""> 
                            {/* form-inline mb-4 */}
                                <div className="">
                                    <input
                                    type="number"
                                    value={amount}
                                    onChange={(e)=> setAmount(e.target.value)}
                                    className="" //form-control form-control-lg mx-5
                                    />
                                    <Form.Select aria-label="Default select example"
                                    name="base"
                                    value={base}
                                    onChange={(e)=>setBase(e.target.value)}
                                    // form-control form-control-lg
                                    className=""
                                    >
                                        {currencies.map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                {/* //form-inline mb-4 */}
                                <div className=""> 
                                    <input
                                    disabled={true}
                                    value={convertResult}
                                    className="" //form-control form-control-lg mx-5
                                    />
                                    <select
                                    name="convertTo"
                                    value={convertTo}
                                    onChange={(e)=>setConvertTo(e.target.value)}
                                    className="" //form-control form-control-lg
                                    >
                                        {currencies.map((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* //col-lg-2 aling-self-center */}
                            <div className=""> 
                                <h1 onClick={handleSwap} style={{cursor: "pointer"}}>
                                    &#8595;&#8593;
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Convertor;


