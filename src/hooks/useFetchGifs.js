import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async () => {
      // Obtener las imágenes mediante la función getGifs del helper
      const newImages = await getGifs(category);
      // Actualizar el estado con las nuevas imágenes
      setImages(newImages);
    };
  
    useEffect(() => {
      // Llamar a la función getImages al montar el componente
      getImages();
      setIsLoading(false)
    }, []); 

    return {
        images,
        isLoading
    }
}
