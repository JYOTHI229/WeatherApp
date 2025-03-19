import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({info}){


    return (
      <div className="InfoBox">
          <div className="CardContainer">
            <Card sx={{ maxWidth: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} {}
                  {info.humidity > 80 ? <ThunderstormIcon/> : info.temp >30 ? <WbSunnyIcon/> : info.temp >20 ? <CloudIcon/>  : <AcUnitIcon/> }
                </Typography>
                <Typography variant="body2" color='text.secondary' component={"span"}>
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.tempMin} </p>
                  <p>Max Temp = {info.tempMax} </p>
                  <p> The weather can be described as <i>{info.weather} </i>  and
                    feels like = {info.feelsLike}&deg;C</p>
          
                </Typography>
             </CardContent>
     
            </Card>
          </div>
      </div>
    )
}