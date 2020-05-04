import React from 'react';
import './thirdLayer.css';
import BorderButton from "../../Buttons/BorderButton/borderButton";
import GoDownIcon from "@material-ui/icons/PlayForWork";

import I_ls from "./Untitled.jpg";
import I_pt from "./Untitled_pt.jpg";
import I_pt_5pe9 from "./Untitled_pt_5pe9.jpg";


class ThirdLayer extends React.Component {

    render() {
        return (
            <div className={"third-layer"}>

                <picture>
                    <source media="(orientation: portrait) and (min-aspect-ratio: 5/9)" srcSet={I_pt_5pe9} />
                    <source media="(orientation: portrait)" srcSet={I_pt} />
                    <source media="(orientation: landscape)" srcSet={I_ls} />
                    <img className={"third-layer-photo"} src={I_ls} alt={"Not found"} />
                </picture>

                <div className={"third-layer-content"}>
                    <BorderButton className={"third-layer-button"} onClick={this.props.onNavigateClick} content={<GoDownIcon/>} animate={true}/>
                </div>

            </div>
        );
    }
}

export default ThirdLayer;