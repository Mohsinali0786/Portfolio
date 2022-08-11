import * as React from 'react';

import { Button, Container, Grid, Divider, Box, } from '@mui/material';

import LinearProgressWithLabel from '../component/LinearProgressWithLabel'
import CircularProgressWithLabel from '../component/CircularProgressBar';
import Navbar from '../component/Navbar';
import Aboutus from './aboutus';
import ContactUs from './contactus';
import Myprojects from './myprojects';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Myservices from './services';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {

    return (
        <Container maxWidth={false}>
            <Grid className='maingrid' sx={{ marginTop: 5 }} container spacing={1}>

                <Grid className="background" item xs={12}>
                    <Navbar />
                    <Grid className='hometext' >
                        <h1><i>Hello</i></h1>
                        <h1>I am Web Developer</h1>
                    </Grid>
                    <Grid className='homelogos'>
                        <Grid style={{ textAlign: 'center' }}>
                            <a href=''><FacebookOutlinedIcon style={{ color: 'white' }} /></a>
                        </Grid>
                        <Grid style={{ textAlign: 'center', marginLeft: '10px' }}>
                            <a href=''><LinkedInIcon style={{ color: 'white' }} /></a>
                        </Grid>
                        <Grid style={{ textAlign: 'center', marginLeft: '10px' }}>
                            <a href=''><GitHubIcon style={{ color: 'white' }} /></a>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Myservices />
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Myprojects />
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Aboutus />
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <ContactUs />
                    </Grid>
                </Grid>
            </Grid>

        </Container >


    )
}
export default Home;