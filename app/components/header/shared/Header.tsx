// app/components/header/shared/Header.tsx

import Image from "next/image";


export default function Header() {
  return (
    <header className="relative w-full border-b">
      <Image
        src="/bqLogo_banner_2.jpg"
        alt="Bryan Quero Portfolio"
        width={2048}
        height={300}
        priority
        className="w-full h-auto"
      />

      <div className="absolute top-4 right-4 z-10">
       
      </div>
    </header>
  );
}
  


