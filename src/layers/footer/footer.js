import React from 'react';
import './footer.css';
import BorderTopButton from "../../Buttons/BorderTopButton/borderTopButton";
import GoUpIcon from "@material-ui/icons/Publish";
import EndingPhoto from "../footer/ending.jpg";


class Footer extends React.Component {

    render() {
        return (
            <div className={"footer-layer"}>
                <div className={'footer-layer-text-container'}>
                    <p className={'footer-layer-text'}>
                        Vă așteptăm cu drag
                    </p>
                </div>
                <div className={'footer-layer-image-container'}>
                    <img className={'footer-layer-image'} src={EndingPhoto} alt={"Not found"} />
                </div>
                <div className={"goto-beginning-container"}>
                    <BorderTopButton className={"goto-beginning-button"} onClick={this.props.onNavigateClick} content={<GoUpIcon/>} animate={true}/>
                </div>
                <div className={'footer-bottom-left-text'}>
                    Realizat cu <b>dragoste</b> pentru<br/><b>Adelina</b> & <b>Horia</b>
                </div>
                <div className={'footer-bottom-right-text'}>
                    Vă urăm <b>casă de piatră</b> și <br/> multe clipe fericite <b>împreună</b><br/>
                </div>
            </div>
        );
    }
}

export default Footer;