import { useState, useEffect } from "react";
import '../App.css';
import QRcode from '../sozai/QRcode_googleform.png';
import Xlogo from '../sozai/logo_metaX-3.svg';
import toon from '../sozai/toon.png';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      window.scrollY > 550 ? setIsVisible(true) : setIsVisible(false);
    };

    
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });

    return (
      <div className="render_animation">
        <div className='Aboutus_spacer'/>
        <h2 className="form_title Access">Access</h2>
        <div className="Access_container">
          <div className="Access_description">
            <p>〒113-8519<br/>東京都文京区湯島1-5-45</p>
            <p>東京医科歯科大学 5号館 4F</p>
          </div>
          <div className="Access_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.639673542707!2d139.762325321401!3d35.701783469928046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1906bd3e7f%3A0x37495cf14bf681b6!2z5p2x5Lqs5Yy756eR5q2v56eR5aSn5a2m55Sf5rS75Y2U5ZCM57WE5ZCIIOa5r-Wztumjn-Wggg!5e0!3m2!1sja!2sjp!4v1695773007009!5m2!1sja!2sjp" 
            loading="lazy" className="googlemap" title="googlemap" >google map</iframe>
          </div>
        </div>


        <h2 className="form_title">お問い合わせ</h2>
        <div className={`Content ${isVisible ? "show" :""}`}>
          <div className="Contact_frame">
            <img src={toon} alt="" className="Toonkigou"></img>
            <div className="Contact_container">
            <img src={QRcode} alt="画像を表示できません" className="QRCODE" onClick={() => window.open("https://forms.gle/ZpTh4UZC65jJzWCo6")}></img>
            <p className="line"></p>
            <p className="line"><a href="https://forms.gle/ZpTh4UZC65jJzWCo6" target="_blank" rel="noopener noreferrer" >google form</a></p>
            <p className="line"><a href="https://www.instagram.com/tmdupiano?igsh=MXA2bWVmeTd3cnUyag==">Instagram</a></p>   
            <p className="line">email: piano.tmdu@gmail.com</p>   
            <p className="line">X (twitter) のDMでもかまいません。<img src={Xlogo} className='X_logos' onClick={() => window.open('https://twitter.com/tmdu_piano')} alt="画像を表示できません"></img></p>    
            </div>
          </div>
        </div>      



      </div>
    )
  }
  
  export default Contact;