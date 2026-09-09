import { useState, useEffect } from "react";

function FromCurrency({
  currName,
  setCurrName,
  currFullName,
  setCurrFullName,
}) {
  const [Currencies, setCurrencies] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  // Get currencies
  useEffect(() => {
    fetch("https://openexchangerates.org/api/currencies.json")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(data);
      })
      .catch((error) => {
        console.log("Currency API Error:", error);
      });
  }, []);

  // Get country code according to selected currency
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/currency/${currName}?fields=cca2`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Country API failed");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Selected Currency:", currName);
        console.log("Country Data:", data);

        if (Array.isArray(data) && data.length > 0) {
          setCountryCode(data[0].cca2.toLowerCase());
        }
      })
      .catch((error) => {
        console.log("Country API Error:", error);
        setCountryCode("");
      });
  }, [currName]);

  return (
    <div className="relative flex-1">

      <label className="block text-gray-700 font-semibold mb-2">
        From
      </label>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          bg-white
          border
          border-gray-300
          rounded-xl
          px-3
          py-3
          flex
          items-center
          gap-3
          text-left
        "
      >

        {countryCode && (
          <img
            src={`https://flagcdn.com/w80/${countryCode}.png`}
            alt="Currency Flag"
            className="w-9 h-6 object-cover rounded"
          />
        )}

        <div className="min-w-0">

          <p className="font-bold text-gray-800 text-lg">
            {currName}
          </p>

          <p className="text-sm text-gray-500 truncate">
            {currFullName}
          </p>

        </div>

        <span className="ml-auto text-gray-500">
          ▼
        </span>

      </button>

      {isOpen && (

        <div
          className="
            absolute
            z-50
            mt-2
            w-full
            max-h-60
            overflow-y-auto
            bg-white
            border
            border-gray-200
            rounded-xl
            shadow-xl
          "
        >

          {Object.entries(Currencies).map(([code, name]) => (

            <div
              key={code}
              onClick={() => {
                setCurrName(code);
                setCurrFullName(name);
                setIsOpen(false);
              }}
              className="
                px-3
                py-2
                cursor-pointer
                hover:bg-gray-100
              "
            >

              <span className="font-bold text-gray-800">
                {code}
              </span>

              <span className="text-gray-500 ml-2 text-sm">
                {name}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default FromCurrency;