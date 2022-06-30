import React from 'react';
import lightBulb from '../../Images/lightBulb.jpg';


const TopHeaderLogo = () =>{

       const title = "Fischer Tech Solutions";
       const titleLine = "Friendly Tech Support";
       const emailAddress = "Email: FischerTechSolutions@gmail.com";
       const Telphone = "Telephone: (226)979-4525";


    return(
          <div className='c-1'>
                 <img className="lightBulb"src={lightBulb} alt="lightBulb"/>
                  <h1 className='mainTitle'>{title}</h1>
                  <p className="titleLine">{titleLine}</p>
                  <p className="EmailAddress">{emailAddress}</p>
                  <p className="Telephone">{Telphone}</p>
           </div> 
    
 );
         
     
                       
  
}



function Header() {
    return   (<div>
               <TopHeaderLogo/>
             
    </div>);
}

export default Header;

