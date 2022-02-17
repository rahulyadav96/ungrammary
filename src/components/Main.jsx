import { TextField, TextareaAutosize, Typography, Button, Select,MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import './main.css';

export const Main = () => {
    const [userData, setUserData] = useState({
        phone:"",
        country:"",
        fullName:"",
        email:"",
        msg:""
    });

    const handleChange=(e)=>{
        const {name,value}  = e.target;

        setUserData({...userData,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userData)
    }
    return <>
        <div className="main-container">
            <div className="banner-container">
                <img src='./img/banner.png' alt='banner' />
            </div>
            <div className="form-container">
                <Typography variant='p' className='connectText'>Hi, let's get in touch.</Typography>
                <form>
                    <TextField fullWidth label='Phone no' variant="outlined" name='phone' onChange={handleChange} value={userData.phone}>
                     
                    </TextField>
                    <FormControl>
                    <InputLabel id="demo-simple-select-autowidth-label">Select Country</InputLabel>
                    <Select 
                    fullWidth variant="outlined" 
                    name='country' 
                    label="Select Country"
                    onChange={handleChange}>
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="China">China</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField fullWidth label='Enter Name' variant="outlined" name='fullName' onChange={handleChange} value={userData.fullName}/>
                    <TextField fullWidth label='Email Address' variant="outlined" name='email' onChange={handleChange} />
                    <TextareaAutosize
                        style={{width:"inherit", padding:"15px", resize:"none"}}
                        minRows={7}
                        aria-label="maximum height"
                        placeholder="Message"
                        name="msg"
                        onChange={handleChange}
                        value={userData.msg}
                    />
                </form>
                <Button variant='contained'
                style={{marginTop:"20px"}}
                onClick={handleSubmit}
                >Submit</Button>
            </div>
        </div>
    </>
}