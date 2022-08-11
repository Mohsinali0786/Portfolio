
import { Container, Divider, Grid, Button } from "@mui/material";

function Form() {
    return (
        <Container maxWidth={false} >
            <Grid container Spacing={1}>
                <Grid item xs={12}>
                    <form method="" action="">
                        <label for='name'>Name:</label><br />
                        <input type='text' id='name' name='name' placeholder="Enter your name" /><br />
                        <label for='email'>Email:</label><br />
                        <input type='email' id='email' name='email' placeholder="Enter your Email" /><br />
                        <label for='phone'>Phone No:</label><br />
                        <input type='number' id='phone' name='phone' placeholder="Enter Mobile Number" /><br />
                        <label for='message'>Message:</label><br />
                        <input type='text' id='message' name='message' height="20" placeholder="Enter your Text Here" /><br /><br />
                        <Button sx={{ marginBottom: '30px' }} variant='contained'>On Submit</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )

}
export default Form;