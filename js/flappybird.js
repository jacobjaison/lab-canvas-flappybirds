class Flappybird {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.image1 = null;
        this.image2 = null;
        this.speedX = 2;
        this.speedY = 25;
        this.width = 50;
        this.height = 55;
        this.gravity = 1;
        this.gravitySpeed = 15;
        this.y = this.canvas.height / 2;
        this.x = this.canvas.width / 2;
        this.init();
    }

    init() {
        this.image = new Image();
        this.image1 = new Image();
        this.image2 = new Image();
        this.image.src = "images/flappy.png";
        this.image1.src = "images/Flappy1.png";
        this.image2.src = "images/Flappy2.png";
    }   

    draw() {
        if (this.image) {
            this.ctx.drawImage(
                    this.image,
                    this.x,
                    this.y,
                    this.width,
                    this.height
            );
        }
    }
    draw1() {
       if (this.image1) {
            this.ctx.drawImage(
                    this.image1,
                    this.x,
                    this.y,
                    this.width,
                    this.height
            );
        }
    }

    draw2() {
         if (this.image2) {
            this.ctx.drawImage(
                    this.image2,
                    this.x,
                    this.y,
                    this.width,
                    this.height
            );
        }
    }

    move() {
        if (this.y >= 0) {
            console.log ('gravity',this.gravity);
            console.log('gravityspeed',this.gravitySpeed);
            this.y += (this.speedY/this.gravitySpeed) * this.gravity;
        }
        else {
            this.y = 0;
        }
    }
}