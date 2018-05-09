// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
renderer = PIXI.autoDetectRenderer(
  300,
  300,
  {
    // view: document.getElementById("animations-canvas"),
    antialias: true
  },
  false, true
);
setTimeout(function(){
  document.body.appendChild(renderer.view);
}, 1000);

var stage = new PIXI.Container();

var circle = new PIXI.Graphics();
circle.beginFill(0x1166FF);
circle.drawCircle(60, 60, 150);
circle.endFill();
stage.addChild(circle);

renderer.render(stage);

// const app = new PIXI.Application();
// console.log(app);
// The application will create a canvas element for you that you
// can then insert into the DOM
// setTimeout(function(){
//   document.body.appendChild(app.view);
// }, 1000);

/*let circle = new PIXI.Graphics();
circle.beginFill(0x1166FF);
circle.drawCircle(0, 10, 200);
circle.endFill();
circle.x = 64;
circle.y = 130;
app.stage.addChild(circle);*/

// load the texture we need
/*
PIXI.loader.add('zombie', 'zombie.png').load((loader, resources) => {
  console.log("res: ", resources);
  // This creates a texture from a 'bunny.png' image
  const bunny = new PIXI.Sprite(resources.zombie.texture);

  // Setup the position of the bunny
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;

  // Rotate around the center
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;

  // Add the bunny to the scene we are building
  app.stage.addChild(bunny);

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    // bunny.rotation += 0.01;
  });
});
*/
