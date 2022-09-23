
import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
// import {  useState } from "react";

//components
import Profile from "./Profile";

const Header = styled(Box)`
background: #008069;
height: 107px;
color: #FFFFFF;
display: flex;
& > svg, & > p{   
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    font-size: 17px;
} 
`;

const Component = styled(Box)`
background: #ededed;
height: 85%;

`

const drawerStyle = {
    left: 20,
    top: 18,
    height: '95%',
    width: '29.3%',
    boxShadow: 'none'
}
const infoDrawer = ({open, setOpen}) => { // object destructuring
    

    const handleClose= () => {
        setOpen(false);
    }

    return (
        <Drawer
           open={open}
           onClose = {handleClose} 
           PaperProps={{sx: drawerStyle}}
           style= {{zIndex: 1500}}
        >
            <Header>
            <ArrowBack onClick = {() => setOpen(false)}/>
            <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    )

}


export default infoDrawer;