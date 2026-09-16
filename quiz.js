const GUESTS = ["Table 4","Patio 2","To-Go Lane","Booth 11","Curbside","Bar 3","Online 87","Lobby 1","Catering Hold","Drive 5"];
const RANKS = [
  [0,"New Hire"],[400,"Line Cook"],[900,"Sandwich Pro"],[1600,"Expo Ace"],
  [2500,"Club Champ"],[4000,"Market Legend"]
];

function S(id, name, premium, family, portions, steps){
  return {id, name, premium, family, portions, steps};
}
function st(id, label, cls, icon, hint){
  return {id, label, cls, icon, hint};
}
