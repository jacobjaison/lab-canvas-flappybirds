class Obstacle {
    constructor(canvas, ctx, moveSpeed) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.xTop = 0;
        this.yTop = 0;
        this.widthTop = 50;
        this.heightTop = Math.floor(Math.random() * (this.canvas.height / 2)); 
        this.imageTop = null;
        this.xBottom = this.xTop;
        this.yBottom = this.heightTop + 150;
        this.widthBottom = 50;
        this.heightBottom = this.canvas.height;
        this.imageBottom = null;
        this.moveSpeed = moveSpeed;
        this.init();
    }

    init() {
        this.imageTop = new Image();
        this.imageTop.src = "images/obstacle_top.png";
        this.imageBottom = new Image();
        this.imageBottom.src = "images/obstacle_bottom.png";
    }

    drawTop() {
        if (this.imageTop) {
            this.ctx.drawImage(
                this.imageTop,
                this.xTop,
                this.yTop,
                this.widthTop,
                this.heightTop
            );
        }
    }

    drawBottom() {
        if (this.imageBottom) {
            this.ctx.drawImage(
                this.imageBottom,
                this.xBottom,
                this.yBottom,
                this.widthBottom,
                this.heightBottom
            );
        }
    }

    moveTop() {
        this.xTop += this.moveSpeed;
    }

    moveBottom() {
        this.xBottom += this.moveSpeed;
    }
}