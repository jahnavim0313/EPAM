function rentalCarCost(d) {
  if(d<3) return d * 40;
  else if(7>d && d>=3) return (d*40 -20);
  else(d>=7) return (d*40 -50);
}