import React from 'react'
import '../css/tailwind.css'
import Card from './Card'



function Projects({ data }) {

  return (
    <div className="container flex flex-wrap mx-auto pb-5">
      {
        data.map((props) => {
          return <Card {...props} />
        })
      }
    </div>
  )
}

export default Projects