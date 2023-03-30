import React from 'react'

const GifItem = ( {title, url, id }) => {
  return (
    <div className='card'>
        <img className='card-img-top' src={ url } alt={ title } />
        <div className="card-body">
            <h5 className='card-title'>{ title }</h5>
        </div>
    </div>
  )
}

export default GifItem
