import React from 'react';
import Typewriter from 'typewriter-effect';
import GoDownIcon from '@material-ui/icons/PlayForWork';
import BorderButton from "../../Buttons/BorderButton/borderButton";
import ProgressiveImage from "../../imageUtil/useProgressiveImage";
import './firstLayer.css';

import I_o from './1_o.jpeg';
// import I1_ls_4pe3 from './1_ls_4pe3.jpeg';
import I1_ls_16pe9 from './1_ls_16pe9.jpeg';
// import I1_ls_9pe5 from './1_ls_9pe5.jpg';
// import I1_ls_3pe2 from './1_ls_3pe2.jpg';
//
// import I1_pt_5pe9 from './1_pt_5pe9.jpeg';
// import I1_pt_4pe3 from './1_pt_4pe3.jpeg';
// import I1_pt_3pe2 from './1_pt_3pe2.jpeg';
import I1_pt_9pe16 from './1_pt_9pe16.jpg';
// import I1_pt_9pe18punct5 from './1_pt_9pe18.5.jpg';
// import I1_pt_9pe19punct5 from './1_pt_9pe19.5.jpg';

class FirstLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showNext: false};
    }

    render() {
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
                                    .pauseFor(1000).typeString('Hey').pauseFor(600).typeString('<br>Bine ați venit').pauseFor(1000).deleteChars(21)
                                    .pauseFor(500).typeString('Cu siguranță știți de ce vă aflați aici').pauseFor(600).typeString('<br>Sosește,').pauseFor(300)
                                    .typeString(' <strong><span style="color: #396d63;">în curând</span></strong>,').pauseFor(300).typeString(' momentul cel mare')
                                    .pauseFor(600).deleteChars(4).pauseFor(600).typeString('<strong><span style="color: #d24c8d;">magic</span></strong>').pauseFor(600)
                                    .typeString("<br>Urmați-mă, vă rog")
                                    .pauseFor(500)
                                    .callFunction((a,b) => {
                                        this.setState({showNext: true});
                                        document.querySelector(".first-layer-text-intro .Typewriter__cursor").innerHTML = "";
                                    })
                                    .start();
                            }}
                        />
                    </div>
                    {
                        this.state.showNext &&
                            <BorderButton className={"first-layer-button-intro"} onClick={this.props.onNavigateClick} content={<GoDownIcon/>} animate={true}/>
                    }
                </div>


                <picture className={"first-layer-picture"}>
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 3/4)" srcSet={I1_pt_4pe3} />*/}
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 2/3)" srcSet={I1_pt_3pe2} />*/}
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 9/16)" srcSet={I1_pt_9pe16} />*/}
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 5/9)" srcSet={I1_pt_5pe9} />*/}
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 9/18.5)" srcSet={I1_pt_9pe18punct5} />*/}
                    {/*<source media="(orientation: portrait) and (min-aspect-ratio: 9/19.5)" srcSet={I1_pt_9pe19punct5} />*/}

                    {/*<source media="(orientation: landscape) and (min-aspect-ratio: 9/5)" srcSet={I1_ls_9pe5} />*/}
                    {/*<source media="(orientation: landscape) and (min-aspect-ratio: 16/9)" srcSet={I1_ls_16pe9} />*/}
                    {/*<source media="(orientation: landscape) and (min-aspect-ratio: 3/2)" srcSet={I1_ls_3pe2} />*/}
                    {/*<source media="(orientation: landscape) and (min-aspect-ratio: 4/3)" srcSet={I1_ls_4pe3} />*/}

                    <source media="(orientation: landscape)" srcSet={I1_ls_16pe9} />
                    <source media="(orientation: portrait)" srcSet={I1_pt_9pe16} />

                    <ProgressiveImage
                        className={"first-layer-photo"}
                        preview="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAS......"
                        image={I_o}
                    />
                </picture>
            </div>
        );
    }

}

export default FirstLayer;
