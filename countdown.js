const countdown = (num) => {
  if (num <= 0) {
    console.log('Done');
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};

countdown(5);
