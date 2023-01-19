const form = document.querySelector("form")
const nlw = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-07", "01-08"],
  water: [
    "01-01",
    "01-02",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
    "01-11",
    "01-12",
    "01-13",
  ],
  food: ["01-02", "01-03", "01-04", "01-05"],
}

nlw.setData(data)

nlw.load()
