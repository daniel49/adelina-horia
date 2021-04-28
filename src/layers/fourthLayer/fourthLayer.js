import React from 'react';
import './fourthLayer.css';
import ScrollAnimation from 'react-animate-on-scroll';
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AccountBalanceIcon from "@material-ui/icons/House";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ChurchImage from "./church.jpeg";
import BallroomImage from "./ballroom.jpeg";
import Grid from "@material-ui/core/Grid";
import BorderButton from "../../Buttons/BorderButton/borderButton";
import GoDownIcon from "@material-ui/icons/PlayForWork";


class FourthLayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFirstPart: false,
            showSecondPart: false,
            showThirdPart: false
        }
    }

    render() {

        return (
            <div className={"fourth-layer"}>
                <div className={"fourth-layer-text-intro"}>
                    <p>Care este planul?</p>
                </div>

                <div className={"fourth-layer-1"}>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={0} md={0} lg={4} alignItems={"center"} />
                        <Grid item xs={12} md={4} lg={4} alignItems={"center"}>
                            <ScrollAnimation
                                className={"fourth-layer-center-animation"}
                                animateIn='wobble'
                                initiallyVisible={true}
                                afterAnimatedIn={() => !this.state.showFirstPart ?
                                    this.setState({showFirstPart: true}) : null}
                            >
                                <EmojiPeopleIcon className={"fourth-layer-symbol"}/>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4} alignItems={"center"}>
                            {
                                this.state.showFirstPart && (
                                    <ScrollAnimation
                                        animateIn='fadeIn'
                                        animateOut='fadeOut'
                                        animateOnce={true}
                                    >
                                        <div className={"fourth-layer-first-part"}>
                                            <p className={"fourth-layer-first-part-text"}><b>Instrucțiuni</b><br/>Așteptăm cu nerăbdare ziua de <br/>
                                            <b>4 IULIE 2021</b><br/> să ne vedem cu bine și plini de energie<br/>căci dansul este obligatoriu</p>
                                        </div>
                                    </ScrollAnimation>
                                )
                            }
                        </Grid>
                    </Grid>
                </div>

                <div className={"fourth-layer-2"}>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={12} md={8} lg={4} alignItems={"center"}>
                            {
                                this.state.showSecondPart && (
                                    <ScrollAnimation
                                        animateIn='flipInY'
                                        animateOut='fadeOut'
                                        animateOnce={true}
                                    >
                                        <div className={"fourth-layer-second-part"}>
                                            <img className={"fourth-layer-church-image"} src={ChurchImage} alt={"church"} />
                                        </div>
                                        <p className={"fourth-layer-second-part-text"}>
                                            <b>Cununia religioasă</b><br/>Mergem și ne atestăm dragostea<br/>în fața lui Dumnezeu la<br/>
                                            <b>Catedrala "Nașterea Maicii Domnului"</b><br/>din Gura Humorului
                                        </p>
                                    </ScrollAnimation>

                                )
                            }
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} alignItems={"center"}>
                            <ScrollAnimation
                                className={"fourth-layer-center-animation"}
                                animateIn='bounce'
                                initiallyVisible={true}
                                afterAnimatedIn={() => !this.state.showSecondPart ?
                                    this.setState({showSecondPart: true}) : null}
                            >
                                <AccountBalanceIcon className={"fourth-layer-symbol"}/>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={0} md={0} lg={4} alignItems={"center"} />
                    </Grid>
                </div>

                <div className={"fourth-layer-3"}>
                    <Grid container alignItems={"center"}>
                        <Grid item xs={0} md={0} lg={4} alignItems={"center"} />
                        <Grid item xs={12} md={4} lg={4} alignItems={"center"}>
                            <ScrollAnimation
                                className={"fourth-layer-center-animation"}
                                animateIn='tada'
                                initiallyVisible={true}
                                afterAnimatedIn={() => !this.state.showThirdPart ?
                                    this.setState({showThirdPart: true}) : null}
                            >
                                <MusicNoteIcon className={"fourth-layer-symbol"}/>
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} md={8} lg={4} alignItems={"center"}>
                            {
                                this.state.showThirdPart && (
                                    <ScrollAnimation
                                        animateIn='flipInX'
                                        animateOut='fadeOut'
                                        animateOnce={true}
                                    >
                                        <div className={"fourth-layer-second-part"}>
                                            <img className={"fourth-layer-ballroom-image"} src={BallroomImage} alt={"ballroom"} />
                                        </div>
                                        <p className={"fourth-layer-third-part-text"}>
                                            <b>Recepția & Petrecerea</b><br/>Mergem și petrecem împreună la<br/><b>Club Bucovina Ballroom din Gura Humorului</b><br/>ora <b>18</b>
                                        </p>
                                    </ScrollAnimation>
                                )
                            }
                        </Grid>
                    </Grid>
                </div>
                <div className={"fourth-layer-content"}>
                    <BorderButton className={"third-layer-button"} onClick={this.props.onNavigateClick} content={<GoDownIcon/>} animate={true}/>
                </div>
            </div>
        );
    }
}

export default FourthLayer;