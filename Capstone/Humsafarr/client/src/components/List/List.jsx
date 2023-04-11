import React, {useState} from 'react'
import { CircularProgress,Grid,InputLa,Typography,MenuItem,FormControl,Select, InputLabel } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './style'
function List() {
  const classes = useStyles();
  const [type,setType] = useState('Attraction');

  const places=[
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'},
    {name:'Cool place'}

  ];
  return (
    <div className={classes.container}>
     <Typography varient="h4">
       make component for this.
     </Typography>
     <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={''} onChange={(e)=>{
          setType(e.target.value)
      }} >
        <MenuItem value="attraction">Attraction</MenuItem>
        <MenuItem value="station">Hotels</MenuItem>
        <MenuItem value="ererer">Stations</MenuItem>
      </Select>
     </FormControl>

     <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={''} onChange={(e)=>{
          setType(e.target.value)
      }} >
        <MenuItem value="attraction">Attraction</MenuItem>
        <MenuItem value="station">Hotels</MenuItem>
        <MenuItem value="ererer">Stations</MenuItem>
      </Select>
     </FormControl>

     <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={''} onChange={(e)=>{
          setType(e.target.value)
      }} >
        <MenuItem value="attraction">Attraction</MenuItem>
        <MenuItem value="station">Hotels</MenuItem>
        <MenuItem value="ererer">Stations</MenuItem>
      </Select>
     </FormControl>

       <Grid container spacing = {3} className={classes.list}>
            {places?.map((place,i)=>{
                
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                </Grid>
            })}
       </Grid>

    </div>
  )
}

export default List;
