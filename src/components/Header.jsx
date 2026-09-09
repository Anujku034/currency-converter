function Header() {

  return (

    <div className="text-center">

      <img
        src="/WorldLogo.png"
        alt="World"
        className="w-16 h-16 mx-auto object-contain"
      />


      <h1 className="text-4xl font-bold text-gray-900 mt-3">
        Currency Converter
      </h1>


      <p className="text-gray-600 text-lg mt-1">
        Convert your money across the world ✈️
      </p>

    </div>

  );
}

export default Header;