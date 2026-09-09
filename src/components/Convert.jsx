function ConvertButton({ onConvert }) {

  return (

    <button
      onClick={onConvert}
      className="
        w-full
        mt-7
        py-3
        bg-blue-600
        text-white
        font-semibold
        text-lg
        rounded-xl
        shadow-md
        hover:bg-blue-700
        transition
      "
    >

      ↻ &nbsp; Convert

    </button>

  );
}

export default ConvertButton;