import {useEffect, useState} from 'react';
import './App.css';

const About_Us = ()=>{

    const [isVisible, setIsVisible] = useState(-1);

    const toggleVisibility = () => {

     setIsVisible(Math.floor(window.scrollY / 175));
    
    }
    
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });
    
    return (

    <div>
    <div className='Aboutus_spacer'/>
    <div className="description_container">
        <div className='description_title'>
            <h2>当サークルの活動内容</h2>
        </div>
        <div className='description_content'>
        <p> 東京医科歯科大学ピアノの会は同大学の学生や卒業生を中心とし、学内行事などにおいてピアノ演奏の機会を作ることを目的として設立されました。
            <br/><br/>現在では、6月に行われる学外ホールでの演奏会や文化祭、献体の会や卒業式、さらに附属病院でのクリスマスコンサートなどさまざまな機会に部員による演奏活動を行っております。</p>
        </div>
    </div>

    
    <div className={`Content ${isVisible>= 1 ? "show" :""}`}>
        <h2>過去の演奏会記録</h2>
        <div className='forum_archive'>
            <div className='forum_caption'>
                <button onClick={() =>window.open("*")}>市民フォーラム</button>
            </div>
            <div className='forum_buttons'>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_6332ea7ad645498c8c8edf0871b7e5b6.pdf")}>2013</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22cb3976c43447bc8183c01f3ca5635d.pdf")}>2014</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22ba44a483bd40459a7aafcf48136d02.pdf")}>2015</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_402e005c67db4879bc12088a94fcb79c.pdf")}>2016</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_c95793eee6464fe5a9d2ab89003ab2fe.pdf")}>2017</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_84098ce7bf80487a9acac6d6642400dc.pdf")}>2018</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_d4aaf0f673b44460b5365cc761b28047.pdf")}>2019</button>
            </div>
        </div>
    </div>

    <div className={`Content ${isVisible >= 3 ? "show" :""}`}>
        <div className='forum_archive'>
            <div className='forum_caption'>
                <button onClick={() =>window.open("*")}>お茶の水祭</button>
            </div>
            <div className='forum_buttons'>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_6332ea7ad645498c8c8edf0871b7e5b6.pdf")}>2013</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22cb3976c43447bc8183c01f3ca5635d.pdf")}>2014</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22ba44a483bd40459a7aafcf48136d02.pdf")}>2015</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_402e005c67db4879bc12088a94fcb79c.pdf")}>2016</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_c95793eee6464fe5a9d2ab89003ab2fe.pdf")}>2017</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_84098ce7bf80487a9acac6d6642400dc.pdf")}>2018</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_d4aaf0f673b44460b5365cc761b28047.pdf")}>2019</button>
            </div>
        </div>
    </div>

    <div className={`Content ${isVisible>= 5 ? "show" :""}`}>
        <div className='forum_archive'>
            <div className='forum_caption'>
                <button onClick={() =>window.open("*")}>クリスマスコンサート</button>
            </div>
            <div className='forum_buttons'>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_6332ea7ad645498c8c8edf0871b7e5b6.pdf")}>2013</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22cb3976c43447bc8183c01f3ca5635d.pdf")}>2014</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_22ba44a483bd40459a7aafcf48136d02.pdf")}>2015</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_402e005c67db4879bc12088a94fcb79c.pdf")}>2016</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_c95793eee6464fe5a9d2ab89003ab2fe.pdf")}>2017</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_84098ce7bf80487a9acac6d6642400dc.pdf")}>2018</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_d4aaf0f673b44460b5365cc761b28047.pdf")}>2019</button>
            </div>
        </div>
    </div>

    </div>
    );
}

export default About_Us;