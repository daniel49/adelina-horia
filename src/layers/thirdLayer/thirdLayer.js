import React from 'react';
import './thirdLayer.css';
import BorderButton from "../../Buttons/BorderButton/borderButton";
import GoDownIcon from "@material-ui/icons/PlayForWork";

import I3_ls from "./3_ls.jpg";
import I3_ls_16pe9 from "./3_ls_16pe9.jpg";
import I3_ls_9pe5 from "./3_ls_9pe5.jpg";
import I3_ls_4pe3 from "./3_ls_4pe3.jpg";
import I3_ls_3pe2 from "./3_ls_3pe2.jpg";

import I3_pt from "./3_pt.jpg";
import I3_pt_5pe9 from "./3_pt_5pe9.jpg";
import I3_pt_2pe3 from "./3_pt_2pe3.jpg";
import I3_pt_3pe4 from "./3_pt_3pe4.jpg";
import I3_pt_9pe16 from "./3_pt_9pe16.jpg";
import I3_pt_9pe19punct5 from "./3_pt_9pe19.5.jpg";
import I3_pt_9pe18punct5 from "./3_pt_9pe18.5.jpg";

class ThirdLayer extends React.Component {

    render() {
        return (
            <div className={"third-layer"}>

                <picture className={"thrid-layer-picture"}>
                    <source media="(orientation: portrait) and (min-aspect-ratio: 3/4)" srcSet={I3_pt_3pe4} />
                    <source media="(orientation: portrait) and (min-aspect-ratio: 2/3)" srcSet={I3_pt_2pe3} />
                    <source media="(orientation: portrait) and (min-aspect-ratio: 9/16)" srcSet={I3_pt_9pe16} />
                    <source media="(orientation: portrait) and (min-aspect-ratio: 5/9)" srcSet={I3_pt_5pe9} />
                    <source media="(orientation: portrait) and (min-aspect-ratio: 9/18.5)" srcSet={I3_pt_9pe18punct5} />
                    <source media="(orientation: portrait) and (min-aspect-ratio: 9/19.5)" srcSet={I3_pt_9pe19punct5} />

                    <source media="(orientation: landscape) and (min-aspect-ratio: 9/5)" srcSet={I3_ls_9pe5} />
                    <source media="(orientation: landscape) and (min-aspect-ratio: 16/9)" srcSet={I3_ls_16pe9} />
                    <source media="(orientation: landscape) and (min-aspect-ratio: 3/2)" srcSet={I3_ls_3pe2} />
                    <source media="(orientation: landscape) and (min-aspect-ratio: 4/3)" srcSet={I3_ls_4pe3} />
                    <source media="(orientation: portrait)" srcSet={I3_pt} />
                    <source media="(orientation: landscape)" srcSet={I3_ls} />
                    <img className={"third-layer-photo"} src={I3_ls} alt={"Not found"} />
                </picture>

                <div className={"third-layer-content"}>
                    <BorderButton className={"third-layer-button"} onClick={this.props.onNavigateClick} content={<GoDownIcon/>} animate={true}/>
                </div>

            </div>
        );
    }
}

export default ThirdLayer;