/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function Modal({ open, onClose, children }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
