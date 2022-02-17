import './navbar.css';
import {Button, MenuItem,Select, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const Navbar = ()=>{
    const [lang,setLang] = useState("")
    return <>
         <div className="nav-container">
             <div className="logo-container nav-left">
                 <img src="./img/Artboard_4_2x-removebg-preview.png" alt="ungrammary" />
             </div>
             <div className="nav-middle">
             
                 <Button variant='string'>Abount Us</Button>
                 <Button variant='string'>Solution</Button>
                 <Button variant='string'>Global Network</Button>
             </div>
             <div className="nav-right">
                 <Button variant='outlined'>Contact us</Button>
                 <Select defaultValue="UK" onChange={(e)=>setLang(e.target.value)}>
                     <MenuItem value="India">India</MenuItem>
                     <MenuItem value="UK">UK</MenuItem>
                     <MenuItem value="China">China</MenuItem>
                 </Select>
             </div>
             <div className='menu'>
             <IconButton  >

                <MenuIcon/>
             </IconButton>

             </div>
         </div>
    </>
}