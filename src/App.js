import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import SignUp from "./Components/SignUp.js";
import Plans from "./Components/Plans";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let plans = [
  {
    description: ["first plan the next line data "],
    imageUrl: "https://source.unsplash.com/1000x600/?workout",
  },
  {
    description: "second plan",
    imageUrl: "https://source.unsplash.com/1000x600/?gym,fitness",
  },
  {
    description: "third plan",
    imageUrl: "https://source.unsplash.com/1000x600/?fitness",
  },
];

function App() {
  return (
    <Router>
      <div className="App container">
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
