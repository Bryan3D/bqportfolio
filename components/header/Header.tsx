import Image from "next/image";
import Link from "next/link";
import logo from "./bqLogo_banner_2_.jpg";




export default function Header() {
  return (
    <header className="relative w-full border-b overflow-hidden">
      {/* Banner container must have an explicit height when using Image fill */}
      <div className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[300px]">
        <Image
          src={logo}
          alt="Bryan Quero Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-container object-center"
          // optional: fine-tune crop
          style={{ objectPosition: "center 35%" }}
        />
      </div>
    </header>
  );
}





// const Header = () => {
//   return ( 
//     <header className="fixed">
//       <div className="container mx-auto flex items-center gap-6">
//         <Link href="/">
//           <Image src={logo} alt="Logo" width={512} />
//         </Link>
//         <nav className="ml-auto">
//           <ul className="flex items-center gap-8 mr-10">
//             <li>
//               <Link href="/">About</Link>
//             </li>
//             <li>
//               <Link href="/">Project</Link>
//             </li>
//             <li>
//               <Link href="/">Hire Me</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//    );
// }
 
// export default Header;
