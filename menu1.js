const MENU = [
  S("wrap","McAlister's Club Wrap", false, "wrap", {
    c2:{bread:"0.5 heated wheat wrap",mayo:"0.5 T",ham:"1 oz",turkey:"1 oz",cheddar:"0.5 slice",swiss:"0.5 slice",sauce:"1 T honey mustard",bacon:"1 slice",tomato:"1 slice halved",mix:"0.25 oz"},
    whole:{bread:"1 heated wheat wrap",mayo:"1 T",ham:"2 oz",turkey:"2 oz",cheddar:"1 slice",swiss:"1 slice",sauce:"2 T honey mustard",bacon:"2 slices",tomato:"2 slices halved",mix:"0.5 oz"}
  }, [
    st("heatwrap","Heat the wheat wrap","wrap","🔥","Heat wrap first."),
    st("lay","Lay wrap flat","wrap","🌯","Lay flat."),
    st("mayo","Mayo at 6 o'clock","mayo","🫶","Bottom edge."),
    st("ham","Ham","ham","🍖","Ham over mayo."),
    st("turkey","Turkey","turkey","🦃","Turkey over ham."),
    st("cheddar","Cheddar","cheddar","🧀","Cheddar."),
    st("swiss","Swiss","swiss","🧀","Swiss."),
    st("hm","Honey mustard two Ms","hm","💛","Two Ms."),
    st("bacon","Bacon V","bacon","🥓","Bacon V."),
    st("tomato","Tomato halves","tomato","🍅","Halve tomatoes."),
    st("mix","Spring mix","mix","🥬","Mix."),
    st("roll","Roll tight","wrap","🌯","Roll."),
    st("cut","Cut on a sharp angle","cut","✂️","Angle cut."),
    st("plate","Plate it","pick","🍽️","Plate.")
  ]),
  S("club","McAlister's Club", false, "club", {
    c2:{bread:"1.5 wheat toasted",mayo:"0.5 T bottom",ham:"1 oz",turkey:"1 oz",cheddar:"0.5 slice",swiss:"0.5 slice",sauce:"1 T HM",bacon:"1 slice",tomato:"1 slice",mix:"0.25 oz"},
    whole:{bread:"3 wheat toasted",mayo:"1 T bottom",ham:"2 oz",turkey:"2 oz",cheddar:"1 slice",swiss:"1 slice",sauce:"2 T HM",bacon:"2 slices",tomato:"2 slices",mix:"0.5 oz"}
  }, [
    st("toast","Toast wheat","wheat","🍞","Toast."),
    st("mayo","Mayo on bottom","mayo","🫶","Mayo."),
    st("ham","Ham 4 corners","ham","🍖","Ham."),
    st("turkey","Turkey","turkey","🦃","Turkey."),
    st("cheddar","Cheddar","cheddar","🧀","Cheddar."),
    st("swiss","Swiss","swiss","🧀","Swiss."),
    st("bread2","Second wheat","wheat","🍞","Middle bread."),
    st("hm1","HM on middle","hm","💛","Two Ms."),
    st("bacon","Bacon V","bacon","🥓","Bacon V."),
    st("tomato","Tomato","tomato","🍅","Tomato."),
    st("mix","Spring mix","mix","🥬","Mix."),
    st("hm2","HM on mix","hm","💛","Two Ms."),
    st("bread3","Third wheat","wheat","🍞","Top."),
    st("picks","Picks 4 edges","pick","📍","4 edges."),
    st("cut","4 triangles","cut","✂️","4 triangles."),
    st("plate","Plate it","pick","🍽️","Plate.")
  ]),
  S("king","King Club", true, "king", {
    c2:{bread:"1.5 country white toasted",mayo:"0.5 T two pieces",ham:"2 oz",turkey:"2 oz",cheddar:"1 slice",swiss:"1 slice",sauce:"1 T HM",bacon:"2 slices",tomato:"2 slices",mix:"0.25 oz"},
    whole:{bread:"3 country white toasted",mayo:"1 T two pieces",ham:"4 oz",turkey:"4 oz",cheddar:"2 slices",swiss:"2 slices",sauce:"2 T HM",bacon:"4 slices",tomato:"4 slices",mix:"0.5 oz"}
  }, [
    st("toast","Toast country white","whiteb","🍞","Toast."),
    st("mayo","Mayo on TWO pieces","mayo","🫶","Two pieces."),
    st("ham1","Ham first","ham","🍖","Ham."),
    st("turkey1","Turkey first","turkey","🦃","Turkey."),
    st("cheddar1","Cheddar first","cheddar","🧀","Cheddar."),
    st("swiss1","Swiss first","swiss","🧀","Swiss."),
    st("bacon1","Bacon V first","bacon","🥓","On cheese."),
    st("tomato1","Tomato first","tomato","🍅","Tomato."),
    st("mix1","Mix first","mix","🥬","Mix."),
    st("hm1","HM first","hm","💛","Two Ms."),
    st("bread2","Middle mayo UP","whiteb","🍞","Mayo up."),
    st("ham2","Ham second","ham","🍖","Ham."),
    st("turkey2","Turkey second","turkey","🦃","Turkey."),
    st("cheddar2","Cheddar second","cheddar","🧀","Cheddar."),
    st("swiss2","Swiss second","swiss","🧀","Swiss."),
    st("bacon2","Bacon V second","bacon","🥓","On cheese."),
    st("tomato2","Tomato second","tomato","🍅","Tomato."),
    st("mix2","Mix second","mix","🥬","Mix."),
    st("hm2","HM second","hm","💛","Two Ms."),
    st("bread3","Top bread","whiteb","🍞","Top."),
    st("picks","Picks 2 and 7","pick","📍","2 and 7."),
    st("cut","Cut in HALF","cut","✂️","Half diagonal."),
    st("plate","Plate it","pick","🍽️","Plate.")
  ])
];
const DISTRACTORS = [
  st("x-hr","Horseradish","hr","🫶","Wrong sauce."),
  st("x-onion","Red onion","onion","🧅","No onion."),
  st("x-beef","Roast beef","beef","🥩","Wrong protein."),
  st("x-chicken","Chicken","chicken","🍗","Wrong protein."),
  st("x-wrap","Wheat wrap","wrap","🌯","Wrong bread."),
  st("x-white","Country white","whiteb","🍞","Wrong bread."),
  st("x-4cut","Cut into 4 triangles","cut","✂️","Wrong cut."),
  st("x-2cut","Cut in half","cut","✂️","Wrong cut."),
  st("x-47","Picks on 4 edges","pick","📍","Wrong picks."),
  st("x-27","Picks at 2 and 7","pick","📍","Wrong picks.")
];
