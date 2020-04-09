import React from 'react';
import {fadeInLeft, fadeInRight} from 'react-animations';
import Typewriter from "typewriter-effect";
import styled, {keyframes} from "styled-components";

import './secondLayer.css';

import I2_top_md from './2_top_lg.png';
import I2_top_sm from './2_top.png';
import I2_btm_md from './2_btm_lg.png';
import I2_btm_sm from './2_btm.png';

import I2_left from "../secondLayer/2_left.jpeg";
import I2_right from "../secondLayer/2_right.jpeg";



class SecondLayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLeftImage: false,
            showRightImage: false
        }
    }


    render() {
        const {secondLayerBottomRef} = this.props;

        const LeftImageAnimation = styled.div`text-align: center; animation: 2s ${keyframes`${fadeInLeft}`}`;
        const RightImageAnimation = styled.div`text-align: center; animation: 2s ${keyframes`${fadeInRight}`}`;

        return (
            <div className={"second-layer"} ref={this.props.innerRef}>
                {
                    this.props.isScrolledHere &&
                        <div>
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
                                                .pauseFor(500)
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
                                                    .pauseFor(2000)
                                                    .typeString(' <strong><span style="color: #396d63;">Dra.</span></strong>')                                                    .pauseFor(500)
                                                    .callFunction((a,b) => {
                                                        document.querySelector(".second-layer-left-intro .Typewriter__cursor").innerHTML = "";
                                                        this.setState({showLeftImage: true});
                                                    })
                                                    .start();
                                            }}
                                        />
                                    </div>
                                    {
                                        (this.state.showLeftImage && this.state.showRightImage) &&
                                            <LeftImageAnimation>
                                                <img className={"second-layer-left-photo"} src={I2_left} alt={"Not found"} />
                                            </LeftImageAnimation>
                                    }
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
                                                    .pauseFor(2000)
                                                    .typeString(' <strong><span style="color: #396d63;">Dl.</span></strong>')
                                                    .pauseFor(500)
                                                    .callFunction((a,b) => {
                                                        document.querySelector(".second-layer-right-intro .Typewriter__cursor").innerHTML = "";
                                                        this.setState({showRightImage: true});
                                                    })
                                                    .start();
                                            }}
                                        />
                                    </div>
                                    {
                                        (this.state.showLeftImage && this.state.showRightImage) &&
                                            <RightImageAnimation>
                                                <img className={"second-layer-right-photo"} src={I2_right} alt={"Not found"} />
                                            </RightImageAnimation>
                                    }
                                </div>
                                {
                                    (this.state.showLeftImage && this.state.showRightImage) &&
                                        <div className={"second-layer-text-extra1"}>
                                            <Typewriter
                                                options={{
                                                    delay: 75,
                                                }}
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .pauseFor(1000)
                                                        .typeString("Se casatoresc!")
                                                        .pauseFor(500)
                                                        .callFunction((a,b) => {
                                                            document.querySelector(".second-layer-text-extra1 .Typewriter__cursor").innerHTML = "";
                                                        })
                                                        .start();
                                                }}
                                            />
                                        </div>
                                }

                            </div>
                        </div>
                }
                <div className={"second-layer-bottom"} ref={secondLayerBottomRef}/>
            </div>
        );
    }
}

export default SecondLayer;