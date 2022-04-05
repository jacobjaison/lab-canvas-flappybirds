class ObstacleTop {
    constructor(canvas, ctx, moveSpeed) {
        this.canvas = canvas;
        this.ctx = ctx;
        //this.x = Math.floor(Math.random() * (this.canvas.width /2));
        this.x = 0;
        this.y = 0;
        this.image = null;
        this.width = 50;
        this.height = (this.canvas.height/2);
        //this.height = Math.floor(Math.random()* (this.canvas.height/2))
        this.moveSpeed = moveSpeed;
        this.init();
    }

    init() {
        this.image = new Image();
        this.image.src = "images/obstacle_top.png";
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

    move() {
        this.x += this.moveSpeed;
    }
}