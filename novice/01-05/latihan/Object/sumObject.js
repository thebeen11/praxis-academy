let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let jumlah in salaries) {
    sum += salaries[jumlah];
  }
  
  console.log(sum);
  