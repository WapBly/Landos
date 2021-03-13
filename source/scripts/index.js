const btn = document.getElementById('button_send');
const massage = document.getElementById('massage');

const closeMassage = () => {
  massage.classList.remove('opened_massage');
  document.removeEventListener('click', closeMassage);
}

btn.onclick = () => {
  massage.classList.add('opened_massage');

  setTimeout(() => {
    document.addEventListener('click', closeMassage)
  }, 0)

}