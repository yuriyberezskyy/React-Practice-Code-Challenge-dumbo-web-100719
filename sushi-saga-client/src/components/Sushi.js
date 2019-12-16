import React, { Fragment, useState } from 'react'

const Sushi = (props) => {
  const [hasBeenEaten, setHasBeenEaten] = useState( false )

  const handleClick = () => {
    setHasBeenEaten(!hasBeenEaten)
    console.log(hasBeenEaten)
  }
  return (
    <Fragment>
      <div className="sushi">
      <div className="plate" 
           onClick={() => props.pickSushiToEat(props.sushi)}>
        {  hasBeenEaten ? null : <img src={ props.sushi.img_url } width="100%" alt="sushi" onClick={handleClick} />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi