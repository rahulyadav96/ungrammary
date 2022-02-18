import { TextField, TextareaAutosize, Typography, Button, Select,MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import './main.css';
import {makeStyles} from '@mui/styles';
import { padding } from '@mui/system';

// for custom styling on mui components
const useStyle = makeStyles({
    submitButton:{
        backgroundColor:"navy !important",
        color:"#ffffff",
        marginTop:"20px !important",
        borderRadius:"none !important",
        textTransform:"capitalize !important"
    },
    span:{
        float:"right",
        textAlign:'right !important',
    }
    
})


export const Main = () => {
    
    const classes = useStyle(); 
    
    //for stroing form inputs
    const [userData, setUserData] = useState({
        phone:"",
        country:"",
        fullName:"",
        email:"",
        msg:""
    });

    //for validation
    const [valid,setValid] = useState({
        phone:false,
        fullName:false,
    })

    //function for validation
    const validation = (user)=>{
        let isvalidname = true;
        let isPhone = true;

        let alpha = "abcdefghijklmnopqrstuvwxyz "

        if(!Number(user.phone)) isPhone = false
        else isPhone = true;

        for(let i = 0; i<user.fullName.length; i++){
            if(alpha.includes(user.fullName[i]) || alpha.toUpperCase().includes(user.fullName[i])){
                continue;
            }else {
                isvalidname = false
                break;
            }
        }
        setValid({...valid,fullName:!isvalidname,phone:!isPhone});

        if(isvalidname&& isPhone) return true;
       
    }
    
    //to handle userInput
    const handleChange=(e)=>{
        const {name,value}  = e.target;

        setUserData({...userData,[name]:value})

    }

    //submit button handler
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validation(userData)) {
            console.log(userData)
            alert("submited")
        }

    }
    
    return <>
        <div className="main-container">
            <div className="banner-container">
                <img src='./img/banner.png' alt='banner' />
            </div>
            <div className="form-container">
                <Typography variant='p' className='connectText'>Hi, let's get in touch.</Typography>
                <form>
                  
                    <TextField 
                    fullWidth label='Phone no' 
                    id="phone"
                    type="tel"
                    variant="outlined" name='phone'
                    onChange={handleChange} 
                    value={userData.phone}
                    error={valid.phone}
                    helperText={valid.phone?<span className={classes.span}>Alphabets not allowed</span>:""}
                    
                    />
                   
                    <FormControl>
                    <InputLabel id="demo-simple-select-autowidth-label">Select Country</InputLabel>
                    <Select 
                    
                    fullWidth variant="outlined" 
                    name='country' 
                    label="Select Country"
                    onChange={handleChange}>
                            <MenuItem value="India" className={classes.MenuItem}>India</MenuItem>
                            <MenuItem value="China">China</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                    </Select>
                    </FormControl>

                    <TextField fullWidth label='Enter Name' type="text" variant="outlined" name='fullName' onChange={handleChange} value={userData.fullName}
                        error={valid.fullName}
                        helperText={valid.fullName?<span className={classes.span}>Special characters not allowed</span>:""}
                    />
                   
                    <TextField fullWidth label='Email Address' type="email" variant="outlined" name='email' onChange={handleChange} />
                    
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
                    className={classes.submitButton}
                    
                    onClick={handleSubmit}
                >Submit</Button>
            </div>
        </div>
    </>
}