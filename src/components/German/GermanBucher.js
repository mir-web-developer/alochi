import React from "react";
import { Footer } from "../common/Footer";
import { MainAppBar } from "../common/MainAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import GetAppIcon from "@material-ui/icons/GetApp";
import InfoIcon from "@material-ui/icons/Info";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,
    paddingBottom:"20px",
    paddingTop:"20px"
  },
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));
const styles = (theme) => ({
  dialogRoot: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.dialogRoot} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function GermanBucher() {
  const classes = useStyles();
  const books = useSelector((state) => state.germanBucher);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MainAppBar />
      <CssBaseline />
      <Container className={classes.container} maxWidth="md">
        <div className={classes.root}>
          <GridList spacing={5} cellHeight={500} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">Bucher</ListSubheader>
            </GridListTile>
            {books.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton
                    onClick={handleClickOpen}
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      {/* <GetAppIcon /> */}
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
        
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
             Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Footer />
    </>
  );
}

export default GermanBucher;
