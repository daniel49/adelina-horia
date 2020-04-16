import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {bounce} from 'react-animations';
import styled, {keyframes} from 'styled-components'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
    },
    image: {
        position: 'relative',
        height: 120,
        '&:hover, &$focusVisible': {
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 2,
        width: 18,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function BorderButton(props) {
    const classes = useStyles();
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

    return (
        <div className={classes.root}>
            <ButtonBase
                focusRipple
                key={"1"}
                className={`${classes.image} ${props.className}`}
                focusVisibleClassName={classes.focusVisible}
                onClick={props.onClick}
            >
                  <span className={classes.imageSrc}/>
                        <span className={classes.imageBackdrop}/>
                        <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {props.animate ? <Bounce>{props.content}</Bounce> : props.content}
                            <span className={classes.imageMarked}/>
                        </Typography>
                  </span>
            </ButtonBase>
        </div>
    );
}