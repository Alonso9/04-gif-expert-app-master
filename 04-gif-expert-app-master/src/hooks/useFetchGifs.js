// Creamos un custom hooks  esto sirve por si otro elemento necesitara las imagenes
// ademas se de que estiliza el componente GifGrid con menos lineas y da mas control de logica

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {    
const [images, setImages] = useState([]);
const [isLoading, setIsloading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsloading(false)
    }

    // Con el useEfecct cada vez que se crea el componente se ejecuta, esto por pasar [], ya que tenemos una funcion que ejecuta la peticion cuando hay nueva categoria
    useEffect( () => {
        getImages();
    }, [])
  return {
    images: images,
    isLoading
  }
}

// export default useFetchGifs;

