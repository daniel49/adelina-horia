import React from 'react';
import {fadeInLeft, fadeInRight, flash} from 'react-animations';
import Typewriter from "typewriter-effect";
import styled, {keyframes} from "styled-components";
import Grid from '@material-ui/core/Grid'
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import Paper from '@material-ui/core/Paper';

import './secondLayer.css';

import I2_top_md from './2_top_lg.png';
import I2_top_sm from './2_top.png';
import I2_btm_md from './2_btm_lg.png';
import I2_btm_sm from './2_btm.png';

import I2_left from "../secondLayer/22_left.jpeg";
import I2_right from "../secondLayer/22_right.jpeg";
import GoDownIcon from "@material-ui/icons/PlayForWork";
import BorderButton from "../../Buttons/BorderButton/borderButton";



class SecondLayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showLeftImage: false,
            showRightImage: false,
            middleCharacter: '&'
        }
    }


    render() {
        const LeftImageAnimation = styled.div`text-align: center; animation: 2s ${keyframes`${fadeInLeft}`}`;
        const RightImageAnimation = styled.div`text-align: center; animation: 2s ${keyframes`${fadeInRight}`}`;
        const HeartAnimation = styled.div`text-align: center; animation: 4s ${keyframes`${flash}`}`;

        return (
            <div className={"second-layer"} ref={this.props.innerRef}>
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
                            {
                                this.props.isScrolledHere &&
                                    <div className={"second-layer-content"}>
                                        <div className={"second-layer-text-intro"}>
                                            <Typewriter
                                                options={{
                                                    delay: 75,
                                                }}
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .pauseFor(500)
                                                        .typeString("Ai ghicit")
                                                        .pauseFor(500)
                                                        .callFunction((a,b) => {
                                                            document.querySelector(".second-layer-text-intro .Typewriter__cursor").innerHTML = "";
                                                        })
                                                        .start();
                                                }}
                                            />
                                        </div>
                                        <Grid container  className={"second-layer-content-photos"}>
                                            <Grid item lg={5} xs={12} className={"second-layer-left"}>
                                                <div className={"second-layer-left-intro"}>
                                                    <Typewriter
                                                        options={{
                                                            delay: 75,
                                                        }}
                                                        onInit={(typewriter) => {
                                                            typewriter
                                                                .pauseFor(2000)
                                                                .typeString(' <strong><span style="color: #396d63;">Dra.</span></strong>')
                                                                .typeString(' <strong><span style="color: #902c68;"> Adelina</span></strong>')
                                                                .pauseFor(500)
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
                                                        <Paper elevation={4} style={{height: 'fit-content', width: 'fit-content', margin: 'auto', padding:'10px 10px 6px 10px'}}>
                                                            <img className={"second-layer-left-photo"} src={I2_left} alt={"Not found"} />
                                                        </Paper>
                                                    </LeftImageAnimation>
                                                }
                                            </Grid>
                                            <Grid item lg={2} xs={12} className={"second-layer-center"}>
                                                {this.state.middleCharacter}
                                            </Grid>
                                            <Grid item lg={5} xs={12} className={"second-layer-right"}>
                                                <div className={"second-layer-right-intro"}>
                                                    <Typewriter
                                                        options={{
                                                            delay: 75,
                                                        }}
                                                        onInit={(typewriter) => {
                                                            typewriter
                                                                .pauseFor(2000)
                                                                .typeString(' <strong><span style="color: #396d63;">Dl.</span></strong>')
                                                                .typeString(' <strong><span style="color: #902c68;"> Horia</span></strong>')
                                                                .pauseFor(500)
                                                                .callFunction((a,b) => {
                                                                    document.querySelector(".second-layer-right-intro .Typewriter__cursor").innerHTML = "";
                                                                    this.setState({showRightImage: true, middleCharacter: <HeartAnimation><FavoriteIcon style={{fontSize: "4rem"}} htmlColor={'#902c68'} /></HeartAnimation>});
                                                                })
                                                                .start();
                                                        }}
                                                    />
                                                </div>
                                                {
                                                    (this.state.showLeftImage && this.state.showRightImage) &&
                                                    <RightImageAnimation>
                                                        <Paper elevation={4} style={{height: 'fit-content', width: 'fit-content', margin: 'auto', padding:'10px 10px 6px 10px'}}>
                                                            <img className={"second-layer-right-photo"} src={I2_right} alt={"Not found"} />
                                                        </Paper>
                                                    </RightImageAnimation>
                                                }
                                            </Grid>
                                        </Grid>

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
                                                                .typeString("Se casatoresc")
                                                                .pauseFor(500)
                                                                .callFunction((a,b) => {
                                                                    document.querySelector(".second-layer-text-extra1 .Typewriter__cursor").innerHTML = "";
                                                                    document.querySelector(".second-layer-text-extra1 span").style.borderBottom="6px solid #902c68";
                                                                })
                                                                .start();
                                                        }}
                                                    />
                                                </div>
                                        }
                                        {
                                            (this.state.showLeftImage && this.state.showRightImage) &&
                                            <div style={{textAlign: "center", marginTop: "4px"}}>
                                                <BorderButton className={"second-layer-button-navigation"} onClick={this.props.onNavigateClick} content={<GoDownIcon/>} animate={true}/>
                                            </div>
                                        }
                                    </div>
                            }
                        </div>
            </div>
        );
    }
}

export default SecondLayer;