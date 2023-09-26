import { useState, useEffect } from "react";
import '../App.css';
import QRcode from '../sozai/QRcode_googleform.png';
import Xlogo from '../sozai/logo_metaX-3.svg';

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
        <h2 className="form_title">お問い合わせ</h2>
        <div className={`Content ${isVisible ? "show" :""}`}>
          <div className="Contact_frame">
          <div className="contact_container">
          <a href="https://forms.gle/ZpTh4UZC65jJzWCo6" target="_blank" rel="noopener noreferrer">google form</a>
          <img src={QRcode} alt="画像を表示できません" className="QRCODE" onClick={() => window.open("https://forms.gle/ZpTh4UZC65jJzWCo6")}></img>
          </div>
            <br/>
            <br/>

            <p>email: piano.tmdu@gmail.com</p>
            <p>X (twitter) のDMでもかまいません。<img src={Xlogo} className='X_logo' onClick={() => window.open('https://twitter.com/tmdupiano')}></img></p>
          </div>
        </div>        



      </div>
    )
  }
  
  export default Contact;