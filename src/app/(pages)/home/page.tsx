import Image from "next/image";
 import image2 from "../../../assets/img/test.jpg"
import Link from "next/link";

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
      src={image2}
       alt="Vercel Logo" 
       width={2000} height={1000}/>

        {/* <AvatarUploadPage/> */}

        <Image
          src="/assets/img/test.jpg"
          alt="Test Image"
          width={600}
          height={300}
          className="hidden md:block"
        />
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
