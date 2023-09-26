import React, {FC, Dispatch,SetStateAction} from "react";
import icon from "./sozai/menu_icon.svg";

import About_Us from "./article/About_us";
import Contact from "./article/Contact";
import Toppage from "./article/Toppage";
import For_Freshmen from "./article/For_Freshmen";

const Menu: FC<{ setStateProp: Dispatch<SetStateAction<JSX.Element>> }> = ({setStateProp}) => {
    return (
      
    <div>
      <div className="menu">
          <img src={icon} className='menu-title' alt="menu"/>
          <div className="sub-menu">
            <button className="menu_buttons" onClick={() => setStateProp(<Toppage/>)}> Toppage </button>
            <button className="menu_buttons" onClick={() => setStateProp(<About_Us/>)}> About Us </button>
            <button className="menu_buttons" onClick={() => setStateProp(<For_Freshmen/>)}> For Freshmen </button>
            <button className="menu_buttons" onClick={() => setStateProp(<Contact/>)}> Contact </button>
          </div>
      </div>        
    </div>
    )
  };
  
  export default Menu;