import React from 'react';
import { Waypoint } from 'react-waypoint';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';
import ThirdLayer from './layers/thirdLayer/thirdLayer';


export const scrollTo = (ref) => {
    window.scrollTo(0, ref.current.offsetTop + 16)
};



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnSecondLayer: false
        };

        this.secondLayerBottomRef = React.createRef();
    }

    navigateToSecondLayer = () => {
        console.log(this.secondLayerBottomRef.current.offsetTop);
        this.setState({isOnSecondLayer: true})
        scrollTo(this.secondLayerBottomRef);
    };

    navigatedToSecondLayer = () => {
        this.setState({isOnSecondLayer: true})
    };

    render() {

        const SecondLayerWithRef = React.forwardRef((props, ref) => {
            return <SecondLayer {...props} innerRef={ref}
                                secondLayerBottomRef={this.secondLayerBottomRef}
                                isScrolledHere={this.state.isOnSecondLayer}

            />
        });

        return (
            <div>
                <FirstLayer onNavigateClick={this.navigateToSecondLayer} />
                <Waypoint onEnter={this.navigatedToSecondLayer}>
                    <SecondLayerWithRef />
                </Waypoint>
                <Waypoint>
                    <ThirdLayer />
                </Waypoint>
            </div>
        );
    }
}

export default App;
