import React from 'react'
import { Footer } from '../common/Footer'
import { MainAppBar } from '../common/MainAppBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { NavLink, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  container:{
    backgroundColor: theme.palette.background.paper,
   padding:"0",
   minHeight:"100vh"
    
},
navlinkStyle:{
  textDecoration:"none",
  padding:"0",
  margin:"0"
}
}));


//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
  const tileData = [
    {
      img: "https://picsum.photos/800/600",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://picsum.photos/800/600",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://picsum.photos/800/600",
      title: 'Image',
     author: 'author',
      featured: true,
    },
    {
      img: "https://picsum.photos/800/600",
      title: 'Image',
     author: 'author',
      featured: true,
    }
  ];
 
  

function GermanSlides() {
    const classes = useStyles();
  const {paramsId}= useParams()
    
    return (
        <div>
            <MainAppBar/>
            <CssBaseline />
      <Container className={classes.container} maxWidth="md" >
      <div className={classes.root}>
      <GridList cellHeight={200} spacing={15} className={classes.gridList}>
        {tileData.map((tile) => (
          
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            {/*  */}
            <img src={tile.img} alt={tile.title} />
            {/* </NavLink> */}
            <NavLink className={classes.navlinkStyle} to={`slide/${paramsId}`}>
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            /></NavLink>
          </GridListTile>
         
        ))}
      </GridList>
    </div>
    </Container>
            <Footer/>
        </div>
        
    )
}

export default GermanSlides
