import React from "react";

export default function Loading() {
  return (
    <div className="flex min-w-screen min-h-screen justify-center items-center bg-black">
      <div className="p-4">
        <button
          type="button"
          className="pb-3 pl-3 pr-3 rounded-md bg-indigo-500"
          disabled
        >
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Processing...
        </button>
      </div>
    </div>
  );
}
