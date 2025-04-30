import React from "react";
import { NAV_LINKS } from "@/constans";
import Link from "next/link";
import { MenuIcon, User } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href={""}>
          <span>Candy textile</span>
        </Link>
        <ul>
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href}>{link.label}</Link>
          ))}
        </ul>
        <div>
          <Button>
            <User>Login</User>
          </Button>
        </div>
        <MenuIcon></MenuIcon>
      </div>
    </nav>
  );
};

export default Navbar;
