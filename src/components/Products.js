import React from 'react';
import './Products.css';

class Products extends React.Component{
    render(){
        return(
            <div className = 'products'>
                <div className='row'>
                <div className='col-md-12'>
                   <div className='row'>
                   <div className='col-md-2'>
                       <div className='Sidebar'>
                       <ul>
                       <li><i class="material-icons" >computer</i>Computers</li>
                            <li><i className="material-icons" >stay_current_portrait</i>Phones</li>
                            <li>Clothes</li>
                            <li>Food Items</li>
                            <li>Repair services</li>
                            <li>Software Systems</li>
                            <li>Tech Supports</li>
                            </ul></div> 
                            
                    </div>
                     
                    <div className="col-md-10">
                        <div className='Body'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p>This is where products will be</p>
                            </div>
                            <div className='col-md-4'>
                                <p>Product, product kjskhbfjdnf</p>
                            </div>
                            <div className='col-md-4'>
                                <p>A service service and ksjjhdfj</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                     
                   </div>
                </div>
                
                </div>
            </div>
        )
    }
}
export default Products;
