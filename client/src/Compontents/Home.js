import logo from '../assets/logo_final.png'
import Footer from './Footer'

function Home(){
  
    return(
        <div className='HomePage'>
            <h1 style={{"margin":"0"}}>MUSICBOOK</h1>
            <img alt='' src={logo}></img>
            <Footer/>
        </div>
    )
}

export default Home