import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const AddCategories = ( {setCategories} ) => {

    const [ input, setInput ] = useState('') 

    const handleInputChanged = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( input.trim().length > 2){
            setCategories( (cats) => [ input,...cats] );
            setInput('');
        }
    }

  return (

    <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={ handleInputChanged }/>
    </form>
  )
}

