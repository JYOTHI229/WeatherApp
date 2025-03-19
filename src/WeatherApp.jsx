import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";



export default function WeatherApp(){

  const HOT_URL = "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.jpg?s=612x612&w=0&k=20&c=CWg58-taK46CyW3vcGnKlG0wkjiNhfzsPKZp_zVpAFc=";
  const MODERATE_URL = "https://images.unsplash.com/photo-1613931189161-1f4d2660bd1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww";
  const COLD_URL ="https://images.unsplash.com/photo-1701629989032-8b5b29eadf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMGNsaW1hdGV8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL ="https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW58ZW58MHx8MHx8fDA%3D";

    
  let [info , setinfo ]=useState({
      city:"USA",
      feelsLike: 33.78 ,
      humidity: 26 ,
      temp: 24,
      tempMax: 34.9,
      tempMin: 34.9,
      weather: "clear sky"
  
   });



  const appStyle = {
    height: '100vh',  
    width: '100vw',   
    backgroundImage:`url(${info.humidity > 80 ? RAIN_URL : info.temp >30 ? HOT_URL : info.temp >20 ? MODERATE_URL : COLD_URL } )`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',   
    justifyContent: 'center',
    alignItems: 'center',    
  };
  

   const updateInfo = (updatedinfo)=>{
     setinfo(updatedinfo);
   }

      return (
        <div style={appStyle}>
          
          <div>
             <SearchBox updateInfo={updateInfo}/>
             <br></br>
             <InfoBox info={info}/>
          </div>
        </div>
      )
}