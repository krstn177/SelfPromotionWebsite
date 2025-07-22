import { AboutMe } from './AboutMe/AboutMe'
import { Landing } from './Landing/Landing'
import { Process } from './Process/Process'
import { Showcase } from './Showcase/Showcase'
import { Separator } from '../Shared/Separators/Separator/Separator'
import { SeparatorInverted } from '../Shared/Separators/SeparatorInverted/SeparatorInverted'
import { Features } from './Features/Features'
import { ContactForm } from './ContactForm/ContactForm'
import { PlatformPros } from './PlatformPros/PlatformPros'
import { ApproachPros } from './ApproachPros/ApproachPros'
import { Reviews } from './Reviews/Reviews'
import { FAQ } from './FAQ/FAQ'

export const Home = () => {
  return (
    <>
        <Landing />
        <PlatformPros />
        <ApproachPros />
        <Process />
        <Separator fill="var(--color-secondary)" bgColor="var(--color-background)" />
        <AboutMe />
        <Separator fill="var(--color-text)" bgColor="var(--color-secondary)" />
        <Showcase />
        <Features />
        <Reviews />
        <FAQ />
        <SeparatorInverted fill="var(--color-background)" bgColor="var(--color-primary)" />
        <ContactForm />
    </>
  )
}
