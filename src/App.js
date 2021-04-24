function App() {
  const api = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  const getData = () => {
    return fetch(api,{method:"GET"})
        .then(response => {
            response.json();
        })
        .then(data => console.log(data))
        .catch(err => {
            console.log(err);
        })
}
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* {getData()} */}
    </div>
  );
}

export default App;
