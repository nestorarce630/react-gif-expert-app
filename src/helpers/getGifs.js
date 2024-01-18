export const getGifs = async(category ) =>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=u6OVrgVB51g2v3WbTe252GvbcWAL5n78&q=${category}&limit=10`
    const ans = await fetch (url);
    const {data} = await ans.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title.trim().length == 0 ?  category : img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}