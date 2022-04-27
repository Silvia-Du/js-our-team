
const teamContainer = document.querySelector('.team-container');
const buttonAddMember = document.getElementById('addMemberButton');
//array team
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
    ruolo: 'Founder Ceo'
  },
  {
    imageUrl: 'img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    ruolo: 'Office Manager'
  },
  {
    imageUrl: 'img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    ruolo: 'Uman Resource Director'
  },
  {
    imageUrl: 'img/new-team-member-04.jpg',
    name: 'Marck Jacobs',
    ruolo: 'Developer Project Manager'
  },
  {
    imageUrl: 'img/new-team-member-03.jpg',
    name: 'Suzanee Waite',
    ruolo: 'Direttrice Operativa'
  },
  {
    imageUrl: 'img/new-team-member-02.jpg',
    name: 'Wayne Barnett',
    ruolo: 'Chiaramente Aviatore aziendale'
  },
  //non metto l'ultimo per usare l'img come prova utente
];

console.log(team);


//stampo in pagina le card
for(let i in team){

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

buttonAddMember.addEventListener('click', takeNewMember);

function takeNewMember(){

  const name = document.getElementById('name').value.trim();
  console.log(name,'nome user');
  const role = document.getElementById('role').value.trim();
  console.log(role, 'ruolo utente');
  const imageUser = document.getElementById('image').value.trim();
  console.log(imageUser);

  

}

