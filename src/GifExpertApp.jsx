import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
         
        const lowerCaseNewCategory = newCategory.toLowerCase();

        if (categories.some(category => category.toLowerCase() === lowerCaseNewCategory)) {
            return;

        //category: Es el parámetro de la función. 
        //Cuando esta función sea llamada, se espera que se le pase un argumento que será referenciado como category dentro del cuerpo de la función.
          
        }        

     

        //En este código, lowerCaseNewCategory contiene la versión en minúsculas de la nueva categoría, y luego usamos el método some para verificar si ya existe alguna categoría que coincida después de convertirla también a minúsculas. 
        //Si existe una coincidencia, la función onAddCategory sale temprano sin agregar la categoría duplicada. Esto hace que la comparación sea más estricta e insensible a mayúsculas/minúsculas al mismo tiempo.
        
        //if(categories.includes(newCategory)) return;

        //console.log(newCategory);
        setCategories([newCategory,...categories])
        //setCategories(cate => [...cate, 'V'])
      
    };

    return (
        <>
             <h1>GifExpertApp</h1>

  
            <AddCategory 
            
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            
            />

                {
                 categories.map((category) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }

        </>
    )
}