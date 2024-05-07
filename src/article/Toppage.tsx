
import {useEffect, useState} from 'react';
import '../App.css';
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import content1 from '../sozai/room.webp';
import content2 from '../sozai/content2.webp';
import content3 from '../sozai/article_background.webp';
import content4 from '../sozai/poster.webp';
import Xlogo from '../sozai/logo_metaX-3.svg';

const Toppage = () => {
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
              <h1>東京医科歯科大学<br/>ピアノの会</h1>
            </div>
            <div className='slider_container'>
            <Splide
            hasTrack={false}
            aria-label="introduction"
            options={{
              type   : 'loop',
              focus  : 'center',
              autoplay: true, 
              interval: 3000, 
            }}>
            <SplideTrack>
              <SplideSlide>
                <img className="gallery1" src={content1} alt="画像を表示できません" />
              </SplideSlide>
              <SplideSlide>
                <img className="gallery1" src={content2} alt="画像を表示できません" />
              </SplideSlide>
              <SplideSlide>
                <img className="gallery1" src={content3} alt="画像を表示できません" />
              </SplideSlide>
              <SplideSlide>
                <img className="gallery1" src={content4} alt="画像を表示できません" />
              </SplideSlide>
              <div className='splite__arows'/>
            </SplideTrack>
            </Splide>
            </div>
          </div>

          <div className={`Content ${isVisible ? "show" :""}`}>
            <h2>Latest news</h2>
          <div className='news_background'>
            <p>
            いつでも会員募集中ですので、所属や学年に関わらずどなたでもお気軽にご連絡ください。
            </p>
          </div>


          </div>

          <div className={`Content ${isVisible ? "show" :""}`}>
            <h2>Introduction</h2>
          <div className='frame-background'>
          <div className='frame'>
          <p>東京医科歯科大学ピアノの会は、東京医科歯科大学学友会に所属しているピアノサークルです。<br/>
            学内行事などにおいてピアノ演奏の機会を作ることを目的として設立されました。</p>
          <p>現在、約20名が所属しており、定期演奏会を中心に活動しております。<br/>
            （活動の詳細は"About us"をご覧ください。）</p>

          <p>とても自由なサークルです！<br/>演奏会は任意参加で、楽器もピアノに限りません。</p>
          <p>いつでも会員募集中ですので、所属や学年に関わらず、どなたでもお気軽にご連絡ください。<br/>Contactにお問い合わせフォームがございます。</p>
          
          <p>X(twitter)も運営しています。<img src={Xlogo} className='X_logo' onClick={() => window.open('https://twitter.com/tmdu_piano')} alt="画像を表示できません"></img></p>
          </div>
          </div>
          </div>



        </div>
    )
};


export default Toppage;