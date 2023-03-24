import React, { useState } from 'react'

const Search = () => {
    const[query,setQuery]=useState([])
    const changeHandler=(e)=>{
        setQuery(e.target.value)

    }
  return (
<>

<input onChange={changeHandler} value={query} />


</>
  )
}

export default Search