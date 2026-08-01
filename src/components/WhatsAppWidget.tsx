"use client";

import { useEffect, useState } from "react";

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show widget with a small delay for a smooth entrance
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/447795109561?text=Hello%20Amin,%20I%20would%20like%20to%20learn%20more%20about%20MadedGar%20care%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 group border border-white/10 select-none cursor-pointer"
      style={{
        boxShadow: "0 10px 30px -5px rgba(37, 211, 102, 0.4), 0 8px 16px -8px rgba(37, 211, 102, 0.4)"
      }}
    >
      {/* Pulse indicator */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-5.5 h-5.5 fill-current shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.257 1.87 13.785.839 11.15.839 5.711.839 1.29 5.26 1.287 10.701c-.001 1.707.456 3.37 1.32 4.815L1.62 20.354l5.027-1.2zm12.576-5.064c-.327-.164-1.93-.953-2.229-1.062-.299-.109-.517-.164-.734.164-.218.327-.844 1.062-1.035 1.28-.19.218-.381.245-.708.081-3.218-1.611-4.445-2.779-5.875-5.234-.381-.652.382-.606 1.092-2.023.11-.218.055-.409-.028-.573-.082-.164-.734-1.77-.999-2.424-.26-.624-.526-.54-.734-.551-.19-.01-.409-.012-.626-.012-.218 0-.573.082-.872.409-.299.327-1.143 1.118-1.143 2.727s1.17 3.16 1.334 3.377c.164.218 2.302 3.513 5.578 4.924.779.336 1.388.537 1.862.689.784.248 1.498.213 2.061.129.628-.094 1.93-.79 2.202-1.554.272-.764.272-1.418.19-1.554-.082-.136-.299-.218-.627-.382z" />
      </svg>

      {/* Name Label */}
      <span className="font-heading font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
        Amin
      </span>
    </a>
  );
}
