import React from 'react'
import {FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinFilled,ArrowUpOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import './footer.css'
export const Footer=() =>{
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    return (
        <div className="fo-container">
            
                <Button onClick={scrollToTop}><ArrowUpOutlined />To The Top</Button>
                <div className="f-flex">
                    <a><FacebookFilled /></a>
                    <a><InstagramFilled /></a>
                    <a><TwitterOutlined /></a>
                    <a><LinkedinFilled /></a>
                </div>
                <span>Powered by w3.css</span>
           
        </div>
    )
}

