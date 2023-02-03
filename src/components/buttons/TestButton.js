import React from "react";
import Button from "./button"
import './TestButtom.css'
import HomeButton from "../../Assets/16ec60fe-dacc-43a7-922b-12a081de68dc (1).jfif"
import PlayButton from '../../Assets/993aa89c-e199-4b6c-a32c-3535d58e0c75.jfif'

const TestButton = () =>{
    return (
    <div className="Body1">
        <div className="ButtonsLeft">
                   <Button variant='side' Text='Home' img={HomeButton} />
                   <Button variant='side' Text='Subscription' img={PlayButton}/>
            
        </div>
        <div className="ButtonTop">
                    <Button variant='White' Text='All' />
                    <Button variant='Genre' Text='Live' />  

        </div>
    </div>
    )
}
export default TestButton     