const apikey = '6S0Nu1a8GjBV6DTBVvRQHKZVgaUd4MXA'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
    
peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })

.catch(console.warn)