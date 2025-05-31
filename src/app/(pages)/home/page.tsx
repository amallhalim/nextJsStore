import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'home',
  description: 'home page',
}
export default function page() {
  return (
    <div>home
      <button style={{ backgroundColor: "#f2f2", color: "#000" }}>
          <Link href="/product">go to product</Link>
        </button>
           <nav className="p-4">
          <Link href="/product">
            <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
              Go to Product
            </button>
          </Link>
        </nav>
    
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={600}
          height={300}
          className="block md:hidden"
        />
    </div>
  )
}
