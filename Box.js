class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setDensity(this.body, 0.6)
    this.body.friction = 0.7
    this.image = loadImage("sprites/wood1.png");
  }

};
