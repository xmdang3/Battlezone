const W = window.innerWidth,
      H = window.innerHeight,
      hW = (W/2),
      hH = (H/2),
      STAGESIZE = W,
      FOCALLENGTH = W ,
      GREEN = '#02F801',
      RED = '#9D2929',
      FONT = 'vector_battleregular',
      FONTH1 = '30px',
      FONTH2 = '25px',
      FONTH3 = '15px',
      LINEHEIGHTH1 = 30,
      LINEHEIGHTH2 = 20,
      LINEHEIGHTH3 = 10,
      TANKSPEED = 0.2,
      TANKTURNSPEED = 0.1,
      MAXPLAYERS = 3,
      SCORETANK = 10,
      SCORESHIP = 20,
      SCOREMISSLE = 30;
var SOUNDON = false,
    GAMEOVER = true,
    RENDERGAME = false,
    SHOWHORIZON = true,
    SCORE = 0,
    HIGHSCORE = 0;
    TANKAGGRESSION = 1;