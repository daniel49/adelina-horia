import React from 'react';
import { Waypoint } from 'react-waypoint';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';
import ThirdLayer from './layers/thirdLayer/thirdLayer';


export const scrollTo = (position) => {
    window.scrollTo(0, position)
};



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnSecondLayer: false
        };
    }

    navigateToSecondLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("second-layer")[0].getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;

        this.setState({isOnSecondLayer: true});
        scrollTo(offset);
    };

    navigatedToSecondLayer = () => {
        if (!this.state.isOnSecondLayer) {
            this.setState({isOnSecondLayer: true})
        }
    };

    navigateToThirdLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("third-layer")[0].getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;

        scrollTo(offset);
    };

    render() {

        const SecondLayerWithRef = React.forwardRef((props, ref) => {
            return <SecondLayer {...props} innerRef={ref}
                                isScrolledHere={this.state.isOnSecondLayer}
                                onNavigateClick={this.navigateToThirdLayer}

            />
        });


        return (
            <div>
                <FirstLayer onNavigateClick={this.navigateToSecondLayer} />
                <Waypoint onEnter={this.navigatedToSecondLayer}>
                    <SecondLayerWithRef />
                </Waypoint>
                <ThirdLayer />
            </div>
        );
    }
}

export default App;
