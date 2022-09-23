import { useContext } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { qrCodeImage } from '../../constants/data';


const Component = styled(Box)`
display: flex;
`;

const Container = styled(Box)`
padding: 75px 0 75px 75px;
`;

const QRCode =styled('img')({
    height:264,
    width: 264,
    margin: '50px 0 0 50px'
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList =styled(List)`
& > li {
    padding: 0;
    margin-top: 15px;
    font-size: 20px;
    line-height: 28px;
    color: #4a4a4a;
}
`;

const DialogStyle ={
    height: '95%',
    margin: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: DialogStyle }}
        >
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}}>
                    <QRCode src={qrCodeImage} alt="QR Code" />
                    <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                        { showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> : null}
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;