import Image from "next/image";
 import image2 from "../../../assets/img/test.jpg"
export default function page() {
  return (
    <div>home

      <Image 
      src={image2}
       alt="Vercel Logo" 
       width={2000} height={1000}/>

      
    </div>
  )
}
