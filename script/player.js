import audios from "./data.js"
import { pathCover, pathSong, secundsToMinutes } from "./utils.js";
import elements from "./playerElements.js"

export default {
    audioList: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    start(){
    elements.get.call(this);
    
    this.refresh();
    },
    play(){
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },
    pause(){
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    togglePlayPause(){
        if(this.isPlaying){
            this.pause();
        } else {
            this.play();
        }
    },
    toggleMute(){
        this.audio.muted = !this.audio.muted;
        if(this.audio.muted){
            this.mute.innerText = "volume_down";
        } else{
            this.mute.innerText = "volume_up";
        }
    },
    next(){
        this.currentPlaying++;
        if(this.currentPlaying == this.audioList.length)
        this.resetPlaylist();
        this.refresh();
        this.play();
    },

    setVolume(value){
        this.audio.volume = value / 100;
    },
    setSeek(value){
        this.audio.currentTime = value;
    },
    timeUpdate(){ 
        this.currentDuration.innerText = secundsToMinutes(this.audio.currentTime)
        this.seekbar.value = this.audio.currentTime;
    },
    refresh(){
        this.currentAudio = this.audioList[this.currentPlaying];
        this.cover.style.background = `url('${pathCover(this.currentAudio.cover)}') no-repeat center center / cover`
        this.title.innerText = this.currentAudio.titulo;
        this.artist.innerHTML = this.currentAudio.artista;
        elements.createAudio.call(this, pathSong(this.currentAudio.song))
        this.audio.onloadeddata = () => {
            elements.actions.call(this);

        }
    
    },
    resetPlaylist(){
        this.currentPlaying = 0;
        this.refresh();
    },
    horário(){
        this.hora  = document.querySelector("#horario");
        now = new Date

        if (now.getHours() >= 6 && now.getHours() < 12){
            return this.hora.innerText = "Bom dia!"
        } else if (now.getHours() >= 12 && now.getHours() < 18){
            return this.hora.innerText = "Boa Tarde!"
        } else {
            return this.hora.innerText = "Boa Noite!"
        }
    }
}
