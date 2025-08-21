import Link from "next/link";

export default function PostPage() {
  return <div>
     <Link href="/complex-dashboard/new">
            <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
              Go to Product
            </button>
          </Link>
    Post: Latest Update

  </div>;
}