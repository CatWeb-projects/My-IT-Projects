const data = [
  {
    "day": "sat",
    "from": "10:00",
    "to": "23:00"
  },
  {
    "day": "mon",
    "from": "11:00",
    "to": "23:00"
  },
  {
    "day": "tue",
    "from": "11:00",
    "to": "23:00"
  },
  {
    "day": "wed",
    "from": "12:00",
    "to": "23:00"
  },
  {
    "day": "thu",
    "from": "12:00",
    "to": "23:00"
  },
  {
    "day": "fri",
    "from": "12:00",
    "to": "23:00"
  },
  {
    "day": "sun",
    "from": "10:00",
    "to": "23:00"
  }
]

const sorter = {
  "mon": 1,
  "tue": 2,
  "wed": 3,
  "thu": 4,
  "fri": 5,
  "sat": 6,
  "sun": 7
}



let sortByDay = data.sort((a, b) => sorter[a.day] - sorter[b.day]);

for(let info of data) {
  console.log(`${info.day} : ${info.from} - ${info.to} `)
}