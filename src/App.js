import React from 'react';
import { Waypoint } from 'react-waypoint';
import FirstLayer from './layers/firstLayer/firstLayer';
import SecondLayer from './layers/secondLayer/secondLayer';
import ThirdLayer from './layers/thirdLayer/thirdLayer';
import FourthLayer from "./layers/fourthLayer/fourthLayer";
import Footer from "./layers/footer/footer";


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
        console.log("fdfsd")
        if (!this.state.isOnSecondLayer) {
            console.log("eee")
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

    navigateToFirstLayer = () => {
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = document.getElementsByClassName("first-layer")[0].getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;

        scrollTo(offset);
    };

    componentDidMount() {
        // scrollTo(0);
        // document.documentElement.scrollTop = document.body.scrollTop = 0;

        window.addEventListener("scroll", function(){
            let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

            let bodyRect = document.body.getBoundingClientRect();
            let secondLayerRect = document.getElementsByClassName("second-layer")[0].getBoundingClientRect();
            let secondLayerPosition = secondLayerRect.top - bodyRect.top;

            let firstLayerParallaxStep = currentPosition > (secondLayerPosition/2);

            if (firstLayerParallaxStep && currentPosition < secondLayerPosition) {

                let offset = currentPosition - (secondLayerPosition/2);
                document.getElementsByClassName("first-layer-photo")[0].style.transition = "transform ease";
                document.getElementsByClassName("first-layer-photo")[0].style.transform = "translateY(" + offset/4 + "px)";
                return;
            }
            else {
                document.getElementsByClassName("first-layer-photo")[0].style.transform = "";
            }

            let thirdLayerRect = document.getElementsByClassName("third-layer")[0].getBoundingClientRect();
            let thirdLayerPosition = thirdLayerRect.top - bodyRect.top;

            let fourthLayerRect = document.getElementsByClassName("fourth-layer")[0].getBoundingClientRect();
            let fourthLayerPosition = fourthLayerRect.top - bodyRect.top;

            let thirdLayerParallaxStep = thirdLayerPosition + (fourthLayerPosition - thirdLayerPosition)/2;

            if (currentPosition > thirdLayerParallaxStep && currentPosition < fourthLayerPosition) {

                let offset = currentPosition - thirdLayerParallaxStep;
                document.getElementsByClassName("third-layer-photo")[0].style.transition = "transform ease";
                document.getElementsByClassName("third-layer-photo")[0].style.transform = "translateY(" + offset/4 + "px)";
            }
            else {
                document.getElementsByClassName("third-layer-photo")[0].style.transform = "";
            }

        });
    }

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
                <FourthLayer />
                <Footer onNavigateClick={this.navigateToFirstLayer} />
            </div>
        );
    }
}

export default App;
