'use client';

import { useRouter } from 'next/router';
import React from 'react';

export default function Error({ error, reset }) {
  console.error(error); // helpful during development
const router = useRouter();
function reloadPage() {
  console.log("reload")
  router.refresh()
reset()

}
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-700 mb-6">
        Sorry, an unexpected error has occurred.
      </p>

      <button
        onClick={reloadPage}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Try Again222 product
        {/* <Lin href="/documentation"> documentation </Lin> */}
      </button>
    </div>
  );
}
