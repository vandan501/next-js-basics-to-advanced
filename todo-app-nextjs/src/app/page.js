'use-client'
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-blue-600 w-full h-[100vh] overflow-hidden flex justify-center items-center">

    <Link href={'/blogs'} className="bg-yellow-300 font-extrabold text-red-600 w-[170px] rounded-md hover:transition-all hover:bg-black hover:text-white hover:duration-3000 h-auto text-center p-2 align-center cursor-pointer">Explore Blogs</Link>
    
    </div> );
}
