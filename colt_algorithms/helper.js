
// not the best way to check performance
const checkPerformance = (fn, n) => {
  let t1 = performance.now();
  fn(n);
  let t2 = performance.now();
  return (t2 - t1) / 1000;
};


module.exports = {
  checkPerformance
}