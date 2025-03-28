import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity] = useState("");
    let [error,seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const api_key =dd937256ff618efde38ffc99451e598d || process.env.REACT_APP_API_URL ;

    const getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result ={
                city:city,
                temp : jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min ,
                tempMax : jsonResponse.main.temp_max ,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like ,
                weather : jsonResponse.weather[0].description,
    
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    
    };

    const handleChange = (event)=>{
        setCity(event.target.value);
    }

    const handleSubmit =async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }
        catch(err){
            seterror(true);
            alert("Please enter a valid city");
            
       }
       
    }


    return (
        <div className="SearchBox">
            <h2> <u> Weather Report  </u> </h2> 
            <form onSubmit={handleSubmit}>
               <TextField 
                  id="city" 
                  label="City Name"
                  variant="standard" 
                  required 
                  value={city}
                  onChange={handleChange}
                  style={{color:"black"}}
                />
               <br></br>
               <br></br>
               <Button variant="contained" type="submit">
                  search
               </Button>

               
            </form>
        </div>

    )
          
}