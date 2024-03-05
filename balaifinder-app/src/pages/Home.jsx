import { FaArrowRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Register from './Register'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Choose from '../components/Choose'
import AboutUs from '../components/AboutUs'
function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Offers />
            <Choose />
            <AboutUs />
            <Footer />
        </div>
    )
}
export default Home