
import icon from "./menu_icon.svg";


const Menu = () => {
    return (
      <div>
        

    <div className="menu">
        <img src={icon} className='menu-title'/>
        <div className="sub-menu">
            <ul className="submenu-ul">
                <li><a href="#">Sub Menu1</a></li>
                <li><a href="#">Sub Menu2</a></li>
                <li><a href="#">Sub Menu3</a></li>
            </ul>
        </div>
    </div>        
      </div>
    )
  }
  
  export default Menu