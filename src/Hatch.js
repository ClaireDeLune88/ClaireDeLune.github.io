import React from 'react'
import { StyledHatch } from './HatchStyles'

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) => (
<<<<<<< HEAD
  <StyledHatch background={img} onClick={() => handleClick(id,nr)}>
    <div className={open ? 'front open' : 'front'}>
=======
  <StyledHatch background={img}>
    <div className={open ? 'front open' : 'front'} onClick={handleClick}>
>>>>>>> parent of e4c1c79... persist state in localstorage
      <p>{nr}</p>
    </div>
    <div className={open ? 'back open' : 'back'} onClick={handleClick}>
      <p>{text}</p>
    </div>
  </StyledHatch>
)

export default Hatch
