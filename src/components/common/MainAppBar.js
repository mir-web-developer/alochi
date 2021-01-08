import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { auth } from "../../firebase";
import { logOut } from "../../reducers/userReducer";
import { Avatar, Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/MainAppBar.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      '&:focus': {
        width: '20ch',
      },
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",

      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  displayName: {
    // marginTop:theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  button: {
    // marginTop:"15px",
    marginLeft: theme.spacing(1),
  },
  signInButton: {
    textDecoration: "none",
    color: "black",
  }
}));

export const MainAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const dispatch = useDispatch();
  const singOut = () => {
    dispatch(logOut());
    auth.signOut();
    toast.info("Successfully signed out");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {user ? (
          <>
            <MenuItem>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  
                />
              </IconButton>{" "}
            </MenuItem>
            <p  onClick={singOut}>Выйти</p>
          </>
        ) : (
          <>
            <Link className={classes.signInButton} to="/signin">
              <MenuItem>
                <IconButton>
                  <MeetingRoomIcon />
                </IconButton>
                <p>Вход</p>
              </MenuItem>
            </Link>
          </>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className="home_appButton_signin" to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <HomeIcon />
            </IconButton>
          </NavLink>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink className="home_appButton_signin" to="/">
              {" "}
              Alochi.uz
            </NavLink>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink className="home_appButton_signin" to="/posts">
              <Button className={classes.button} color="inherit">
                Posts
              </Button>
            </NavLink>
            <NavLink className="home_appButton_signin" to="/addPost">
              <IconButton aria-label="show 4 new mails" color="inherit">
                {/* <Badge badgeContent={4} color="secondary"> */}

                <AddCircleIcon fontSize="medium" />

                {/* </Badge> */}
              </IconButton>
            </NavLink>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {user ? (
              <>
                <div className={classes.displayName}>{user.displayName}</div>{" "}
                {
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL}
                      
                    />
                  </IconButton>
                }
                <Button color="inherit" onClick={singOut}>
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link className="home_appButton_signin" to="/signin">
                  <Button className={classes.button} color="inherit">
                    Вход
                  </Button>
                </Link>

                <Link className="home_appButton_signin" to="/signup">
                  <Button className={classes.button} color="inherit">
                    Регистрация
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

// import React from "react";
// import { auth } from "../../firebase";
// import Toolbar from "@material-ui/core/Toolbar";
// import { logOut } from "../../reducers/userReducer";
// import {
//   AppBar,
//   Avatar,
//   Button,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";
// import { Link, NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import "../../styles/MainAppBar.css";

// const useStyles = makeStyles((theme) => ({
//   appTitle: {
//     flexGrow: 1,
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

// export const MainAppBar = () => {
//   const classes = useStyles();
//   const user = useSelector((state) => state.user.user);
//   console.log(user);
//   const dispatch = useDispatch();
//   const singOut = () => {
//     dispatch(logOut());
//     auth.signOut();
//     toast.info("Successfully signed out");
//   };

//   return (
//     <>
//       <AppBar className={classes.mainAppBar} position="relative">
//         <Toolbar>
//           {/* <CameraIcon className={classes.icon} /> */}
//           <Typography
//             className={classes.appTitle}
//             variant="h6"
//             color="inherit"
//             noWrap
//           >
//             <NavLink className="home_appButton_signin" to="/">
//               {" "}
//               Alochi.uz
//             </NavLink>
//           </Typography>
//           {/* {user.email === "djalilovmir@gmail.com" ? () :()} */}
//           <NavLink className="home_appButton_signin" to="/addPost">
//             <Button className={classes.button} color="inherit">
//               Add Post
//             </Button>
//           </NavLink>

//           <NavLink className="home_appButton_signin" to="/posts">
//             <Button className={classes.button} color="inherit">
//               Posts
//             </Button>
//           </NavLink>

//           {user ? (
//             <>
//               <div className="mainAppBar__displayName">{user.displayName}</div>{" "}
//               {
//                 <Avatar
//                   alt={user.displayName}
//                   src={user.photoURL}
//                   className={classes.button}
//                 />
//               }
//               <Button color="inherit" onClick={singOut}>
//                 Выйти
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link className="home_appButton_signin" to="/signin">
//                 <Button color="inherit">Вход</Button>
//               </Link>
//               <Link className="home_appButton_signin" to="/signup">
//                 <Button color="inherit">Регистрация</Button>
//               </Link>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };
