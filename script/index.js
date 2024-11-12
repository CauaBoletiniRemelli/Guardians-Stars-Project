const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
  { name: 'Mantis', id: 'mantis' },
]

let activeMember = 0;
const images = document.querySelector("#images");
const menu = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const memberText = document.querySelector("#member-name");

function changeStatusButtons() {
  const prev = document.querySelector("#btn-prev");
  const isFirst = activeMember === 0;
  prev.disabled = isFirst;

  const next = document.querySelector("#btn-next");
  const isLast = activeMember === members.length -1;
  next.disabled = isLast;
}

function changeMember(memberId) {
  activeMember = memberId
  const member = members[activeMember];

  images.style.transform = `translateY(${-100 * activeMember}vh)`
  memberText.classList = member.id

  changeName(member.name)
  changeStatusButtons()
}

function navigationMember(direction) {
  changeMember(activeMember + direction)
}

function changeMenu() {
  menu.classList.toggle("active")
  navigation.classList.toggle("active")
}

function setMember(memberId) {
  changeMember(memberId)
  changeMenu()
}