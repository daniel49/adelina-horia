import React from 'react';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';


export const scrollTo = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
};



function App() {
    const secondLayerRef = React.createRef();

    return (
        <div>
            <FirstLayer secondLayerRef={secondLayerRef} />
            <SecondLayer secondLayerRef={secondLayerRef} />
        </div>
    );
}

export default App;
