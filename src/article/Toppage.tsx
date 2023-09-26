
import {useEffect, useState} from 'react';
import '../App.css';
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import samplepicture from '../sozai/pianoprototype.jpg';
import Xlogo from '../sozai/logo_metaX-3.svg';

const Toppage = () =>{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });

    return(
        <div className='render_animation'>
          
          <div className='slider_flexbox'>
            <div className='slider_title'>
              <h2>東京医科歯科大学ピアノの会</h2>
            </div>
            <div className='slider_container'>
            <Splide
            hasTrack={false}
            aria-label="introduction"
            options={{
              type   : 'loop',
              focus  : 'center',
              autoplay: true, // 自動再生を有効
              interval: 3000, // 自動再生の間隔を3秒に設定
            }}>
            <SplideTrack>
              <SplideSlide>
                <img className="gallery1" src={samplepicture} alt="画像を表示できません" />
              </SplideSlide>
              <SplideSlide>
                <img className="gallery1" src={samplepicture} alt="画像を表示できません" />
              </SplideSlide>
              <SplideSlide>
                <img className="gallery1" src={samplepicture} alt="画像を表示できません" />
              </SplideSlide>
              <div className='splite__arows'/>
            </SplideTrack>
            </Splide>
            </div>
          </div>

          <div className={`Content ${isVisible ? "show" :""}`}>
            <h1>Introduction</h1>
          <div className='frame-background'>
          <div className='frame'>
            <p>東京医科歯科大学 ピアノの会では様々な活動をしております。</p>
            <ul>
              <li>学外ホールでの演奏会</li>
              <li>お茶の水祭での演奏</li>
              <li>附属病院でのクリスマスコンサート</li>
		        </ul>
            <p>ピアノ以外の楽器でも室内楽であればコンサート等で演奏することができます。
            <br></br>
            <span className='examples'>ex. バイオリン、フルート、声楽 </span>
            <br></br>
            演奏希望の方はお気軽にご相談ください。
            </p>
            <p>X(twitter)も運営しています。<img src={Xlogo} className='X_logo' onClick={() => window.open('https://twitter.com/tmdupiano')}></img></p>
            
          </div>
          </div>
          </div>
        </div>
    )
} 


export default Toppage;