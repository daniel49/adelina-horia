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
import Typography from "@material-ui/core/Typography";


class FifthLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nume: '',
            telefon: '',
            particip: '',
            insotit: '',
            numePartener: '',
            cuCopii: '',
            numarCopii: '',
            tipMeniu: '',
            alergii: '',
            textInvitat: '',
            motivNeparticipare: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    };

    render() {
        const {nume, telefon, particip, insotit, numePartener, cuCopii, numarCopii, tipMeniu, alergii, textInvitat, motivNeparticipare} = this.state;

        return (
            <div className={'fifth-layer'}>
                <div className={"fifth-layer-text-intro"}>
                    <p>Un RSVP mai modern</p>
                </div>
                <Paper elevation={3} className="fifth-layer-dialog-paper">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="fifth-layer-dialog-grid"
                        spacing={6}
                        alignContent={"center"}
                    >
                        <Grid item xs={12} md={8} lg={6}>
                            <TextField id="nume" name="nume" onChange={this.handleInputChange} value={nume} label="Numele dvs." color={'secondary'} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <TextField id="telefon" name="telefon" onChange={this.handleInputChange} value={telefon} label="Telefonul dvs." color={'secondary'} fullWidth />
                        </Grid>
                        <Grid item xs={12} md={8} lg={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend" color={'secondary'}>Veti putea participa?</FormLabel>
                                <RadioGroup row name="particip" id="particip" value={particip} onChange={this.handleInputChange}>
                                    <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                    <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {
                            this.state.particip === "Nu" &&
                                <Grid item xs={12} md={8} lg={6}>
                                    <TextField
                                        id="motivNeparticipare"
                                        name="motivNeparticipare"
                                        label="Motiv (optional)"
                                        multiline
                                        defaultValue=""
                                        onChange={this.handleInputChange}
                                        value={motivNeparticipare}
                                        color={'secondary'}
                                        fullWidth
                                    />
                                </Grid>
                        }
                        {
                            this.state.particip !== "Nu" &&
                                <Fragment>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend" color={'secondary'}>Veniti insotit/a?</FormLabel>
                                            <RadioGroup row name="insotit" id="insotit" value={insotit} onChange={this.handleInputChange}>
                                                <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                                <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        this.state.insotit === "Da" &&
                                            <Grid item xs={12} md={7} lg={7} style={{margin: 'auto'}}>
                                                <TextField id="numePartener" name="numePartener" onChange={this.handleInputChange} value={numePartener} label="Nume partener/a" color={'secondary'} fullWidth />
                                            </Grid>
                                    }
                                    <Grid item xs={12} md={8} lg={6}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend" color={'secondary'}>Cum sa fie meniul?</FormLabel>
                                            <RadioGroup row name="tipMeniu" id="tipMeniu" value={tipMeniu} onChange={this.handleInputChange}>
                                                <FormControlLabel value={'normal'} control={<Radio />} label="Meniu normal" />
                                                <FormControlLabel value={'vegetarian'} control={<Radio />} label="Meniu vegetarian" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend" color={'secondary'}>Ne vom bucura de energia si rasetele copiilor?</FormLabel>
                                            <RadioGroup row name="cuCopii" id="cuCopii" value={cuCopii} onChange={this.handleInputChange}>
                                                <FormControlLabel value={"Da"} control={<Radio />} label="Da" />
                                                <FormControlLabel value={"Nu"} control={<Radio />} label="Nu" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    {
                                        this.state.cuCopii === "Da" &&
                                            <Grid item xs={12} md={7} lg={7}>
                                                <FormControl fullWidth>
                                                    <FormLabel color={'secondary'}>Cati copilasi vor veni?</FormLabel>
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
                                            </Grid>
                                    }
                                    <Grid item xs={12} md={8} lg={6}>
                                        <TextField
                                            id="alergii"
                                            name="alergii"
                                            label="Aveti alergii / restrictii la mancare? (optional)"
                                            multiline
                                            defaultValue=""
                                            onChange={this.handleInputChange}
                                            value={alergii}
                                            color={'secondary'}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={6}>
                                        <TextField
                                            id="textInvitat"
                                            name="textInvitat"
                                            label="E randul dvs. sa ne transmiteti ceva daca vreti (optional)"
                                            multiline
                                            defaultValue=""
                                            onChange={this.handleInputChange}
                                            value={textInvitat}
                                            color={'secondary'}
                                            fullWidth
                                        />
                                    </Grid>
                                </Fragment>
                        }
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default FifthLayer;