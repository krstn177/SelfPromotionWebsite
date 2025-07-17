import { AboutMe } from './AboutMe/AboutMe'
import { Landing } from './Landing/Landing'
import { Process } from './Process/Process'
import { Showcase } from './Showcase/Showcase'
import { Separator } from './Separator/Separator'
import { Features } from './Features/Features'
import { ContactForm } from './ContactForm/ContactForm'

export const Home = () => {
  return (
    <>
        <Landing />
        <Process />
        <Separator fill="var(--color-secondary)" bgColor="var(--color-background)" />
        <AboutMe />
        <Separator fill="var(--color-text)" bgColor="var(--color-secondary)" />
        <Showcase />
        <Features />
        <ContactForm />
    </>
  )
}
