import React from 'react';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';
import ThirdLayer from './layers/thirdLayer/thirdLayer';


export const scrollTo = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
};



function App() {
    const secondLayerRef = React.createRef();

    return (
        <div>
            <FirstLayer secondLayerRef={secondLayerRef} />
            <SecondLayer secondLayerRef={secondLayerRef} />
            <ThirdLayer />
        </div>
    );
}

export default App;
