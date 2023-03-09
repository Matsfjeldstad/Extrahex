export default function Button({ mobile, buttonText }) {
  return (
    <button
      className={`transition-all ${
        mobile ? 'flex' : 'hidden'
      } justify-center duration-150 overflow-hidden items-center relative rounded-full text-base px-9 py-4 bg-gradient-to-r from-[#00A3FF] to-[#0E6697] text-white hover:scale-105 sm:flex `}
    >
      <span className="relative z-30">{buttonText}</span>
    </button>
  );
}
