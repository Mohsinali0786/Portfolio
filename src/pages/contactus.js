import { Container, Divider, Grid, Button } from "@mui/material";
// import { Grid } from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';


function ContactUs() {
    return (
        <Container maxWidth={false}>
            <h1 id="contactus">Contact Us</h1>
            <Grid className='contactmaingrid' sx={{ marginTop: 5 }} container spacing={1}>
                <Grid item xs={6}>
                    <form method="" action="">
                        <label for='name'>Name:</label><br />
                        <input type='text' id='name' name='name' /><br />
                        <label for='email'>Email:</label><br />
                        <input type='email' id='email' name='email' /><br />
                        <label for='phone'>Phone No:</label><br />
                        <input type='number' id='phone' name='phone' /><br />
                        <label for='message'>Message:</label><br />
                        <input type='text' id='message' name='message' height="20" /><br /><br />
                        <Button variant='contained'>On Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={4}>
                    <Grid className="contactdet" item xs={12}>
                        <Grid item xs={4}>
                            <EmailIcon fontSize="large" />
                        </Grid>
                        <Grid item xs={8}>
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