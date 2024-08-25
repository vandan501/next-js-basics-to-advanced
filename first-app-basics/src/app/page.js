import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center  p-24">
     <h1 className="text-5xl">welcome in my first app.....</h1>
<div className="flex gap-5 mt-12">

  
     <Link className="p-4 cursor-pointer  bg-blue-500 w-[170px] h-[60px] text-white font-bold" href={"/account/accountinfo"}>My Account Page</Link>
 
     <Link className="p-4 cursor-pointer  bg-blue-500 w-[170px] h-[60px] text-white font-bold" href={"/profile/details"}>My Profile Page</Link>
     </div>
      </main>
  );
}
