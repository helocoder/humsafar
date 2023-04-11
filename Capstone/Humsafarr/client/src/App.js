   import React from 'react'
   import Header from './components/Header/Header'
   import List from './components/List/List'
   import Map from './components/Map/Map'
   import PlaceDetails from './components/PlaceDetails/PlaceDetails'
  import CssBaseline from '@material-ui/core/CssBaseline';
  import Grid from '@material-ui/core/Grid'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import LocationForm from './components/Form/LocationForm'
import Anim from './components/Animations/Anim'
function App() {
     return (
       <>
         <CssBaseline />
         {/* <Header/> */}
{/*     
          <Login/> */}

         <Grid container spacing={-10} style={{ width:'100%' }}>
          <Grid items xs={12} md={4}>
          <LocationForm/>
           {/* <List /> */}
          </Grid>
          <Grid items xs={7} md={8}>
              <Map/>
              {/* <Anim/> */}
          </Grid>
          
         
         </Grid>

        
       </>
     )
   }
   
   export default App
   