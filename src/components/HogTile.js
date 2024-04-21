import React, { useState } from 'react'
import HogDetail from './HogDetail'

export default function HogTile({ hog }) {
  const [isShowDetail, setIsShowDetail] = useState(false)

  const {name, image} = hog

  return (
    <div className='ui card eight wide column pigTile'>
      <div className="image">
        <img src={image}  alt={name} style={{height:300 ,Width:400}} />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
      </div>
      {isShowDetail && <HogDetail hog={hog} />}
      <button
        className="ui button"
        onClick={() => setIsShowDetail(!isShowDetail)}
      >
        {isShowDetail ? "Less Info" : "More Info"}
      </button>     
    </div>    
  )
};