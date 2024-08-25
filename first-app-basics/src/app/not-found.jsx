import Link from "next/link";
import React from "react";

function notfound() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 bg-pink-400 min-h-screen">
      <h1 className="text-5xl align-center font-semibold">
        Oops ! Page Not Found
      </h1>
      <h2 className="text-4xl align-center font-semibold">Back To Home Page</h2>
      <Link
        className="underline text-purple-900 text-2xl align-center"
        href="/"
      >
        Back to home Page{" "}
      </Link>
    </div>
  );
}

export default notfound;
