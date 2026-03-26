
import Link from "next/link";

export default function Home() {
  console.log("Hello, Next.js!");
  return (
    <>
    <h1>Welcome to Build With Rudraksh!</h1>
    <Link href="/about">Go to about page</Link>
    <Link href="/services">Go to services page</Link>
    </>
  );
}
