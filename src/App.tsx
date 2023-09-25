
import { useState } from 'react';
import Toppage from './article/Toppage';
import About_Us from './article/About_us';
import Menu from './Nav_menu';
import './App.css';
import Contact from './article/Contact';


  const App =() => {

  const [stateProp, setStateProp] = useState(<Toppage/>);

  

  const Transit_Toppage = () => {
    setStateProp(<Toppage/>);
    window.scrollTo(0, 0);
  }
  
  const Transit_AboutUs = () => {
    setStateProp(<About_Us/>);  	
    window.scrollTo(0, 0);
  }

  const Transit_ForFreshmen =() =>{
    setStateProp(<p>鋭意製作中であります！！</p>);  	
    window.scrollTo(0, 0);    
  }
  const Transit_Contact = () => {
    setStateProp(<Contact/>);
    window.scrollTo(0, 0);
  }

  
  return (
  <div className="App">
    <header>
      <title>東京医科歯科大学ピアノの会</title>
      <Menu/>
      <div className='Title_container'>
      <h2 className='Title'>東京医科歯科大学ピアノの会</h2>
      </div>
      <div className='header_flexbox'>
        <button onClick={Transit_Toppage} className='transits'>Top page</button>
        <button onClick={Transit_AboutUs}>About us</button>
        <button onClick={Transit_ForFreshmen}>For freshmen</button>
        <button onClick={Transit_Contact}>Contact</button>
      </div>
    </header>

    <div className='background'>
      <div className='pagecontainer'>
        <div className='article'>
            {stateProp}
        </div>

      </div>
    </div>
  </div>
  );
}

export default App;
