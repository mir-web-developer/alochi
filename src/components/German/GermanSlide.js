import React from 'react'
import { Footer } from '../common/Footer'
import { MainAppBar } from '../common/MainAppBar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://picsum.photos/1100/500',
    },
    {
      label: 'Bird',
      imgPath:
      'https://picsum.photos/1100/500',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
      'https://picsum.photos/1100/500',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
      'https://picsum.photos/1100/500',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
      'https://picsum.photos/1100/500',
    },
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      backgroundColor:theme.palette.background.paper,
      flexGrow: 1,
      margin:"50px 0"
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
      color:"white"
      
    },
    img: {
        minHeight:"400px",
      height: 255,
      maxWidth: "100%",
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
    
    slideFooter: {
    backgroundColor:theme.palette.secondary.main,
    color:"white",
    }
  }));
  

function GermanSlide() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div>
            <MainAppBar/>
            <CssBaseline />
      <Container className={classes.container} maxWidth="md" >
            <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        className={classes.slideFooter}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button style={{color:"white"}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button style= {{color:"white"}}size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
    </Container>
            <Footer/>
        </div>
    )
}

export default GermanSlide
