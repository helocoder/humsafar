import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import lottie from "lottie-web";

function LocationForm() {
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [date, setDate] = useState("");


  // const sendDataToServer = async () => {
  //   console.log(from);
  //   axios.post('http://localhost:6000/userinfo', { 
  //   boarding:"from",
  //   destination:"to",
  //   day:"date"
  
  //   })
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error(error));
  // }
    
  const sendDataToServer = async (e) => {
    e.preventDefault();
    const res = await fetch("/userinfo",{
      method:"POST",
      headers:{
        "content-Type" : "application/json"
      },
      body:JSON.stringify({
        from, to, date
      })
    });
    const data = await res.json();
    if(data.status == 422 || !data)
    {
      window.alert("Invalid submission");
      console.log("INVallllid");
    }
    else{
      window.alert("valid submission");
      // history.push("./");
      console.log("Vallllid");

    }

  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // const response = await axios.post("/api/location", {
  //     //   from,
  //     //   to,
  //     //   date,
  //     // });
  //     // console.log(response.data);
  //     console.log(from + "" + to + "" + city + "" + state + "" + date)
  //     sendDataToServer();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // const options = {
  //   method: 'GET',
  //   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/IN/regions',
  //   headers: {
  //     'X-RapidAPI-Key': 'd1b7324465msh179ef305c3db07cp1de10cjsnc15c3c0030bd',
  //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     setFrom(response.data)
  //     console.log(response.data.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, [])

  // useEffect(()=>{
  // axios.get('url')
  // .then(res=>setFrom(res.data))
  // .catch(err=>console.log(err));
  // },[]);




  return (
    <div>
     
      {/* -------------------------------------FORM------------------------------------------------- */}
      <div className="min-h-screen 

  w-full
  h-screen
  bg-gradient-to-r
  from-orange-500
  via-yellow-200
  to-red-300
  background-animate

  py-4 
  px-8 
  flex 
  justify-center 
  items-center"
      >
        <img src=""></img>
        <div className="flex flex-col items-center rounded-2xl drop-shadow-lg backdrop-blur-sm bg-white/20 ... w-2/3 p-1">
          <h1 className="text-2xl font-bold text-orange-50  mt-3">Find Your Companion Now :)</h1>
          <form method="post" onSubmit={sendDataToServer} className='flex flex-col w-3/3 mx-auto my-5 gap-y-2'>
            <label>From</label>
            <input
              list="data"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              type="text"
              // placeholder="e.g. Patna"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200"
            />
            {/* <datalist id="data">
          <options>Bihar</options>
          <options>Punjab</options>
          <options>Delhi</options>
        </datalist> */}


            <label>To</label>
            <input

              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="text"
              placeholder="eg. Delhi"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200 w-auto"
            />
            <label>Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="p-2 rounded-2xl focus:outline-none border-2 border-orange-200 w-auto"
            />
            <input
              type="submit"
              className="rounded-2xl bg-orange-500 my-2 p-2 text-orange-50 cursor-pointer"
            />
          </form>
        </div>
      </div>

    </div>
  );
}

export default LocationForm;
