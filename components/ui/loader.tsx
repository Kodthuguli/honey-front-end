"use client";

export default function Loader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20">

      {/* Honey Drop */}
      <div className="relative flex items-center justify-center">

        {/* Glow */}
        <div className="absolute w-16 h-16 bg-[#C4622D]/20 rounded-full blur-xl animate-pulse"></div>

        {/* Drop */}
        <div className="w-8 h-10 bg-[#C4622D] rounded-b-full rounded-t-[50%] animate-bounce shadow-md"></div>

      </div>

      {/* Text */}
      <p className="text-[#3A1F16] font-medium tracking-wide">
        {text}
      </p>

    </div>
  );
}