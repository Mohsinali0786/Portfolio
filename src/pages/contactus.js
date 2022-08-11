import { Container, Divider, Grid, Button } from "@mui/material";
// import { Grid } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Form from '../component/form'


function ContactUs() {
    return (
        <Container sx={{ border: '1px solid black', borderRadius: '20px', marginTop: '20px' }} maxWidth={false}>
            <h1 id="contactus">Contact Us</h1>
            <Grid className='contactmaingrid' sx={{ marginTop: 5 }} container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Form />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid className="contactdet" item xs={12}>
                        <Grid item xs={4}>
                            <EmailIcon fontSize="large" />
                        </Grid>
                        <Grid item xs={8} md={4}>
                            <a href="mailto:mohsinali481997@gmail.com">mohsinali481997@gmail.com</a>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className="contactdet">
                        <Grid item xs={4}>
                            <AddIcCallOutlinedIcon fontSize="large" />
                        </Grid>
                        <Grid item xs={8}>
                            +923212097195
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
export default ContactUs