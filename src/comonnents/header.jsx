import React,{useState} from 'react'
import { SearchOutlined,MenuOutlined,UserOutlined,AppstoreOutlined,MailOutlined } from '@ant-design/icons';
import {Link} from 'react-scroll'
import './header.css'
export const Header=()=> {
    const [visible,setvisible]=useState(false)
    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  }; 
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className="h-main">
        <div className={colorChange?"h-con":"h-container"}>
            <div className="h-wrap">
                <div className="left">
                    <ul>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} activeClass="active" to="home" spy={true} smooth={true} onClick={()=>setvisible(false)}>Home</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="about" spy={true} smooth={true}><UserOutlined />ABOUT</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="portfolio" spy={true} smooth={true}><AppstoreOutlined />PORTFOLIO</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="contact" spy={true} smooth={true}><MailOutlined />CONTACT</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="h-serch" style={{fontSize:"1.2rem"}}>
                    <SearchOutlined/>
                    </div>
                    <div className="h-menu" style={{fontSize:"1.2rem"}} onClick={()=>setvisible(!visible)}><MenuOutlined/></div>
                </div>
            </div>
        </div>
        {visible&&(
        <div className="m-nav">
                    <ul>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="about" spy={true} smooth={true} onClick={()=>setvisible(false)}>ABOUT</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="portfolio" spy={true} smooth={true} onClick={()=>setvisible(false)}>PORTFOLIO</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="contact" spy={true} smooth={true} onClick={()=>setvisible(false)}>CONTACT</Link></li>
                        <li><Link style={{color:"rgb(128, 126, 126)"}} to="contact" spy={true} smooth={true} onClick={()=>setvisible(false)}>SEARCH</Link></li>
                    </ul>
        </div>
        )}
        </div>
    )
}
