import './navbar.css';
import {Button, MenuItem,Select, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {makeStyles} from '@mui/styles';
const useStyle = makeStyles({
   contactButton:{
        color:"navy !important",
        borderColor:"navy !important",
        padding:"5px 8px !important"
   },

   langSelection:{
        maxHeight:"53px",
        outline:"none",
        border:"none !important",
        borderRadius:"0"

   },
   menuIcon:{
       minHeight:"40px"
   }
   
    
})
export const Navbar = ()=>{
    const classes = useStyle();

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
                 <Button variant='outlined' className={classes.contactButton}>Contact us</Button>
                 <Select defaultValue="UK" onChange={(e)=>setLang(e.target.value)} className={classes.langSelection}>
                     <MenuItem value="India">
                         <img src='./img/indian_flag.png' alt='india' className='flag'/>
                     </MenuItem>
                     <MenuItem value="UK">
                     <img src='./img/eng.png'alt='UK'className='flag'/>
                     </MenuItem>
                 </Select>
             </div>
             <div className='menu'>
             <IconButton className={classes.menuIcon}  >

                <MenuIcon />
             </IconButton>

             </div>
         </div>
    </>
}