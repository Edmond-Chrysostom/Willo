import React, {Component} from 'react';
import Comp from '../components/pics/comp.jpg';
import Dam from '../components/pics/accer.jpg';
import Edmond from '../components/pics/apple.jpg';
class Footer extends Component{
render(){
    const Foot={
        background:'maroon',
        color:'white',
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        borderRadius:"4rem"
        
    }
    const pic={
    height:'150px',
    marginBottom:'5%',
    borderRadius:'5rem'


    }
return(
<div style={{border:'2px solid white'}}>
<div className='row' style={Foot}>
<div className='col-md-4' >
    <p style={{textAlign:"center"}}>COME ONE COME ALL</p>
    <img src={Comp} style={pic} />

</div>
<div className='col-md-4' >
    <p>WE HAVE QUALITY PRODUCTS</p>
    <img src={Dam} style={pic} />
</div>
<div className='col-md-4' >
    <p>contact:0785594392</p>
    <img src={Edmond} style={pic}/>
</div>
<div className='col-md-6'>
    <h4 style={{marginLeft:'3%'}}>       our location</h4>
    <p   style={{marginLeft:'3%'}}     >find us in mabira forest</p>
    <br/>
          <p style={{marginLeft:'3%', color:'red'}}> <i><b>being in mabira forest is not our own making but the government policy</b></i></p>    
</div>
<div className='col-md-6' >
    <h4>media</h4>
    <button style={{padding:'2rem'}} className='btn btn-primary'><i className='fa fa-facebook'> facebook</i></button>
    <button style={{padding:'2rem'}} className='btn btn-primary'><i className='fa fa-whatsapp'> whatapp</i></button>
    <button style={{padding:'2rem'}} className='btn btn-primary'><i className='fa fa-google'> google</i></button>
    <button style={{padding:'2rem'}} className='btn btn-primary'><i className='fa fa-twitter'> twitter</i></button>
   
</div>
</div>
 
</div>


)

}

}
export default Footer;