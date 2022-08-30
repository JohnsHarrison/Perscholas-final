import email from '../assets/email.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

function Footer(){
    return(
        <div className="Footer">
            <a href='mailto: jshar15089@gmail.com'>
            <img src={email} alt=''/>
            </a>
            <a href='https://github.com/JohnsHarrison'>
            <img src={github} alt=''/>
            </a>
            <a href='https://www.linkedin.com/in/jharrisons/'>
            <img src={linkedin} alt=''/>
            </a>
        </div>
    )
}

export default Footer