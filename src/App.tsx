import { useState } from 'react';
import Toppage from './article/Toppage';
import About_Us from './article/About_us';
import Menu from './Nav_menu';
import './App.css';
import Contact from './article/Contact';
import For_Freshmen from './article/For_Freshmen';
import usePageTracking from './useTracking';

  const App =() => {

  const [stateProp, setStateProp] = useState(<Toppage/>);

  

  const Transit_Toppage = () => {
    setStateProp(<Toppage/>);
    usePageTracking();
    window.scrollTo(0, 0);
  }
  
  const Transit_AboutUs = () => {
    setStateProp(<About_Us/>);
    usePageTracking();  	
    window.scrollTo(0, 0);
  }

  const Transit_ForFreshmen =() =>{
    setStateProp(<For_Freshmen/>); 
    usePageTracking(); 	
    window.scrollTo(0, 0);    
  }
  const Transit_Contact = () => {
    setStateProp(<Contact/>);
    usePageTracking();
    window.scrollTo(0, 0);
  }


  
  return (
  <div className="App">
    <header>
      <Menu setStateProp = {setStateProp}/>
      <div className='Title_container'>
      <h1 className='Title'>東京医科歯科大学ピアノの会</h1>
      </div>
      <div className='header_flexbox'>
        <button onClick={Transit_Toppage}>Top page</button>
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
