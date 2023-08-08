"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Hello
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
    </main>
  );
}
