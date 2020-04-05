import React from 'react';
import './secondLayer.css';



class SecondLayer extends React.Component {

    render() {
        const {secondLayerRef} = this.props;

        return (
            <div className={"second-layer"}>
                <div className={"second-layer-bottom"} ref={secondLayerRef}/>
            </div>
        );
    }
}

export default SecondLayer;