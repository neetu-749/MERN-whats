
import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {  useState } from "react";

const Header = styled(Box)`

`

const drawerStyle = {
    left: 20,
    top: 18,
    height: '95%',
    width: '29.3%',
    boxShadow: 'none'
}
const infoDrawer = ({open, setOpen}) => { // object destructuring
    
    // const [Open, setOpen] = useState(false);

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
            <Box>

            </Box>
        </Drawer>
    )

}


export default infoDrawer;