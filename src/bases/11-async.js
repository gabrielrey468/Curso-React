const getImagen = async() => {

    try {
        const apikey = '6S0Nu1a8GjBV6DTBVvRQHKZVgaUd4MXA'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
        const { data } = await resp.json()
    
        const { url } = data.images.original;
    
        console.log(url)
    
        const img = document.createElement('img')
            img.src = url
    
            document.body.append( img )
    } catch (error){
        console.error(error)
    }
    
        
    }
    
    getImagen()