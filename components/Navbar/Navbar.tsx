import { NAV_LINKS } from "@/constans";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border border-b shadow-sm">
      <div className="flex justify-between items-center px-3 py-3 relative z-30 container">
        <Link
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay={100}
          href="/"
          className="font-semibold font-pacifiko text-xl"
        >
          <Image
            alt=""
            src={"/img/candy.png"}
            width={500}
            height={500}
            className="mx-auto transform p-6 rounded-full group-hover:scale-105:"
          ></Image>
        </Link>
        <MenuIcon className="lg:hidden inline-block cursor-pointer w-8 h-8 text-green-600" />
        <ul className="hidden lg:flex h-full gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay={link.delay}
              className="font-popins flex items-center cursor-pointer hover:font-bold text-slate-700 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
