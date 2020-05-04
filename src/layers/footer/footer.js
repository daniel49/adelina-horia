import React from 'react';
import './footer.css';
import BorderTopButton from "../../Buttons/BorderTopButton/borderTopButton";
import GoUpIcon from "@material-ui/icons/Publish";


class Footer extends React.Component {

    render() {
        return (
            <div className={"footer-layer"}>
                <div className={"goto-beginning-container"}>
                    <BorderTopButton className={"goto-beginning-button"} onClick={this.props.onNavigateClick} content={<GoUpIcon/>} animate={true}/>
                </div>
            </div>
        );
    }
}

export default Footer;