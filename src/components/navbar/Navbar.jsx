import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationNoneOutlinedIcon from '@mui/icons-material/NotificationAddOutlined' 
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutline'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
            
          </div>
          <div className="item">
            <NotificationNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
            
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar