import React from "react";
import Grid from "@material-ui/core/Grid";

import {differenceInSeconds} from 'date-fns';

import './sixthLayer.css';

class SixthLayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            weddingDate: new Date(2021, 6, 4, 18)
        }
    }

    componentDidMount() {
        const {weddingDate} = this.state;

        let handler = () => {
            const ONE_DAY = 60 * 60 * 24;
            const ONE_HOUR = 60 * 60;
            const ONE_MINUTE = 60;

            const now = new Date();
            const diffInSeconds = differenceInSeconds(weddingDate, now);

            const days = Math.floor(diffInSeconds / ONE_DAY);
            const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
            const minutes = Math.floor(
                (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
            );
            const seconds =
                diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;

            this.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        };
        setInterval(handler, 1000)
    }

    render() {
        const {days, hours, minutes, seconds} = this.state;

        return (
            <div className={'sixth-layer'}>
                <div className={"sixth-layer-text-intro"}>
                    <p style={{fontSize: "3.5rem"}}>Se apropie!</p>
                    <p>Au mai rămas:</p>
                </div>
                <Grid container direction="row" justify="center" alignItems="center" style={{paddingBottom: '5vh'}}>
                    <Grid item className={"sixth-layer-text-amr"} xs={2} md={2} lg={2}>
                        <div style={{textAlign: "center"}}>
                            <p>{days}</p>
                            <p style={{fontSize: "1.2rem"}}>ZILE</p>
                        </div>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1} className={"sixth-layer-text-amr"}>
                        <div style={{textAlign: "center", color: "#396d63"}}>
                            <p>:</p>
                        </div>
                    </Grid>
                    <Grid item className={"sixth-layer-text-amr"} xs={2} md={2} lg={2}>
                        <div style={{textAlign: "center"}}>
                            <p>{hours}</p>
                            <p style={{fontSize: "1.2rem"}}>ORE</p>
                        </div>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1} className={"sixth-layer-text-amr"}>
                        <div style={{textAlign: "center", color: "#396d63"}}>
                            <p>:</p>
                        </div>
                    </Grid>
                    <Grid item className={"sixth-layer-text-amr"} xs={2} md={2} lg={2}>
                        <div style={{textAlign: "center"}}>
                            <p>{minutes}</p>
                            <p style={{fontSize: "1.2rem"}}>MINUTE</p>
                        </div>
                    </Grid>
                    <Grid item xs={1} md={1} lg={1} className={"sixth-layer-text-amr"}>
                        <div style={{textAlign: "center", color: "#396d63"}}>
                            <p>:</p>
                        </div>
                    </Grid>
                    <Grid item className={"sixth-layer-text-amr"} xs={2} md={2} lg={2}>
                        <div style={{textAlign: "center"}}>
                            <p>{seconds}</p>
                            <p style={{fontSize: "1.2rem"}}>SECUNDE</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SixthLayer;