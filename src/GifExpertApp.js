import {useState} from 'react'
import { AddCategories } from './components/AddCategories';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategories( [...categories, 'HunterXHunter'] )
  // }

  return (
    <>
        <h1>GifttrtttestwserExpertApp</h1>
        <AddCategories setCategories={setCategories}/>
        <hr/>

        <ol>
          { 
            categories.map( (categorie) =>  <GifGrid key={categorie} category={categorie}/>  ) 

          }
        </ol>
    </>
  )
}