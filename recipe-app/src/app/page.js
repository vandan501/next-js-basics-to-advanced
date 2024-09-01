import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-400 ">
    <h1 className="text-yellow-300 text-4xl underline text-center">Welcome to my recipe website</h1>
    <Link href={'/recipe-list'} className="underline mt-5 text-center w-[100%] absolute border border-black text-xl text-blue-600">
    Show Recipe
    </Link>
    </div>
  );
}
