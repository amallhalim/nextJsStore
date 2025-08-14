"use client";

import React from "react";
import useFetchAllPost from "../../../hooks/useFetchAllPost";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ClientComponent() {
  const { allPost, loading, error } = useFetchAllPost();
  const searchParams = useSearchParams()
  console.log("🚀 ~ ClientComponent ~ searchParams:", searchParams)

  return (
    <div className="space-y-6">
      {loading && (
        <div className="text-center py-8 text-gray-600">
          Loading posts...
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">Error: {error.message || "Something went wrong"}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPost?.length > 0 ? (
          allPost.map((post) => (
            <div
              key={post.id}
              className="bg-blue-50 rounded-lg p-5 border border-blue-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <Link 
                    href={`/post2/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                  <span className="text-xs text-gray-500">#{post.id}</span>
                </div>

                <div className="bg-green-100 rounded-md p-3 border border-green-200">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                <div className="bg-purple-100 rounded-md p-3 border border-purple-200">
                  <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed">
                    {post.body}
                  </p>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No posts available
          </div>
        )}
      </div>
    </div>
  );
}
