const form = document.querySelector("form")
const nlw = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlw.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }

  nlw.addDay(today)
  alert("Dia adicionado com sucesso ✔")
}

function save() {
  localStorage.setItem("jsECMA1003105", JSON.stringify(nlw.data))
}

const data = JSON.parse(localStorage.getItem("jsECMA1003105")) || {}

nlw.setData(data)

nlw.load()
