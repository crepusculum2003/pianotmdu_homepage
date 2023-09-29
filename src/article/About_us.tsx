import {useEffect, useState} from 'react';
import '../App.css';

const About_Us = ()=>{

    const [isVisible, setIsVisible] = useState(-1);

    const toggleVisibility = () => {

     setIsVisible(Math.floor(window.scrollY / 175));
    
    }
    
    
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    });
    
    return (

    <div className='render_animation'>
    <div className='Aboutus_spacer'/>
    <div className="description_container">
        <div className='description_title'>
            <h2>当サークルの活動内容</h2>
        </div>
        <div className='description_content'>

        <p>東京医科歯科大学ピアノの会は、<br/>年3回の定期演奏会を中心に活動しております。</p>

        <p>定期演奏会</p>
        <ul>
            <li>9 月 夏の響演（＠豊洲シビックセンターホール）</li>
            <li>10月 お茶の水祭コンサート（＠東京医科歯科大学湯島キャンパス）</li>
            <li>12月 クリスマスコンサート（＠東京医科歯科大学病院）</li>
        </ul>
            <p>近年は規模を縮小しておりましたが、2023年からはお茶の水祭も対面で執り行えることとなり、本格的に活動を再開していく予定です。</p>
            <p>演奏機会も増やしていきたいと考えておりますので、どうぞよろしくお願いいたします。</p>

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
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_a99119fd398c4940ba27a6a9ee9e7b64.pdf")}>2013</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_e405960be50349ef8f9dfb8f820fb0d5.pdf")}>2014</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_d79ef918fc994bb8b6c6e52086c1d5a3.pdf")}>2015</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_811deb7dc40e40a6879fb3b77a222b40.pdf")}>2016</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_0fa552f4a9f14cad83f805e8758df1a5.pdf")}>2017</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_5bdba55cbd0a4d7dbf19de6780755987.pdf")}>2018</button>            </div>
        </div>
    </div>

    <div className={`Content ${isVisible>= 5 ? "show" :""}`}>
        <div className='forum_archive'>
            <div className='forum_caption'>
                <button onClick={() =>window.open("*")}>クリスマス<br/>コンサート</button>
            </div>
            <div className='forum_buttons'>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_2333eeef1a2e425d8393e7ff072851f0.pdf")}>2013</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_3b4f7f9cbe2d472b8b723100c9480877.pdf")}>2017</button>
                <button onClick={() =>window.open("https://1fee6d82-f337-4a52-8d73-8b297d18a58b.filesusr.com/ugd/69d501_ade8ce8cc1504b5780c09a01796fb134.pdf")}>2018</button>
            </div>
        </div>
    </div>

    </div>
    );
}

export default About_Us;