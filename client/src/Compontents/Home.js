import logo from '../assets/logo_final.png'
import Footer from './Footer'

function Home(){
  
    return(
        <div>
            <h1>MUSICBOOK</h1>
            <img alt='' src={logo}></img>
            <h2>Connect through music</h2>
            <Footer/>
        </div>
    )
}

export default Home