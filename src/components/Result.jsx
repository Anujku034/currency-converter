import {useState,useEffect} from 'react';
import getSymbolFromCurrency from "currency-symbol-map";
function Result({from , to, oneUnit, finalOutput}) {
  const CurrencySign = getSymbolFromCurrency(to);
  return (
    <div
      className="
        w-full
        mt-4
        px-6
        py-5
        rounded-2xl
        bg-green-50/60
        border border-green-100
        shadow-sm
      "
    >
      {/* Converted Amount */}
      <p className="text-center text-sm font-medium text-gray-400 mb-3">
        Converted Amount
      </p>

      {/* Icon + Amount */}
      <div className="flex items-center justify-center ">

        {/* Icon */}
        <div
          className="
            w-12 h-12
            rounded-full
            border-2 border-green-200
            bg-green-50
            flex items-center justify-center
            overflow-hidden
            mr-5
            flex-shrink-0
          "
        >
          <img
            src="/Up.png"
            alt="UpIcon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Amount */}
        <h2 className="text-3xl font-bold text-green-600 whitespace-nowrap">
          {CurrencySign} {finalOutput}
        </h2>

      </div>

      {/* Conversion Details */}
      <p className="text-center text-sm text-gray-400 mt-3">
        1 {from} = {oneUnit} {to}
      </p>
    </div>
  );
}

export default Result;