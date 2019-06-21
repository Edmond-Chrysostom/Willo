import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../Damazo/Header'
import Footer from '../Damazo/Footer'
import Body from '../Damazo/Body'
class Import extends Component{
 
    render(){
        return(
            <BrowserRouter>
            <Route component = {Header}/>
            <Route component={Body}/>
            <Route component = {Footer}/>
            
            
            </BrowserRouter>

        )
    }

}
export default Import;