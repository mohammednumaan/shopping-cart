import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

// function fetchData(){
//   return fetch('https://fakestoreapi.com/products/category/electronics')
//           .then((promise) => promise.json())
// }

// console.log(fetchData())
