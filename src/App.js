import React from 'react';
import { Waypoint } from 'react-waypoint';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';
import ThirdLayer from './layers/thirdLayer/thirdLayer';
import FourthLayer from "./layers/fourthLayer/fourthLayer";
import FifthLayer from './layers/fifthLayer/fifthLayer';
import Footer from "./layers/footer/footer";
import SixthLayer from "./layers/sixthLayer/sixthLayer";


export const scrollTo = (position) => {
    window.scrollTo(0, position)
};

// function gcd (a, b) {
//     return (b == 0) ? a : gcd (b, a%b);
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnSecondLayer: false
        };

        // var w = window.screen.width;
        // var h = window.screen.height;
        // var r = gcd (w, h);
        // console.log ("Dimensions = ", w, " x ", h, "<br>");
        // console.log ("Gcd        = ", r, "<br>");
        // console.log ("Aspect     = ", w/r, ":", h/r);
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

    navigateToFourthLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("fourth-layer")[0].getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;

        scrollTo(offset);
    };

    navigateToFifthLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("fifth-layer")[0].getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;

        scrollTo(offset);
    };

    navigateToFirstLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("first-layer")[0].getBoundingClientRect();
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
                <ThirdLayer onNavigateClick={this.navigateToFourthLayer} />
                <FourthLayer onNavigateClick={this.navigateToFifthLayer} />
                <FifthLayer />
                <SixthLayer />
                <Footer onNavigateClick={this.navigateToFirstLayer} />
            </div>
        );
    }
}

export default App;
