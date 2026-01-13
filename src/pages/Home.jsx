import { About } from "../components/sections/About"
import { Contact } from "../components/sections/Contact"
import { Services } from "../components/sections/Services"
import { Hero } from "../components/sections/ Hero"


export const Home = () => {
    return (
    <>
      <div className='grid justify-center items-center bg-blue-950 text-white min-h-screen'>
        <Hero/>
        <Services/>
        <Contact/>
        <About/>
      </div>
     
    </>
  )
}