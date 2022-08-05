import * as React from 'react';

import { Button, Container, Grid, Divider, LinearProgress, Box, } from '@mui/material';

// import MyCircularProgressWithLabel from './component/CircularProgressWithLabel'
import LinearProgressWithLabel from '../component/LinearProgressWithLabel'
import CircularProgressWithLabel from '../component/circularprogressbar';
function Home() {

    return (
        <Container maxWidth={false}>
            <Grid className='maingrid' sx={{ marginTop: 5 }} container spacing={1}>
                <Grid item xs={3}>
                    <Grid className='sidebar'>
                        <Grid item xs={12}>
                            <img className='userimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvtdV4uQPbm4qSygGuel4dYjXIpeFzDrc8Q&usqp=CAU' />
                        </Grid>
                        <Grid item xs={12}>
                            <h1 className='name'>Mohsin</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <h4 className='name'>Front-End-Developer</h4>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            <Grid className='name'><p>Residence:</p><p >Pakistan</p></Grid>
                            <Grid className='name'><p>City:</p><p>Karachi</p></Grid>
                            <Divider className='divider' />
                        </Grid>
                        <Grid className='styledivider' item xs={12}>
                            <h3>Languages</h3>
                            <CircularProgressWithLabel value={70} />
                            <h4>English</h4>
                            <Divider className='divider' />
                        </Grid>
                        <Grid className='experience'>
                            <h3>Expertise</h3>
                            <h5>HTML</h5>
                            <LinearProgressWithLabel value={90} />
                            <h5>CSS</h5>
                            <LinearProgressWithLabel value={90} />
                            <h5>JavaScript</h5>
                            <LinearProgressWithLabel value={80} />
                            <h5>React JS and React Native</h5>
                            <LinearProgressWithLabel value={70} />
                            <h5>ReactNative</h5>
                            <LinearProgressWithLabel value={60} />
                            <h5>Python</h5>
                            <LinearProgressWithLabel value={50} />
                            <h5>Wordpress</h5>
                            <LinearProgressWithLabel value={60} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={8} sx={{ marginLeft: 5 }}>
                    {/* <Grid className='homeimg'>
                        <h1>Discover My Amazing ArtFact!</h1>
                        <h4>I Build</h4>
                    </Grid> */}

                    <img className='homeimg' src="https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=" />
                    <Grid className='prjdet' item xs={15}>
                        <Grid className="prjdetxt" item xs={12}>
                            <p className='txtyellow'>2+</p>
                            <p>year Experience</p>
                        </Grid>
                        <Grid className="prjdetxt" item xs={12}>
                            <p className='txtyellow'>02 </p>
                            <p>Completed Projects</p>
                        </Grid>
                        <Grid className="prjdetxt" item xs={12}><p className='txtyellow'>2 </p><p>Happy Customer</p></Grid>
                        <Grid className="prjdetxt" item xs={12}><p className='txtyellow'>2 </p><p>Honour of Award</p></Grid>
                    </Grid>
                    <Grid className='myservices' item xs={9}>
                        <Grid item xs={12}>
                            <h2 className='myserhead'>My Services</h2>
                        </Grid>
                        <Grid className='box' item xs={5}>
                            <Grid className='subbox1'>
                                <Box
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        marginTop: 10,
                                        marginLeft: 10,
                                        marginBottom: 10,
                                        backgroundColor: '#383838',
                                        // boxShadow: 20,
                                        boxShadow: "2px 5px 5px red",
                                        '&:hover': {
                                            backgroundColor: 'green',
                                            opacity: [0.9, 0.8, 0.7],
                                        },
                                    }}
                                >
                                    <Grid className='boxtxt'>
                                        <h3 >Frontend Developer</h3>
                                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid>
                                <Box
                                    sx={{
                                        width: 300,
                                        height: 200,
                                        marginTop: 10,
                                        marginLeft: 10,
                                        marginBottom: 10,
                                        marginRight: 10,
                                        backgroundColor: '#383838',
                                        boxShadow: "2px 5px 5px red",
                                        '&:hover': {
                                            backgroundColor: 'green',
                                            opacity: [0.9, 0.8, 0.7],
                                            boxShadow: "2px 5px 5px red",
                                        },
                                    }}
                                >
                                    <Grid className='boxtxt'>
                                        <h3 >Mentors</h3>
                                        <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Container >

    )
}
export default Home;