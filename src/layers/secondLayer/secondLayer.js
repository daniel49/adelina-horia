import React from 'react';
import './secondLayer.css';

import I2_top_md from './2_top_lg.png';
import I2_top_sm from './2_top.png';


import I2_btm_md from './2_btm_lg.png';
import I2_btm_sm from './2_btm.png';


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
                <div className={"second-layer-bottom"} ref={secondLayerRef}/>
            </div>
        );
    }
}

export default SecondLayer;