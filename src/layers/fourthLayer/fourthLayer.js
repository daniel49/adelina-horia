import React from 'react';
import './fourthLayer.css';
import ScrollAnimation from 'react-animate-on-scroll';
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ChurchImage from "./church.jpeg";


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
                    <ScrollAnimation
                        className={"fourth-layer-center-animation"}
                        animateIn='wobble'
                        initiallyVisible={true}
                        afterAnimatedIn={() => !this.state.showFirstPart ?
                            this.setState({showFirstPart: true}) : null}
                    >
                        <EmojiPeopleIcon className={"fourth-layer-symbol"}/>
                    </ScrollAnimation>

                    {
                        this.state.showFirstPart && (
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOut='fadeOut'
                                animateOnce={true}
                            >
                                <div className={"fourth-layer-first-part"}>
                                    <p className={"fourth-layer-first-part-text"}>Asteptam cu nerabdare ziua de <br/> <b>19 IULIE 2021</b><br/> sa ne vedem cu bine <br/> si plini de energie</p>
                                </div>
                            </ScrollAnimation>
                        )
                    }
                </div>

                <div className={"fourth-layer-2"}>
                    <ScrollAnimation
                        className={"fourth-layer-center-animation"}
                        animateIn='bounce'
                        initiallyVisible={true}
                        afterAnimatedIn={() => !this.state.showSecondPart ?
                            this.setState({showSecondPart: true}) : null}
                    >
                        <AccountBalanceIcon className={"fourth-layer-symbol"}/>
                    </ScrollAnimation>

                    {
                        this.state.showSecondPart && (
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOut='fadeOut'
                                animateOnce={true}
                            >
                                <div className={"fourth-layer-second-part"}>
                                    <img className={"fourth-layer-church"} src={ChurchImage} alt={"church"} />
                                </div>
                            </ScrollAnimation>
                        )
                    }
                </div>

                <div className={"fourth-layer-3"}>
                    <ScrollAnimation
                        className={"fourth-layer-center-animation"}
                        animateIn='tada'
                        initiallyVisible={true}
                        afterAnimatedIn={() => !this.state.showThirdPart ?
                            this.setState({showThirdPart: true}) : null}
                    >
                        <MusicNoteIcon className={"fourth-layer-symbol"}/>
                    </ScrollAnimation>

                    {
                        this.state.showThirdPart && (
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOut='fadeOut'
                                animateOnce={true}
                            >
                                <div className={"fourth-layer-third-part"}>
                                </div>
                            </ScrollAnimation>
                        )
                    }
                </div>

            </div>
        );
    }
}

export default FourthLayer;