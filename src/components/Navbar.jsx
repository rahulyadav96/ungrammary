import './navbar.css';
import {Button, Typography,Select} from "@mui/material"

export const Navbar = ()=>{
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
                 <Select defaultValue="any">
                     <option value="India" selected>India</option>
                     <option value="India" selected>India</option>
                     <option value="India" selected>India</option>
                     <option value="India" selected>India</option>
                 </Select>
             </div>
         </div>
    </>
}