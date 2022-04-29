/*

Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/


const teamContainer = document.querySelector('.team-container');
document.getElementById('addMemberButton').addEventListener('click', getNewMember);

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
    imageUrl: 'img/new-team-member-02.jpg',
    name: 'Wayne Barnett',
    ruolo: 'Chiaramente Aviatore aziendale'
  },
  //non ne ho messi 2 per usare l'img come prova utente;
];

/**
 * cicla gli elementi da stampare in pagina
 */
const getCard = () => {
  
  teamContainer.innerHTML = '';

  for(let member of team){

    console.log(member);
    getCardPrinter(member);
  } 

}

getCard();

/**
 * definisce l' elemento html da stampare in pagina e lo aggiunge al contenuto esistente;
 * @param {string} member 
 */
function getCardPrinter(member){

  const {imageUrl, name, ruolo} = member;

 const cardHtml =`
  <div class="team-card">
    <div class="card-image">
      <img
        src="${imageUrl}"
        alt="${name}"
      />
    </div>
    <div class="card-text">
      <h3>${name}</h3>
      <p>${ruolo}</p>
    </div>
  </div>`; 

  teamContainer.innerHTML += cardHtml;

}

/**
 * raccoglie dati utente tramite input e richiama la funzione di stampa per aggiungere l'utente in pagina;
 */
function getNewMember (){

  const name = document.getElementById('name').value.trim();
  const ruolo = document.getElementById('role').value.trim();
  const imageUrl = document.getElementById('image').value.trim();

  const newTeamMember = {imageUrl, name, ruolo};

  console.log(teamContainer, 'container team---');

  getCardPrinter(newTeamMember);
  resetForm();
}

 /**
  * resetta i campi di imnput;
  */
function resetForm(){
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}




