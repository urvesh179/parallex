import React from 'react'
import { UserOutlined,CameraOutlined,LaptopOutlined,FileImageOutlined,CameraFilled } from '@ant-design/icons';
import { Progress } from 'antd';
import './about.css'
import style from './about.less'
export const About=()=> {
    return (
        <div className="ab-container" id="about">
            <div className="ab-wrap">
                <div className="ab-title">
                    <h2>ABOUT ME</h2>
                    <span>I love photography</span>
                    <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="ab-info">
                    <div className="ab-info-pic">
                        <h3><UserOutlined/><span>My Name</span></h3>
                        <img src="https://www.w3schools.com/w3images/avatar_hat.jpg"/>
                    </div>
                    <div className="ab-info-data">Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
                <div className="ab-skills">
                    <h4 className={style.h}>Im really good at:</h4>
                    <div className="ab-s-detail">
                        <div className="ab-inner-datail">
                            <div className="ab-inn">
                            <CameraFilled />&ensp;<span>Photography</span>
                                <Progress   percent={90}  status="active" strokeColor="black" trailColor="lightgray" showInfo={false} />
                            </div>
                        </div>
                        <div className="ab-inner-datail">
                            <div className="ab-inn">
                                <LaptopOutlined />&ensp;<span>Web Design</span>
                                <Progress percent={75} strokeColor="black" trailColor="lightgray" showInfo={false} />
                            </div>
                        </div>
                        <div className="ab-inner-datail">
                            <div className="ab-inn">
                                <FileImageOutlined />&ensp;<span>Photoshop</span>
                                <Progress percent={50} strokeColor="black" trailColor="lightgray" showInfo={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


