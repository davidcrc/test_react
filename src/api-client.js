const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=ba612fdea087cd09ff717b53d0926f70&format=json'

function getArtists(){
    // No devueve la data , sino una promise
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist )
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 200,
            comments: 140,
        }
    }))
}

export {getArtists}