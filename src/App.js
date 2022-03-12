import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
<<<<<<< HEAD
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () =>{
    return(
        <div>
            <CssBaseline/>
            <Header/>
                <Grid container spacing={3} style={{width:'100%'}}>
                    <Grid item xs={12} md={4}>
                        <List/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Map/>
                    </Grid>
                    
                </Grid >       
        </div>
=======

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";



const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <Grid container spacing={3} style={{with:'100%'}}>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
            </Grid>
        </React.Fragment>
>>>>>>> features/header
    )
}


export default App;