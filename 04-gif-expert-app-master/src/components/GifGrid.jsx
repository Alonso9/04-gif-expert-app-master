import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '../styles/GifGridStyle.css'

// Para evitar que cada ves se ejecute la peticion a la cuando ocurre un evento se usa el UseState

export const GifGrid = ({category, rows}) => {

  const {images, isLoading} = useFetchGifs(category);
  console.log(rows)

  return (
    <>
        <h3 className='category'> {category} </h3>
        <div className='card-grid'>
          {
            isLoading && (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )
          }
          
          {
            images.map( ( img ) => (
              <GifItem 
                key={img.id}
                { ...img }
              />
            ))
          }
        </div>
        <ol>
            
        </ol>
    </>
  )
}