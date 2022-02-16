import { Typography } from '@mui/material';
import './main.css';

export const Main = ()=>{
    return <>
            <div className="main-container">
                <div className="banner-container">
                        <img src='./img/banner.png' alt='banner'/>
                </div>
                <div className="form-container">
                   <Typography variant='h3'>Hi, let's get in touch.</Typography>
                    <form>
                            
                    </form>
                </div>
            </div>
    </>
}