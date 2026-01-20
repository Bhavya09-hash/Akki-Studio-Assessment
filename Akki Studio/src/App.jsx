import { BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/navbar.jsx'
import Carousel from './Components/Carousel/carousel.jsx'
import Container from './Components/Container/container.jsx'
import Information from './Components/Information/info.jsx'
import FocusAreas from './Components/Focus/focus.jsx'
import Grant from './Components/Grant/grant.jsx'
import Events from './Components/Events/events.jsx'
import Footer from './Components/Footer/footer.jsx'

function App() {
  
  return (
    <>
          <Navbar />
          <Carousel/>
          <Container/>
          <Information/>
          <FocusAreas/>
          <Grant/>
          <Events/>
          <Footer/>
    </>
  )
}

export default App
