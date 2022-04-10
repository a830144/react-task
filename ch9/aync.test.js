test('the data is peanut butter', done => {
  function callback(data) {
    try {
      console.log(data);
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

function fetchData(callback){
  console.log("fetch data");
  callback("peanut butter");
}