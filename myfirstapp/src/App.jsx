function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello Adolph Makhado!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()} ( South African time )</h2>
    </div>
  );
}

export default App;