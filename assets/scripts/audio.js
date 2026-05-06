class AudioControl {
    constructor(){
        this.charge = document.getElementById('charge');
        this.flap1 = document.getElementById('flap1');
        this.flap2 = document.getElementById('flap2');
        this.flap3 = document.getElementById('flap3');
        this.flap4 = document.getElementById('flap4');
        this.flap5 = document.getElementById('flap5');
        this.flapSounds = [this.flap1, this.flap2, this.flap3, this.flap4, this.flap5];
        this.win = document.getElementById('win');
        this.lose = document.getElementById('lose');

        this.boost = document.getElementById('boost');
        this.antigravity1 = document.getElementById('antigravity1');
        this.antigravity2 = document.getElementById('antigravity2');
        this.antigravity3 = document.getElementById('antigravity3');
        this.antigravity4 = document.getElementById('antigravity4');
        this.antigravity5 = document.getElementById('antigravity5');
        this.antigravitySounds = [this.antigravity1, this.antigravity2, this.antigravity3, this.antigravity4, this.antigravity5];
    }
    play(sound){
        sound.currentTime = 0;
        sound.play();
    }
}