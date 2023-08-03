var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","e1aa6590-7fbf-44f5-9ec4-12be4419649d","037d9d50-d546-403e-b909-f70af7ef7c6a","91c3acae-b986-4af8-aa02-aa3fc77db7b9","256c98ea-5828-49d4-bbdf-f4aef5817283","07867e1b-4ffb-42e0-97ac-8ac1875ebe2c","f1677cfc-8cdc-4867-8192-07a8387c4364"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"EdEH.AL5fjrxClBT1bsNN8lqUNGXWDyr","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"inNKhpqOnATKyWzmuAGU3FMyCBgT_Y0n","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":null,"frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":12,"version":"l7wy9qRbKRHMNGH.K6kAVA78_pv7B2Br","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/c26b6449-0b6c-4483-8486-107c0091c26e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"_KM4d4Ibr3JgpyD_z5TwDEJrq_vfzg9U","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e1aa6590-7fbf-44f5-9ec4-12be4419649d":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"037d9d50-d546-403e-b909-f70af7ef7c6a":{"name":"star1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png","frameSize":{"x":396,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nsU6EGw9VtOgGEZ8U_ogGrttDX_tqt0E/category_icons/star1.png"},"91c3acae-b986-4af8-aa02-aa3fc77db7b9":{"name":"star2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EFviWFsqhJEiYyNlum1dylHp1p6reyZQ/category_icons/star2.png","frameSize":{"x":393,"y":375},"frameCount":1,"looping":true,"frameDelay":2,"version":"EFviWFsqhJEiYyNlum1dylHp1p6reyZQ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":375},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EFviWFsqhJEiYyNlum1dylHp1p6reyZQ/category_icons/star2.png"},"256c98ea-5828-49d4-bbdf-f4aef5817283":{"name":"foguete","sourceUrl":"assets/api/v1/animation-library/gamelab/eyQi4oLOgAunBANeSsVNxRHwlGeNI_YE/category_icons/rocket1.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"eyQi4oLOgAunBANeSsVNxRHwlGeNI_YE","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eyQi4oLOgAunBANeSsVNxRHwlGeNI_YE/category_icons/rocket1.png"},"07867e1b-4ffb-42e0-97ac-8ac1875ebe2c":{"name":"alienigena","sourceUrl":"assets/api/v1/animation-library/gamelab/qrCR7O.po3guKfxv7w7acFi8DkZt735X/category_fantasy/alienBeige.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"qrCR7O.po3guKfxv7w7acFi8DkZt735X","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qrCR7O.po3guKfxv7w7acFi8DkZt735X/category_fantasy/alienBeige.png"},"f1677cfc-8cdc-4867-8192-07a8387c4364":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png","frameSize":{"x":110,"y":110},"frameCount":1,"looping":true,"frameDelay":2,"version":"JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":110},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("space_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var enemy4 = createSprite(200,25,10,10)
enemy4.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("player");
hero.scale=.2;
enemy1.setAnimation("star1_1");
enemy1.scale=.1;
enemy2.setAnimation("star2_1");
enemy2.scale=.1;
enemy3.setAnimation("foguete");
enemy3.scale=.1;
enemy4.setAnimation("alienigena");
enemy4.scale=.5;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
enemy4.setVelocity(-12,5);

function draw() {
  
//plano de fundo(b);

createEdgeSprites()



hero.bounceOff(edges)
enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)
enemy4.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y+2
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y-2
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x+2
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x-2
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)|| hero.isTouching(enemy4)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
