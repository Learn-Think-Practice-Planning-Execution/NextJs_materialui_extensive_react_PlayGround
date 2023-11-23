"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Headers() {
  // return new Error("this is error");

  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <ul
      style={{
        display: "flex",
        width: "400px",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <li>
        <Link className={pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={pathname === "/" ? "active" : ""} href="/about">
          about
        </Link>
      </li>
      <li>
        <Link className={pathname === "/" ? "active" : ""} href="/contact">
          contact
        </Link>
      </li>
    </ul>
  );
}
