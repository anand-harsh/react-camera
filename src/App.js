import "./App.css";
import {Route, Routes} from "react-router-dom"
import Display from "./component/Display";
import Form from "./component/Form";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" className="child1" element={<Form/>}/>
        <Route path="/display" className="child2" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
