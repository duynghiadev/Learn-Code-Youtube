"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="logo">
        <Image src="/ninedev.png" alt="logo-ninedev" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
      <button onClick={() => router.push("dashboard")}>dashboard</button>
    </nav>
  );
};

export default Navbar;
