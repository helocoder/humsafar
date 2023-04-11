import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style';

function Header() {
    const classes = useStyles();
  return (
    <div>
      <AppBar position='static' style={{ background: '#ff5e00cf' }}>
        <Toolbar className={classes.toolbar}>
            <Typography varient='h5' className={classes.title}>
                HmmSAFAR
            </Typography>
            <Box display="flex" >
            <Typography varient='h6' className={classes.title}>
                Search Your Places
            </Typography>
            {/* <Autocomplete> */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder='Search...' classes={{ root:classes.inputRoot,input:classes.inputInput }}/>
                </div>

            {/* </Autocomplete> */}
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
