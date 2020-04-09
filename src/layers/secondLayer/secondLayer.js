import React from 'react';
import './secondLayer.css';

import I2_top_md from './2_top_lg.png';
import I2_top_sm from './2_top.png';


import I2_btm_md from './2_btm_lg.png';
import I2_btm_sm from './2_btm.png';
import Typewriter from "typewriter-effect";


class SecondLayer extends React.Component {

    render() {
        const {secondLayerRef} = this.props;

        return (
            <div className={"second-layer"}>
                <div className={"second-layer-top-floral"}>
                    <picture>
                        <source media="(max-width: 1500px)" srcSet={I2_top_sm} />
                        <source media="(min-width: 1500px)" srcSet={I2_top_md} />
                        <img src={I2_top_sm} alt={"Not found"} />
                    </picture>
                </div>
                <div className={"second-layer-bottom-floral"}>
                    <picture>
                        <source media="(min-width: 1500px)" srcSet={I2_btm_md}/>
                        <source media="(max-width: 1500px)" srcSet={I2_btm_sm}/>
                        <img src={I2_btm_sm} alt={"Not found"}/>
                    </picture>
                </div>
                <div className={"second-layer-content"}>
                    <div className={"second-layer-text-intro"}>
                        <Typewriter
                            options={{
                                delay: 75,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Ati ghicit !")
                                    .pauseFor(500)
                                    .callFunction((a,b) => {
                                        document.querySelector(".second-layer-text-intro .Typewriter__cursor").innerHTML = "";
                                    })
                                    .start();
                            }}
                        />
                    </div>
                    <div className={"second-layer-left"}>
                        <div className={"second-layer-left-intro"}>
                            <Typewriter
                                options={{
                                    delay: 75,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Dl.")
                                        .pauseFor(500)
                                        .callFunction((a,b) => {
                                            document.querySelector(".second-layer-left-intro .Typewriter__cursor").innerHTML = "";
                                        })
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                    <div className={"second-layer-center"}>si</div>
                    <div className={"second-layer-right"}>
                        <div className={"second-layer-right-intro"}>
                            <Typewriter
                                options={{
                                    delay: 75,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Dra.")
                                        .pauseFor(500)
                                        .callFunction((a,b) => {
                                            document.querySelector(".second-layer-right-intro .Typewriter__cursor").innerHTML = "";
                                        })
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={"second-layer-bottom"} ref={secondLayerRef}/>
            </div>
        );
    }
}

export default SecondLayer;