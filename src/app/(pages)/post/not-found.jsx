"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const path = usePathname();
  const postID = path.split("/")[2]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h1 className="text-1xl font-bold text-gray-600 mb-4">Sorry Not Found postDetails for
        <span className="text-1xl font-bold text-blue-600 mb-4">     {postID}</span>
      </h1>

      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/post"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go all post
      </Link>

    </div>
  );
}
