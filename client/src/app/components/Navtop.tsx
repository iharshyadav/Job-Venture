"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navtop() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      className="bg-transparent"
      classNames={{
        wrapper: "max-w-[1440px] px-2 dark:text-white text-black",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex pr-3" justify="start">
        <Link href="/"><NavbarBrand className="font-black text-lg">Job Venture</NavbarBrand></Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12 font-semibold" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/findJobs">
            Find Jobs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/learnEnhance" aria-current="page">
            Learn & Enhance
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/postjobs">
            Post Jobs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className="text-[#4640DE] font-bold">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-[#4640DE] text-white font-bold"
            href="/signUp"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/findJobs">
            Find Jobs
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/learnEnhance" aria-current="page">
            Learn & Enhance
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/postjobs">
            Post Jobs
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
