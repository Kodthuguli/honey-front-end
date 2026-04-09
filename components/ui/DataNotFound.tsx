"use client";

import { SearchX } from "lucide-react";

interface Props {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function DataNotFound({
  title = "No Products Found",
  message = "Try adjusting your filters or search term.",
  actionLabel = "Reset Filters",
  onAction,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F4E6D5] mb-6">
        <SearchX size={36} className="text-[#C4622D]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-[#3A1F16]">
        {title}
      </h3>

      {/* Message */}
      <p className="mt-2 text-[#6F4E37] max-w-md">
        {message}
      </p>

      {/* Action */}
      {onAction && (
        <button
          onClick={onAction}
          className="
            mt-6
            px-6 py-2
            bg-[#C4622D]
            text-white
            rounded-md
            hover:bg-[#552619]
            transition
          "
        >
          {actionLabel}
        </button>
      )}

    </div>
  );
}