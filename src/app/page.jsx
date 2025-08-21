"use client";
import Image from "next/image";
import styles from "../styles.module.css";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import HomeContent from "./(pages)/home/page";

export default function Home() {
  const router = useRouter();
  const redirectUser = () => {
    redirect("/dashboard")
  }
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
 
<HomeContent/>
       
      </main>

  );
}
