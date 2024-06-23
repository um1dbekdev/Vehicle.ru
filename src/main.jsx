import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hd from './header'
import Sc from './sc'
import ScBigCard from './ScBigCard'
import SectionCar from './SectionCar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Hd/>
  <Sc/>
  <ScBigCard/>
  <SectionCar/>
  </React.StrictMode>,
)
