"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Menu, X, Folder, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="mr-4 "
          variant="secondary"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " />}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/dash-board" className="flex">
            <Folder className="mr-2 h-4 w-4" />
            <span> Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/payments" className="flex">
            <CreditCard className="mr-4 h-4 w-4" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
