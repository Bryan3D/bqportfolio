// app/components/Navbar.jsx
'use client';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from './modeToggler';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/services' },
    { name: 'Hire Me', href: '/contact' },
  ];

  return (
    <nav className="bg-violet-700 px-4">
      <div className="container mx-auto flex h-14 items-center gap-6">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/BryanAvatar.gif" />
          <AvatarFallback>BQ</AvatarFallback>
        </Avatar>

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="inline-flex h-10 items-center text-white hover:text-lime-400 leading-none"
          >
            {item.name}
          </Link>
        ))}

        <div className="ml-auto flex items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
