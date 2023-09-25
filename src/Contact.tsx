import react from "react";
import { useState, useEffect } from "react";
import icon from "./menu_icon.svg";


const Contact = () => {
    const [isVisible, setIsVisible] = useState(-1);

    const toggleVisibility = () => {
      window.scrollY > 10 ? setIsVisible(1) : setIsVisible(0);
    };

    
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });

    return (
      <div>
        <div className='Aboutus_spacer'/>
        <h2　className="form_title">お問い合わせフォーム</h2>
        <div className={`Content ${isVisible ? "show" :""}`}>

            <a href="*">google form</a>
            <br/>
            <br/>

            <p>email: piano.tmdu@gmail.com</p>

            <br/>
            <p>twitterのDMでもかまいません。</p>
            <a href='https://twitter.com/tmdupiano'>アカウントはこちら</a>
        </div>        



      </div>
    )
  }
  
  export default Contact;