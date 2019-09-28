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


data.sort(function sortByDay(a, b) {
  let day1 = a.day.toLowerCase();
  let day2 = b.day.toLowerCase();
  return sorter[day1] - sorter[day2];
});


const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const groupByFrom = groupBy("from");
const groupedData = groupByFrom(data);
let finalStr = '';

Object.keys(groupedData).forEach((key) => {
  const curGrp = groupedData[key];
  if (curGrp.length > 1) {
    finalStr += '\n';
    finalStr += `${curGrp[0].day} - ${curGrp[curGrp.length - 1].day}: `;
    finalStr += `${curGrp[0].from} - ${curGrp[0].to}`
  }
  else if (curGrp.length === 1) {
    finalStr += '\n';
    finalStr += `${curGrp[0].day}: `;
    finalStr += `${curGrp[0].from} - ${curGrp[0].to}`
  }
});

console.log('final output is: ', finalStr);