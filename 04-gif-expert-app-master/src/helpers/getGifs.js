export const getGifs = async(category) => {
    const url  = `http://api.giphy.com/v1/gifs/search?api_key=mkUfxZa1BFWA4k4Rdjgf2LPLT5pSU3Vo&q=${category}&limit=25`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))
    // console.log(gif);

    return gif;
  }