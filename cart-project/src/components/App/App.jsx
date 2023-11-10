import { BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import './App.css'

export default function App(){
    return (
        <>
          <BrowserRouter>
            <Header title={'Shopping Cart'} />  
            <Home />
          </BrowserRouter>
          
        </>
    )
}