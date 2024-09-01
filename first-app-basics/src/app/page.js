"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  function navigatetoaccount() {
    router.push('account/accountinfo');
  }
  function navigatetoprofile() {
    router.push('profile/profileinfo');
  }

  return (
    <main className="flex min-h-screen flex-col  items-center  p-24">
      <h1 className="text-5xl">welcome in my first app.....</h1>
      <h2>Way 1 Of Navigation</h2>
      <div className="flex gap-5 mt-12">
        <Link
          className="p-4 cursor-pointer  bg-blue-500 w-[170px] h-[60px] text-white font-bold"
          href={"/account/accountinfo"}
        >
          My Account Page
        </Link>
        <Link
        className="p-4 cursor-pointer  bg-blue-500  h-[60px] text-white font-bold"
        href={"client-data-fetch"}
      >
        Client Side Data Fetch
      </Link>
      <Link
      className="p-4 cursor-pointer  bg-blue-500  h-[60px] text-white font-bold"
      href={"/server-data-fetch"}
    >
      Server Side Data Fetch
    </Link>
    <Link
    className="p-4 cursor-pointer  bg-blue-500  h-[60px] text-white font-bold"
    href={"/client-data-fetch-swr"}
  >
    Client Side Data Fetch using SWR
  </Link>
        <Link
          className="p-4 cursor-pointer  bg-blue-500 w-[170px] h-[60px] text-white font-bold"
          href={"/profile/details"}
        >
          My Profile Page
        </Link>
      </div>
      <h2 className="mt-5">Way 2 Of Navigation</h2>
      <div className="flex gap-5 mt-12">
        <buton
          onClick={navigatetoaccount}
          className="p-4 cursor-pointer  bg-green-500 w-[170px] h-[60px] text-white font-bold"
        >
          My Account Page
        </buton>

        <button
          onClick={navigatetoprofile}
          className="p-4 cursor-pointer  bg-green-500 w-[170px] h-[60px] text-white font-bold"
        >
          My Profile Page
        </button>
      </div>
    </main>
  );
}
