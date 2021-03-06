
const getRGB = function () {
  let r = Math.round(Math.random() * (255 - 150) + 150)
  let g = Math.round(Math.random() * (255 - 150) + 150)
  let b = Math.round(Math.random() * (255 - 150) + 150)
  return `rgb(${r}, ${g}, ${b})`
}

class Data {
  workers = [];
  getWorkers(quantity) {
    let workers = [];

    for (let i = 0; i < quantity; i++) {
      workers.push({
        number: `${i + 1}`,
        name: "John Wick",
        tasks: new Array(),
        shift: {
          shift_key: `${i + 1}`,
          start: "01:00",
          end: "07:00",
          
          // format: function () {
          //   return `${this.start} - ${this.end} (${this.sum}h.)`; //Форматирует под таблицу, удобнее иметь все эти значения по отдельности
          // },
        },
      });
    }
    this.workers = workers
    return workers;
  }

  getTasks(quantity) {
    let tasks = [];

    for (let i = 0; i < quantity; i++) {
      tasks.push({
        id: `${i + 1}`,
        name: `Task name ${i + 1}`,
        shift_key: "",
        time: Math.round(Math.random() * (3 - 1) + 1),
        color: getRGB(),
      });
    }

    return tasks;
  }
}

export default new Data();
