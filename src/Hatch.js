import React from 'react'
import { StyledHatch } from './HatchStyles'

const Hatch = ({ hatchData: { id, nr, text, img, open }, handleClick }) => (
  <StyledHatch background={img}>
    <div className={open ? 'front open' : 'front'} onClick={handleClick}>
      <p>{nr}</p>
    </div>
    <div className={open ? 'back open' : 'back'} onClick={handleClick}>
      <p>{text}</p>
    </div>
  </StyledHatch>
)

export default Hatch
