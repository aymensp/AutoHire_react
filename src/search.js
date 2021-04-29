const filterObjectArray = require('filter-object-array');

const arr = [
  {
    car: 'toyota',
    color: 'blue',
    year: 2010,
    trans: 'auto',
    warrantyEnd: '2013',
  },
  {
    car: 'toyota',
    condition: 'good',
    color: 'green',
    year: 2010,
    trans: 'manual',
    warrantyEnd: '2013',
  },
  {
    car: 'ford',
    color: 'yellow',
    year: 2012,
    trans: 'auto',
    warrantyEnd: '2015',
  },
];

const diffDataType = async () => {
  const filtersDiffType = {
    warrantyEnd: 2015,
  };
  
   console.log(await filterObjectArray({ array: arr, objFilter: filtersDiffType, ignoreDataType: true }));
};