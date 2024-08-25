"use client"
import { useRouter } from "next/navigation";
const myprofile = () => {
  const router = useRouter()

  function backtohome() {
    router.back("");
  }
  return (
    <div className="flex flex-col gap-9 bg-yellow-300 min-h-screen w-full justify-center items-center">
      <h1 className="text-5xl">This is My account info page</h1>
      <button
        className="p-3 w-[150px] mt-8 bg-red-600 font-semibold h-[60px] block text-white"
        onClick={backtohome}
      >
        Back to home
      </button>
    </div>
  );
};

export default myprofile;
