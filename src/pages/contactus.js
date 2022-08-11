import { Container, Divider, Grid, Button } from "@mui/material";
// import { Grid } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import Form from '../component/form'


function ContactUs() {
    return (
        <Container className="contactuscont" sx={{  }} maxWidth={false}>
            <h1 id="contactus">Contact Us</h1>
            <Grid className='contactmaingrid' sx={{ marginTop: 5 }} container spacing={1}>
                <Form />
                \
                <Grid sx={{ display: 'flex', justifyContent: 'right' }} container spacing={1}>
                    <Grid className="contactdet" >
                        <Grid >
                            <EmailIcon fontSize="medium" />
                        </Grid>
                        <Grid >
                            <a href="mailto:mohsinali481997@gmail.com">mohsinali481997@gmail.com</a>
                        </Grid>
                    </Grid>
                    <Grid className="contactdet" >
                        <Grid>
                            <AddIcCallOutlinedIcon fontSize="medium" />
                        </Grid>
                        <Grid>
                            +923212097195
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
export default ContactUs