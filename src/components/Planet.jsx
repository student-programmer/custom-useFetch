import React from 'react'
import useFetch from './UseFetch'

const Planet = () => {

    const url = 'https://swapi.dev/api/planets/'
    const {data, isLoading, error} = useFetch(url)

    if(isLoading){
        return <p>isLoading...</p>
    }
    if(error){
        return <p>an error occured</p>
    }
  return (
    <div>
        {data.map(el => <p key={el.name}>{el.name}</p>)}
    </div>
  )
}

export default Planet