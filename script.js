
const teamContainer = document.querySelector('.team-container');


const team = [
  {
    imageUrl: 'img/angela-caroll-chief-editor.jpg',
    name: 'Angela Carrol',
    ruolo: 'Chief'
  },
  {
    imageUrl: 'img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    ruolo: 'Social Media Manager'
  },
  {
    imageUrl: 'img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    ruolo: 'Graphic Designer'
  },
  {
    imageUrl: 'img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    ruolo: 'Chief'
  },
];

console.log(team);

for(let i in team){
  console.log('simgolo membro del team----',team[i]);

  const outputCard = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="${team[i].imageUrl}"
          alt="${team[i].name}"
        />
      </div>
      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].ruolo}</p>
      </div>
    </div>
  `;
  teamContainer.innerHTML += outputCard;
}

