import { Grid, Button, Divider } from '@mui/material';
import { Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Myprojects() {
    return (
        <Container maxWidth={false}>
            <h1 id='myproj'>My Projects</h1>
            <Grid className='maingrid' sx={{ marginTop: 5 }} container spacing={1}>
                <Grid className='abouthead' item xs={12}>

                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '20px', marginTop: '20px' }} item xs={12}>
                        <Grid className='boxes' sx={{ marginTop: '30px' }} item xs={12} md={5} xl={4}>
                            <h2>Olx-App</h2>
                            <Button sx={{ backgroundColor: 'black', color: 'white' }} variant='contained'>
                                <GitHubIcon />
                                <a href='https://github.com/Mohsinali-Iot/olx-app.git' target='_blank'>Github Repo</a>
                            </Button>
                        </Grid>

                        <Grid className='boxes' sx={{ marginTop: '30px' }} item xs={12} md={5} xl={4}>
                            <h2>Blood-Bank-App</h2>
                            <Button sx={{ backgroundColor: 'black', color: 'white' }}>
                                <GitHubIcon />
                                <a href='https://github.com/Mohsinali-Iot/BloodBankApp.git'>Github Repo</a>
                            </Button>
                        </Grid>
                        <Grid className='boxes' sx={{ marginTop: '30px' }} item xs={12} md={5} xl={4}>
                            <h2>Campus-Recruitment-System-final</h2>
                            <Button sx={{ backgroundColor: 'black', color: 'white' }}>
                                <GitHubIcon />
                                <a href='https://github.com/Mohsinali-Iot/Campus-Recruitment-System-final-.git'>Github Repo</a>
                            </Button>
                        </Grid>
                        {/* <Grid className='boxes' item xs={5}>
                            <h2>Campus-Recruitment-System-final</h2>
                            <Button sx={{ backgroundColor: 'black', color: 'white' }}>
                                <GitHubIcon />
                                <a href='https://github.com/Mohsinali-Iot/Campus-Recruitment-System-final-.git'>Github Repo</a>
                            </Button>
                        </Grid> */}
                    </Grid>

                </Grid>
            </Grid>
        </Container >
    )
}
export default Myprojects;