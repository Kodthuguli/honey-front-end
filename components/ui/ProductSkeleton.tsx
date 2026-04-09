export default function ProductSkeleton() {
  return (
    <div className="bg-[#F4E6D5] rounded-lg p-5 animate-pulse">

      {/* Image */}
      <div className="w-full h-56 bg-[#e8d6c2] rounded-lg"></div>

      {/* Title */}
      <div className="h-5 bg-[#e8d6c2] rounded mt-5 w-3/4"></div>

      {/* Description */}
      <div className="h-4 bg-[#e8d6c2] rounded mt-3 w-full"></div>
      <div className="h-4 bg-[#e8d6c2] rounded mt-2 w-2/3"></div>

      {/* Price */}
      <div className="h-5 bg-[#e8d6c2] rounded mt-4 w-1/3"></div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <div className="flex-1 h-9 bg-[#e8d6c2] rounded"></div>
        <div className="flex-1 h-9 bg-[#e8d6c2] rounded"></div>
      </div>

    </div>
  );
}