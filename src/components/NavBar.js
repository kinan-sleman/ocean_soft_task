import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import "../styles/Navbar.css";
import logo from '../image/logo.png';

export default function Navbar() {
    const handleLogoClick = () => {
        window.location.reload();
    };
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="toolbar">
                <div className="logoContainer" onClick={handleLogoClick}>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <Typography variant="h6" className="title">
                    All Categories <ExpandMoreIcon style={{ fontSize: "1rem" }} />
                </Typography>
                <Typography variant="h6" className="deals-for-you">
                    Deals For You
                </Typography>
                <Typography variant="h6" className="Whats-new">
                    What's New
                </Typography>
                <Typography variant="h6" className="delivery">
                    Delivery
                </Typography>
                <div className="search">
                    <div className="searchIcon"></div>
                    <InputBase
                        placeholder="Search For Products Brands & Categories"
                        classes={{
                            root: "inputRoot",
                            input: "inputInput",
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                    <IconButton className="iconButton">
                        <SearchIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                </div>
                <div className="icons">
                    <IconButton className="iconButton">
                        <FavoriteIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <IconButton className="iconButton">
                        <PersonIcon style={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <Link to="/cart">
                        <IconButton className="iconButton"  onClick={handleLogoClick}>
                            <ShoppingCartIcon style={{ color: "#FFFFFF" }} />
                        </IconButton>
                    </Link>

                </div>
            </Toolbar>
        </AppBar>
    );
}