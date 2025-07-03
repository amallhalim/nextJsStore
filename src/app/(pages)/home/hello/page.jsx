'use client';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import React from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  console.log("🚀 ~ Page ~ searchParams:", searchParams)
  console.log("🚀 ~ updateSorting ~ searchParams.toString():", searchParams.toString())
  const search = searchParams.get('search')
  console.log("🚀 ~ Page ~ search:", search)
  const has = searchParams.has('search')
  console.log("🚀 ~ Page ~ has:", has)
  const getall = searchParams.getAll('search')
  console.log("🚀 ~ Page ~ getall:", getall)
  const values = searchParams.values('search')
  console.log("🚀 ~ Page ~ values:", values)


  const pathname = usePathname();

  const isProductActive = pathname === '/home' || pathname.startsWith('/home/');
  console.log("🚀 ~ Page ~ pathname:", pathname)
  console.log("🚀 ~ Page ~ isProductActive:", isProductActive)

  function updateSorting(sortOrder) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sortOrder);
    window.history.pushState(null, '', `?${params.toString()}`);
    params.set('test', "test");
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  function switchLocale(locale) {
    const newPath = `/${pathname}${locale}`;
    window.history.replaceState(null, '', newPath);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Hello Page</h1>

      <Link
        href="/post2"
        className={
          isProductActive
            ? "bg-red-200 ext-white px-4 py-2 rounded hover:bg-blue-700"
            : "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        }
      >
        Go to Product
      </Link>

      <div className="mb-6 mt-6">
        <h2 className="text-lg font-semibold mb-2">Sort Options:</h2>
        <div className="flex gap-4">
          <button
            onClick={() => updateSorting('asc')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sort Ascending
          </button>
          <button
            onClick={() => updateSorting('desc')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sort Descending
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Switch Language:</h2>
        <div className="flex gap-4">
          <button
            onClick={() => switchLocale('en')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            English
          </button>
          <button
            onClick={() => switchLocale('fr')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            French
          </button>
        </div>
      </div>
    </div>
  );
}
