import React, { useState } from 'react';
import "./TapButton.css";
import flash from "../../Images/flash.png";
import InputPlace from '../inputPlace/InputPlace';
import axios from 'axios';
import Slidable from '../Slidable/Slidable';


function TapButton({pincode}) {

    const [style, setstyle] = useState("tap-image");
    const [click, setclick] = useState(false);
    const [posts, setposts] = useState([]);
    const [Loaded, setLoaded] = useState(false);
    

    async function handleStyle() {
        
        setclick(!click)
        if (!click)
            setstyle("tap-image rotate");
        else
            setstyle("tap-image")

        try {
            const response = await axios.get(`http://localhost:3000/:${pincode}`);
            setposts(response.data);
            setLoaded(true);
            } catch (error) {
                console.error(error);
            }

    }
    return (
        <div className='image_tap_con'>
            <InputPlace placeHolder={Location} />
            <div className='center_element'>
                <img onClick={handleStyle} className={style} src={flash} />
                {
                    click ?
                    <h1>Contacting your nearby hospital</h1>
                    : null
                }
                {
                Loaded?
                posts.map((data, i) => 
                <Slidable hospitalname={data.hospitalname} 
                          contactno={data.contactno}
                          pincode={data.pincode} />)
                :
                null
            }
            </div>
           
            
        </div>
    )
}

export default TapButton