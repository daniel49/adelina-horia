import React, {Fragment} from "react";
import './fifthLayer.css';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import ScrollAnimation from "react-animate-on-scroll";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import * as emailjs from 'emailjs-com';


const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};



class FifthLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupOpened: false,
            popupSeverity: '',
            popupMessage: '',
            nume: '',
            telefon: '',
            particip: '',
            insotit: '',
            numePartener: '',
            cuCopii: '',
            numarCopii: 1,
            tipMeniu: '',
            alergii: '',
            textInvitat: '',
            motivNeparticipare: '',
            isSubmitDisabled: false
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };

    handlePopupClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({isPopupOpened: false});
    };

    submit = () => {
        const {nume, telefon, particip, insotit, numePartener,
            cuCopii, numarCopii, tipMeniu, textInvitat, motivNeparticipare, alergii} = this.state;


        if (! nume || ! telefon || ! particip || (
                (! insotit || (! numePartener && insotit === 'Da')
                    || ! cuCopii || (! numarCopii && cuCopii === 'Da') || ! tipMeniu) && particip === 'Da')
        ) {
            this.setState({isPopupOpened: true, popupSeverity: 'error', popupMessage: "Nu a??i terminat de completat toate datele"});
            return;
        }
        let form = this.buildFormData(nume, telefon, particip, motivNeparticipare, insotit, numePartener, cuCopii, numarCopii, tipMeniu, alergii, textInvitat);
        let mesaj = Object.keys(form).reduce((p, k) => `${p}\n${k} : ${form[k] ? form[k] : '-'},`, "");


        emailjs.send("service_47xughn", "template_m2l454p", {
            nume: nume,
            mesaj: mesaj,
        }, "user_ASYf1h1u0VnZnQhwfaMhT")
            .then(success => {
                    this.setState({isPopupOpened: true, popupSeverity: 'success', popupMessage: 'Un e-mail cu decizia dumneavoastr?? a fost trimis c??tre Adelina ??i Horia', isSubmitDisabled: true});
                    setTimeout(() =>
                        this.setState({
                            nume: '',
                            telefon: '',
                            particip: '',
                            insotit: '',
                            numePartener: '',
                            cuCopii: '',
                            numarCopii: 1,
                            tipMeniu: '',
                            alergii: '',
                            textInvitat: '',
                            isSubmitDisabled: false,
                            motivNeparticipare: ''}), 8000);
                },
                error => {
                    this.setState({isPopupOpened: true, popupSeverity: 'error', popupMessage: "E-mailul nu s-a putut transmite. Lua??i leg??tura personal cu Adelina ??i Horia"});
                }
            );


    };

    buildFormData(nume, telefon, particip, motivNeparticipare, insotit, numePartener, cuCopii, numarCopii, tipMeniu, alergii, textInvitat) {
        let form = {nume, telefon, particip};
        if (particip === 'Nu') {
            form.motivNeparticipare = motivNeparticipare;
            return form;
        }
        form.insotit = insotit;
        if (insotit === 'Da') {
            form.numePartener = numePartener;
        }
        form.cuCopii = cuCopii;
        if (form.cuCopii === 'Da')
            form.numarCopii = numarCopii;
        form.tipMeniu = tipMeniu;
        form.alergii = alergii;
        form.textInvitat = textInvitat;
        return form;
    }

    render() {
        const {isPopupOpened, popupSeverity, popupMessage, nume, telefon, particip, insotit, numePartener,
            cuCopii, numarCopii, tipMeniu, alergii, textInvitat, motivNeparticipare} = this.state;

        const gdpr = "GDPR : informa??iile furnizate ??n cadrul formularului vor fi folosite strict " +
            "pentru informare ??n scopul nun??ii ??i nu vor fi stocate ??n alt?? parte dec??t pe c??su??a de e-mail (Gmail) a lui Adelina ??i Horia." +
            "Trimiterea e-mailului reprezint?? acordul dvs. cu faptul c?? datele furnizate vor fi folosite strict ??n scopul men??ionat anterior.";

        return (
            <div className={'fifth-layer'}>
                <div className={"fifth-layer-text-intro"}>
                    <p>Un RSVP mai modern</p>
                </div>
                <Snackbar
                    open={isPopupOpened}
                    autoHideDuration={8000}
                    onClose={this.handlePopupClose}
                >
                    <Alert onClose={this.handlePopupClose} severity={popupSeverity}>
                        {popupMessage}
                    </Alert>
                </Snackbar>
                <Paper elevation={3} className="fifth-layer-dialog-paper">
                    <Tooltip enterTouchDelay={50} title={gdpr} color="secondary">
                        <IconButton aria-label="GDPR">
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="fifth-layer-dialog-grid"
                        spacing={4}
                        alignContent={"center"}
                    >
                        <Grid item xs={12} md={8} lg={6}>
                            <ScrollAnimation
                                animateIn='fadeInLeft'
                                animateOnce={true}
                            >
                                <TextField id="nume" name="nume" onChange={this.handleInputChange} value={nume} label="Numele dvs. *" color={'secondary'} fullWidth />
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <ScrollAnimation
                                animateIn='fadeInRight'
                                animateOnce={true}
                            >
                                <TextField id="telefon" name="telefon" onChange={this.handleInputChange} value={telefon} label="Telefonul dvs. *" color={'secondary'} fullWidth />
                            </ScrollAnimation>
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <ScrollAnimation
                                animateIn='fadeInLeft'
                                animateOnce={true}
                            >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" color={'secondary'}>Ve??i putea participa? *</FormLabel>
                                    <RadioGroup row name="particip" id="particip" value={particip} onChange={this.handleInputChange}>
                                        <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                        <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                    </RadioGroup>
                                </FormControl>
                            </ScrollAnimation>
                        </Grid>
                        {
                            this.state.particip === "Nu" &&
                                <Grid item xs={12} md={8} lg={6}>
                                    <ScrollAnimation
                                        animateIn='slideInDown'
                                        animateOnce={true}
                                    >
                                        <TextField
                                            id="motivNeparticipare"
                                            name="motivNeparticipare"
                                            label="Motiv (op??ional)"
                                            multiline
                                            defaultValue=""
                                            onChange={this.handleInputChange}
                                            value={motivNeparticipare}
                                            color={'secondary'}
                                            fullWidth
                                        />
                                    </ScrollAnimation>
                                </Grid>
                        }
                        {
                            this.state.particip !== "Nu" &&
                                <Fragment>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <ScrollAnimation
                                            animateIn='fadeInRight'
                                            animateOnce={true}
                                        >
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend" color={'secondary'}>Veni??i ??nso??it/??? *</FormLabel>
                                                <RadioGroup row name="insotit" id="insotit" value={insotit} onChange={this.handleInputChange}>
                                                    <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                                    <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                                </RadioGroup>
                                            </FormControl>
                                        </ScrollAnimation>
                                    </Grid>
                                    {
                                        this.state.insotit === "Da" &&
                                            <Grid item xs={12} md={7} lg={7} style={{margin: 'auto'}}>
                                                <ScrollAnimation
                                                    animateIn='slideInDown'
                                                    animateOnce={true}
                                                >
                                                    <TextField id="numePartener" name="numePartener" onChange={this.handleInputChange} value={numePartener} label="Nume partener/?? *" color={'secondary'} fullWidth />
                                                </ScrollAnimation>
                                            </Grid>
                                    }
                                    <Grid item xs={12} md={8} lg={6}>
                                        <ScrollAnimation
                                            animateIn='fadeInLeft'
                                            animateOnce={true}
                                        >
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend" color={'secondary'}>Cum s?? fie meniul? *</FormLabel>
                                                <RadioGroup row name="tipMeniu" id="tipMeniu" value={tipMeniu} onChange={this.handleInputChange}>
                                                    <FormControlLabel value={'normal'} control={<Radio />} label="Meniu normal" />
                                                    <FormControlLabel value={'vegetarian'} control={<Radio />} label="Meniu vegetarian" />
                                                </RadioGroup>
                                            </FormControl>
                                        </ScrollAnimation>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <ScrollAnimation
                                            animateIn='fadeInRight'
                                            animateOnce={true}
                                        >
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend" color={'secondary'}>Ne vom bucura de energia ??i r??setele copiilor dvs.? *</FormLabel>
                                                <RadioGroup row name="cuCopii" id="cuCopii" value={cuCopii} onChange={this.handleInputChange}>
                                                    <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                                    <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                                </RadioGroup>
                                            </FormControl>
                                        </ScrollAnimation>
                                    </Grid>
                                    {
                                        this.state.cuCopii === "Da" &&
                                            <Grid item xs={12} md={7} lg={7}>
                                                <ScrollAnimation
                                                    animateIn='slideInDown'
                                                    animateOnce={true}
                                                >
                                                    <FormControl fullWidth>
                                                        <FormLabel color={'secondary'}>Ca??i copila??i vor veni? *</FormLabel>
                                                        <Slider
                                                            color={'secondary'}
                                                            value={numarCopii}
                                                            name="numarCopii"
                                                            min={1}
                                                            max={4}
                                                            step={1}
                                                            getAriaValueText={(value) => value}
                                                            valueLabelDisplay="on"
                                                            onChange={(event, value) => this.handleInputChange({target: {name: "numarCopii", value: value}})}
                                                            marks
                                                        />
                                                    </FormControl>
                                                </ScrollAnimation>
                                            </Grid>
                                    }
                                    <Grid item xs={12} md={8} lg={6}>
                                        <ScrollAnimation
                                            animateIn='fadeInLeft'
                                            animateOnce={true}
                                        >
                                            <TextField
                                                id="alergii"
                                                name="alergii"
                                                label="Ave??i alergii / restric??ii la m??ncare? (op??ional)"
                                                multiline
                                                defaultValue=""
                                                onChange={this.handleInputChange}
                                                value={alergii}
                                                color={'secondary'}
                                                fullWidth
                                            />
                                        </ScrollAnimation>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <ScrollAnimation
                                            animateIn='fadeInRight'
                                            animateOnce={true}
                                        >
                                            <TextField
                                                id="textInvitat"
                                                name="textInvitat"
                                                label="Dac?? dori??i s?? ne transmite??i ceva (op??ional)"
                                                multiline
                                                defaultValue=""
                                                onChange={this.handleInputChange}
                                                value={textInvitat}
                                                color={'secondary'}
                                                fullWidth
                                            />
                                        </ScrollAnimation>
                                    </Grid>
                                </Fragment>
                        }
                        <Grid item xs={12} md={12} lg={12} style={{marginTop: '2%'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{margin: 'auto', display: 'flex', backgroundColor: '#396d63'}}
                                endIcon={<SendIcon />}
                                onClick={this.submit}
                                disabled={this.state.isSubmitDisabled}
                            >
                                R??spunde la invita??ie
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default FifthLayer;