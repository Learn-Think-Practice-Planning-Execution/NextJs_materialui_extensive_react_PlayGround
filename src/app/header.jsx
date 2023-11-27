"use client";

import Image from "next/image";
import { notFound, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Headers() {
  // return new Error("this is error");

  const pathname = usePathname();
  const router = useRouter();
  console.log("pathname", pathname);
  console.log("pathname", router);
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
