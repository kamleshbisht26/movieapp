import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const {id}= useParams()
  return (
    <div>`singel {id}`</div>
  )
}

export default SingleMovie