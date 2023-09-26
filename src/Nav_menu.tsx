
import icon from "./sozai/menu_icon.svg";

import About_Us from "./article/About_us";
import Contact from "./article/Contact";
import Toppage from "./article/Toppage";

const Menu = () => {
    return (
      
    <div>
      <div className="menu">
          <img src={icon} className='menu-title' alt="menu"/>
          <div className="sub-menu">
            <button className="menu_buttons" >鋭意製作中であります!</button>
          </div>
      </div>        
    </div>
    )
  }
  
  export default Menu