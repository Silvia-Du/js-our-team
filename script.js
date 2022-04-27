const team = [
  {
    image: `<img src="img/angela-caroll-chief-editor.jpg" alt="Angela Carrol" />`,
    name: 'Angela Carrol',
    ruolo: 'Chief'
  },
  {
    image: `<img src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez" />`,
    name: 'Angela Lopez',
    ruolo: 'Social Media Manager'
  },
  {
    image: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos" />`,
    name: 'Barbara Ramos',
    ruolo: 'Graphic Designer'
  },
  {
    image: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />`,
    name: 'Angela Lopez',
    ruolo: 'Chief'
  },
];

console.log(team);

for(let i in team){
  console.log('simgolo membro del team----',team[i]);
}

