import { TextField, TextareaAutosize, Typography, Button, Select } from '@mui/material';
import './main.css';

export const Main = () => {
    return <>
        <div className="main-container">
            <div className="banner-container">
                <img src='./img/banner.png' alt='banner' />
            </div>
            <div className="form-container">
                <Typography variant='h4' style={{marginBottom:"20px"}}>Hi, let's get in touch.</Typography>
                <form>
                    <TextField fullWidth label='Phone no' variant="outlined">
                        <span>India</span>
                    </TextField>
                    <Select fullWidth label='Select Country' placeholder="Country"></Select>
                    <TextField fullWidth label='Enter Name' variant="outlined" />
                    <TextField fullWidth label='Email Address' variant="outlined" />
                    <TextareaAutosize
                        style={{width:"94%", padding:"15px", resize:"none"}}
                        minRows={7}
                        aria-label="maximum height"
                        placeholder="Message"
                    />
                </form>
                <Button variant='contained'
                style={{marginTop:"20px"}}
                >Submit</Button>
            </div>
        </div>
    </>
}