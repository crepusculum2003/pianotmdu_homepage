import { useState, useEffect } from "react";
import '../App.css';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      window.scrollY > 20 ? setIsVisible(true) : setIsVisible(false);
    };

    
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });

    return (
      <div className="render_animation">
        <div className='Aboutus_spacer'/>
        <h2 className="form_title">お問い合わせフォーム</h2>
        <div className={`Content ${isVisible ? "show" :""}`}>

            <a href="*">google form</a>
            <br/>
            <br/>

            <p>email: piano.tmdu@gmail.com</p>

            <br/>
            <p>X (twitter) のDMでもかまいません。</p>
            <a href='https://twitter.com/tmdupiano'>アカウントはこちら</a>
        </div>        



      </div>
    )
  }
  
  export default Contact;