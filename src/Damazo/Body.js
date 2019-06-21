import React,{Component} from 'react';
import Image1 from '../components/pics/phonenow.jpg'
class Body extends Component{
    render(){
        return(
            <div className='row'>
            <div className='col-md-6'>
            <img src={Image1} alt='' style={{marginLeft:'20%', width:'440px', height:'290px'}}/>
            </div>
            <div className='col-md-6'>

            

            </div>
            </div>
            
        )
    }
}

export default Body;

