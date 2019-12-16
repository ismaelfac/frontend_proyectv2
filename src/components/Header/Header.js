import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

export default function Header(props) {
    
    return (
        <div>
            <Button variant="outlined">Crear</Button>
        </div>
    )
}