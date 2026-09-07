import Header from '../components/Header'
import Hero from '../components/Hero'
import LearningManagementSystem from '../components/LearningManagementSystem'
import TrainingPrograms from '../components/TrainingPrograms'
import ManagementDevelopment from '../components/ManagementDevelopment'
import TransformationHub from '../components/TransformationHub'
import TrainingTheConsultant from '../components/TrainingTheConsultant'
import CallToAction from '../components/CallToAction'
import Testimonials from '../components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LearningManagementSystem />
      <TrainingPrograms />
      <ManagementDevelopment />
      <TransformationHub />
      <TrainingTheConsultant />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  )
}
