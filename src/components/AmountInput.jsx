import getSymbolFromCurrency from "currency-symbol-map";

function AmountInput({ from , inputt, setinput}) {

  const CurrencySign = getSymbolFromCurrency(from);


  return (

    <div className="mt-7">

      <label className="block text-gray-700 font-semibold mb-2">
        Enter Amount
      </label>


      <div
        className="
          flex
          items-center
          border
          border-gray-300
          rounded-xl
          bg-white/90
          px-4
          py-3
        "
      >

        <span className="text-xl text-gray-500 mr-3">
          {CurrencySign}
        </span>


        <input
          type="number"
          value={inputt}
          onChange = {(e) => setinput(e.target.value)}
          placeholder="Enter amount"
          className="
            w-full
            outline-none
            bg-transparent
            text-lg
            text-gray-700
          "
        />

      </div>

    </div>

  );
}

export default AmountInput;