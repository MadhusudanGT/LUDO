import * as React from "react";
import { useEffect }  from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import style from "./Header.module.css";
import GraphImg from "../Images/tras.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ResponsiveGrid from "./ResponsiveGrid";
import { getAnalytics, logEvent } from "firebase/analytics";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
        Our Service
      </Typography>
      <br/>
      <Typography variant="h5" component="div">
        <b>We Provide a lot <br />
        of Cool Serice</b>
      </Typography>
      <p>
        This is content this is content this content content this contentThis is
        content this is content this content content this content
      </p>
      <br/>
      <Button variant="contained">Service</Button>
    </CardContent>
   
  </React.Fragment>
);

const pages = ["Home", "Contact", "Blog", "About", "Events"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event, key) => {
    setAnchorElNav(null);
    console.log(event.target);
    console.log("key index: ", key);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleHandler = () => {
    // setHideBoard(!hideBoard);
    // console.log(hideBoard);
  };

  useEffect(()=>{
    const analytics = getAnalytics();
    // logEvent(analytics, 'select_content', {
    //   content_type: 'image',
    //   content_id: 'P12453',
    //   items: [{ name: 'Kittens' }]
    // });
    logEvent(analytics, 'Header file', { name: 'lever_puzzle'});
  })
  return (
    <>
      <div style={{ backgroundColor: "SlateBlue" }}>
        <AppBar position="static" style={{ backgroundColor: "SlateBlue" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 3,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LUDO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={() => navigate(`/${page}`)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 3 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 3,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LUDO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ my: 4, mr: 3, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <MenuItem onClick={toggleHandler} sx={{ p: 0, mr: 3 }}>
                <Typography textAlign="center">SIGN UP</Typography>
              </MenuItem>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {/* left side content and right side image start */}
        <div className={style.center}>
          <Box sx={{ flexGrow: 1, mt: 10 }}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <div>
                  <Typography variant="h3" component="h3">
                    <b>Boost Personal</b> <br />
                    <b>Productivity</b>
                  </Typography>
                  <p>
                    This is content this is content this content content this
                    content
                    <br />
                    content this content
                  </p>
                  <div>
                    <Button variant="contained">Start a Prject</Button>
                    <span style={{ marginRight: "20px" }}></span>
                    <Button variant="contained" color="success">Call us</Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={6}>
                <div>
                  <img src={GraphImg} alt="GraphImg" width="60%" />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        {/* left side content and right side image end */}
        {/* icons start */}
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <div className={style.center}>
                <FacebookIcon className={style.spaceBetween} />
                <InstagramIcon className={style.spaceBetween} />
                <GoogleIcon className={style.spaceBetween} />
                <WhatsAppIcon className={style.spaceBetween} />
              </div>
            </Grid>
            <Grid item xs={6} md={6}></Grid>
          </Grid>
        </div>
        {/* icons end */}
      </div>
      {/* starting body content */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={style.center} style={{marginTop:'100px'}}>
              <Box>
                <Card variant="outlined">{card}</Card>
              </Box>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={style.center}>
              <ResponsiveGrid />
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* ending body content */}
    </>
  );
};

export default Header;
