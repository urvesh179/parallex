import React from 'react'
import {CoffeeOutlined,MonitorOutlined,PhoneOutlined,MailOutlined} from '@ant-design/icons'
import { Button } from 'antd'
import './contact.css'
export const Contact=() =>{
    return (
        <div className="cn-container" id="contact">
            <div className="cn-title">
                <h1>CONTACT</h1>
            </div>
            <div className="cn-data">
                <div className="cn-dt-tile">
                    <h1 style={{color:"color: rgb(82, 80, 80)"}}>WHERE I WORK</h1>
                    <span style={{color:"color: rgb(82, 80, 80)"}}>I'd love your feedback!</span>
                </div>
                <div className="cn-ct">
                    <div className="cn-left">
                        <img src="https://www.w3schools.com/w3images/map.jpg"/>
                    </div>
                    <div className="cn-right">
                        <div className="cn-r-wrap">
                            <div className="cn-r-upper">
                                <div className="cn-ct-detail">
                                    <MonitorOutlined/>&ensp;<span>Chicago, US</span>
                                </div>
                                <div className="cn-ct-detail">
                                    <PhoneOutlined/>&ensp;<span>Phone: +00 151515</span>
                                </div>
                                <div className="cn-ct-detail">
                                    <MailOutlined/>&ensp;<span>Email: mail@mail.com</span>
                                </div>
                            </div>
                            <h3>Swing by for a cup of <CoffeeOutlined/>, or leave me a note:</h3>
                            <div className="cn-r-lower">
                                <div className="cn-in-group">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="msg-inp">
                                <input type="text" placeholder="Message" />
                                </div>
                                <Button>SEND MESSAGE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

