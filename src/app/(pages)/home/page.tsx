import Image from "next/image";
 import image2 from "../../../assets/img/test.jpg"

export default function page() {
  return (
    <div>home

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
