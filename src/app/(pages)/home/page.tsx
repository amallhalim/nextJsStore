import Image from 'next/image'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import FeaturedProducts from './components/FeaturedProducts'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import FeaturesSection from './components/FeaturesSection'

// export const metadata = {
//   title: {
//     default: "MyStore - Your Premium Shopping Destination",
//   },
//   description: 'Discover amazing products at MyStore. Shop the latest trends with fast delivery and excellent customer service.',
// }

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <CTASection />
      <FeaturesSection />
    </div>
  )
}
