import React from 'react';
import './thirdLayer.css';


class ThirdLayer extends React.Component {

    render() {
        const {thirdLayerBottomRef} = this.props;


        return (
            <div className={"third-layer"}>
                <div className={"third-layer-bottom"} ref={thirdLayerBottomRef}/>
            </div>
        );
    }
}

export default ThirdLayer;