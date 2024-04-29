import React from 'react'

function Banner(props) {
  return (
    <div className='banner'>
        <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              {props.serviceName}
            </text>
          </svg>
    </div>
  )
}

export default Banner