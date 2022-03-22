import React from 'react'

export default function Button({title, onClick}) {
  return (
      <div>
          <button
              onClick={onClick}
              style={{ maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px",
       }}>
              {title}
          </button>
    </div>
  )
}
