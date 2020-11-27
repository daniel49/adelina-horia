import React from 'react';
import './fourthLayer.css';
import ScrollAnimation from 'react-animate-on-scroll';
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ChurchImage from "./church.jpeg";
import BallroomImage from "./ballroom.jpeg";
import Grid from "@material-ui/core/Grid";


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
                    <p>Care e planul?</p>
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
                                            <p className={"fourth-layer-first-part-text"}><b>Instructiuni</b><br/>Asteptam cu nerabdare ziua de <br/>
                                            <b>19 IULIE 2021</b><br/> sa ne vedem cu bine si plini de energie<br/>caci dansul este obligatoriu</p>
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
                                            <b>Cununia religioasa</b><br/>Mergem si ne atestam dragostea<br/>in fata lui Dumnezeu la<br/>
                                            <b>Catedrala "Nasterea Maicii Domnului"</b><br/>din Gura Humorului
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
                                            <b>Receptia & Petrecerea</b><br/>Mergem si petrecem impreuna la<br/>Club Bucovina Ballroom din Gura Humorului<br/>ora <b>XX:YY</b>
                                        </p>
                                    </ScrollAnimation>
                                )
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default FourthLayer;