class Layer {
    constructor(game, image, speedModifier){
       this.game = game;
       this.image = image;
       this.speedModifier = speedModifier;
       this.width = 2400;
       this.height = this.game.baseHeight;
       this.scaledWidth;
       this.scaledHeight;
       this.x;
    }
    update(){
        this.x -= this.game.speed * this.speedModifier;
        if (this.x <= -this.scaledWidth) this.x = 0;
    }
    draw(){
        this.game.ctx.drawImage(this.image, this.x, 0, this.scaledWidth, this.scaledHeight);
        this.game.ctx.drawImage(this.image, this.x + this.scaledWidth - 1, 0, this.scaledWidth, this.scaledHeight);
        if (this.game.canvas.width >= this.scaledWidth){
            this.game.ctx.drawImage(this.image, this.x + this.scaledWidth * 2 - 2, 0, this.scaledWidth, this.scaledHeight);
        }
    }
    resize(){
        this.scaledWidth = this.width * this.game.ratio;
        this.scaledHeight = this.height * this.game.ratio;
        this.x = 0;
    }
}

class Background {
    constructor(game){
        this.game = game;
        this.image0 = document.getElementById('layer0');
        this.image1 = document.getElementById('layer1');
        this.image2 = document.getElementById('layer2');
        this.image3 = document.getElementById('layer3');
        this.image4 = document.getElementById('layer4');
        this.layer0 = new Layer(this.game, this.image0, 0.1);
        this.layer1 = new Layer(this.game, this.image1, 0.3);
        this.layer2 = new Layer(this.game, this.image2, 0.5);
        this.layer3 = new Layer(this.game, this.image3, 1);
        this.layer4 = new Layer(this.game, this.image4, 1.5);
        this.layers = [this.layer0, this.layer1, this.layer2, this.layer3];
    }
    update(){
        this.layers.forEach(layer => {
            layer.update();
        });
    }
    draw(){
        this.layers.forEach(layer => {
            layer.draw();
        });
    }
    resize(){
        this.layers.forEach(layer => {
            layer.resize();
        });
    }
}