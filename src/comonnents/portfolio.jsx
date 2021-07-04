import React from 'react'
import './portfolio.css'
import {Button} from 'antd'
const data=[
    {
        key:1,
        data:"https://www.w3schools.com/w3images/p1.jpg"
    },
    {
        key:2,
        data:"https://www.w3schools.com/w3images/p2.jpg"
    },
    {
        key:3,
        data:"https://www.w3schools.com/w3images/p3.jpg"
    },
    {
        key:4,
        data:"https://www.w3schools.com/w3images/p4.jpg"
    },
    {
        key:5,
        data:"https://www.w3schools.com/w3images/p5.jpg"
    },
    {
        key:6,
        data:"https://www.w3schools.com/w3images/p6.jpg"
    },
    {
        key:7,
        data:"https://www.w3schools.com/w3images/p7.jpg"
    },
    {
        key:8,
        data:"https://www.w3schools.com/w3images/p8.jpg"
    }
    
]
export const Port=() =>{
    const pictures=(src)=>{
        return(
            <img src={src.data}/>
        )
    }
    return (
        <div className="pr-container" id="portfolio">
            <div className="pr-t-wrap">
                <div className="pr-data">
                    <h3>14+</h3>
                    <span>Partners</span>
                </div>
                <div className="pr-data">
                    <h3>55+</h3>
                    <span>Projects Done</span>
                </div>
                <div className="pr-data">
                    <h3>89+</h3>
                    <span>Happy Clients</span>
                </div>
                <div className="pr-data">
                    <h3>150+</h3>
                    <span>Meetings</span>
                </div>
            </div>
            <div className="pr-show">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="pr-work">
                <div className="pr-w-title">
                    <h2>MY WORK</h2>
                    <span>Here are some of my latest lorem work ipsum tipsum.
                            Click on the images to make them bigger</span>
                </div>
                <div className="pr-collection">
                    {
                        data.map(item=>(
                            pictures(item)
                        ))
                    }
                </div>
                <div className="load">
                    <Button>LOAD MORE</Button>
                </div>
            </div>
            
        </div>
    )
}


