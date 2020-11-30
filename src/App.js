import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from './AppStyles'
import { createCalendar } from './helpers'
import Hatch from './Hatch'
import Toast from 'light-toast';

const GlobalStyle = createGlobalStyle`
  body {
    background: center / cover url('./img/calendar_backdrop.jpg');
    margin: 0;
  }
`

function App() {
  const [hatches, setHatches] = useState([])

  // Check if localStorage contains our calendar 
  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar()

    setHatches(calendar)
  }, [])

  // Store calendar in localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches))
  }, [hatches])

  // Check if the date is past
  const isPast = (nr) => {
    const today = new Date()
    today.setMonth(11)
    today.setDate(15)
    console.log("Jour: " + today.getDate() + 
                " Mois: " + today.getMonth() +
                " nr: " + nr)

    return today.getDate() >= nr && 
           today.getMonth() === 11
  }
  
  // Update Hatch open status
  const handleFlipHatch = (id,nr) => {
    /*
    console.log("hatches type: " + typeof hatches)
    console.log("hatches keys: " + hatches.keys())
    console.log("hatches entries: " + hatches.entries())

    console.log("Hatches: " + hatches.find(x => x.nr === 15))
    console.log("Hatches: " + hatches.find(x => x.nr === 15).nr)
    console.log("id: " + id)
    console.log("nr: " + nr)
    */
    if (isPast(nr)){
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    )
      setHatches(updatedHatches)  
    }
    else {
      
        Toast.fail('Tricheuse :0', 3000, () => {
        // do something after the toast disappears
      })
    }
  }


  return (
    <>
      <GlobalStyle />
      <StyledApp>
        {hatches.map(hatch => (
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            
            handleClick={handleFlipHatch}
          />
        ))}
      </StyledApp>
    </>
  )
}

export default App
