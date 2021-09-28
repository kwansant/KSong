const pathCover = function(assents){
    return `files/assents/${assents}`
}

const pathSong = function(file){
    return `files/audio/${file}`
}

function secundsToMinutes(time){
    const minutes = Math.floor(time / 60);
    const secunds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + secunds).slice(-2)}`
}

export { pathCover, pathSong, secundsToMinutes}