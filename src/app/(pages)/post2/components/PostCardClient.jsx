"use client"

import Link from "next/link";

export default function PostCardClient({ title, body, id }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1">
            {title}
          </h2>
          <Link 
            href={`/post2/${id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium ml-4 whitespace-nowrap"
          >
            View Details →
          </Link>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {body}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">Post #{id}</span>
          <span className="text-xs text-gray-400">
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
