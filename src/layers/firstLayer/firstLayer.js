import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import GoDownIcon from '@material-ui/icons/PlayForWork';
import {scrollTo} from "../../App";
import BorderButton from "../../Buttons/BorderButton/borderButton";

import './firstLayer.css';

import I_o from './1_o.JPG';
import I1_ls_4pe3 from './1_ls_4pe3.jpg';
import I1_ls_16pe9 from './1_ls_16pe9.jpg';

import I1_pt_5pe9 from './1_pt_5pe9.jpg';
import I1_pt_4pe3 from './1_pt_4pe3.jpg';
import I1_pt_3pe2 from './1_pt_3pe2.jpg';




function FirstLayer(props) {
    const [showNext, setShowNext] = useState(false);
    const {secondLayerRef} = props;

    return (
        <div className={"first-layer"}>
            <div className={"first-layer-intro"}>
                <div className={"first-layer-text-intro"}>
                    <Typewriter
                        options={{
                            delay: 75,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1000).typeString('Hey').pauseFor(600).typeString('<br>Bine ai venit').pauseFor(1000).deleteChars(21)
                                .pauseFor(500).typeString('Cu siguranta stii de ce te afli aici').pauseFor(600).typeString('<br>Soseste,').pauseFor(300)
                                .typeString(' <strong><span style="color: #27ae60;">in curand</span></strong>,').pauseFor(300).typeString(' momentul cel mare')
                                .pauseFor(600).deleteChars(4).pauseFor(600).typeString('<strong><span style="color: #d24c8d;">magic</span></strong>').pauseFor(600)
                                .typeString("<br>Urmeaza-ma")
                                .pauseFor(500)
                                .callFunction((a,b) => {
                                    setShowNext(true);
                                    document.querySelector(".first-layer-text-intro .Typewriter__cursor").innerHTML = "";
                                })
                                .start();
                        }}
                    />
                </div>
                {
                    showNext &&
                        <BorderButton className={"first-layer-button-intro"} onClick={() => scrollTo(secondLayerRef)} content={<GoDownIcon/>} animate={true}/>
                }
            </div>

            <picture>
                <source media="(orientation: portrait) and (min-aspect-ratio: 5/9)" srcSet={I1_pt_5pe9} />
                <source media="(orientation: portrait) and (min-aspect-ratio: 2/3)" srcSet={I1_pt_3pe2} />
                <source media="(orientation: portrait) and (min-aspect-ratio: 3/4)" srcSet={I1_pt_4pe3} />
                <source media="(orientation: landscape) and (min-aspect-ratio: 16/9)" srcSet={I1_ls_16pe9} />
                <source media="(orientation: landscape) and (min-aspect-ratio: 4/3)" srcSet={I1_ls_4pe3} />
                <source media="(orientation: landscape)" srcSet={I_o} />
                <source media="(orientation: portrait)" srcSet={I_o} />
                <img className={"first-layer-photo"} src={I_o} alt={"Not found"} />
            </picture>
        </div>
    );
}

export default FirstLayer;
