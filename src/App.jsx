import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import AmountInput from "./components/AmountInput.jsx";
import FromCurrency from "./components/CurrencySelector/FromCurrency.jsx";
import ToCurrency from "./components/CurrencySelector/ToCurrency.jsx";
import SwapButton from "./components/CurrencySelector/SwapComponents.jsx";
import ConvertButton from "./components/Convert.jsx";
import Result from "./components/Result.jsx";

function App() {

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [fromCurrFullName, setFromCurrFullName] = useState("US Dollar");
  const [fromFlag, setFromFlag] = useState("/USAFlag.png");

  const [toCurrency, setToCurrency] = useState("INR");
  const [toCurrFullName, setToCurrFullName] = useState("Indian Rupee");
  const [toFlag, setToFlag] = useState("/indflag.png");

  // Amount entered by user
  const [currInput, setcurrInput] = useState(100);

  // Exchange rate
  const [oneUnitPrice, setoneUnitPrice] = useState(83);

  // Final converted amount
  const [finalOutput, setfinalOutput] = useState(0);

  // Show / hide result
  const [showResult, setShowResult] = useState(false);


  // Swap currency
  const swapCurrency = () => {

    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    setFromCurrFullName(toCurrFullName);
    setToCurrFullName(fromCurrFullName);

    setFromFlag(toFlag);
    setToFlag(fromFlag);

    // Hide previous result
    setShowResult(false);
  };


  // Fetch exchange rate whenever currencies change
  useEffect(() => {

    fetch(`https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        setoneUnitPrice(data.rate);
      });

  }, [fromCurrency, toCurrency]);


  // Convert button click
  const handleConvert = () => {

    const convertedAmount = Number(currInput) * oneUnitPrice;

    setfinalOutput(convertedAmount);

    setShowResult(true);
  };


  return (

    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">

      {/* Main Currency Converter Card */}

      <div
        className="
          w-full
          max-w-[650px]
          px-8
          py-7
          rounded-[28px]
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
          border
          border-white/50
        "
      >

        <Header />


        {/* Amount */}

        <AmountInput
          from={fromCurrency}
          inputt={currInput}
          setinput={setcurrInput}
        />


        {/* Currency Selection */}

        <div className="flex items-end gap-3 mt-6">

          <FromCurrency
            currName={fromCurrency}
            setCurrName={setFromCurrency}
            currFullName={fromCurrFullName}
            setCurrFullName={setFromCurrFullName}
            flag={fromFlag}
          />


          <SwapButton
            onSwap={swapCurrency}
          />


          <ToCurrency
            currName={toCurrency}
            setCurrName={setToCurrency}
            currFullName={toCurrFullName}
            setCurrFullName={setToCurrFullName}
            flag={toFlag}
          />

        </div>


        {/* Convert */}

        <ConvertButton
          onConvert={handleConvert}
        />


        {/* Result */}

        {showResult && (
          <Result
            from={fromCurrency}
            to={toCurrency}
            oneUnit={oneUnitPrice}
            finalOutput={finalOutput}
          />
        )}

      </div>

    </div>
  );
}

export default App;