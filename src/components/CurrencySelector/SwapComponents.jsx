function SwapButton({ onSwap }) {

  return (

    <button
      onClick={onSwap}
      className="
        w-12
        h-12
        mb-1
        flex
        items-center
        justify-center
        rounded-full
        bg-blue-100
        text-blue-600
        text-xl
        shadow-sm
        hover:bg-blue-200
        transition
        shrink-0
      "
    >

      ⇄

    </button>

  );
}

export default SwapButton;