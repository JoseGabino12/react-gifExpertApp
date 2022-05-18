import React from 'react'
import getGifs from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( {category} ) => {


    const {data, loading} = useFetchGifs(category);




    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            { loading && <p>Loading...</p> }

            <div className='card-grid'>
                { data.map( (img) => <GifGridItem key={img.id} {...img}/>)}
            </div>

        </>
  )
}

export default GifGrid;