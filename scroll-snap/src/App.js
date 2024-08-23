import "./App.css";
import { useEffect } from "react";
// eslint-disable-next-line
import createScrollSnap from "scroll-snap";

function App() {
  useEffect(() => {
    createScrollSnap(document.getElementById("container"), {
      snapDestinationX: "0%",
      snapDestinationY: "100%",
    });
  });
  return (
    <div id="container">
      <div className="page first-page">
        <div>I</div>
      </div>
      <div className="page second-page">
        <div>II</div>
      </div>
      <div className="page third-page">
        <div>III</div>
      </div>
      <div className="page fourth-page">
        <div>IV</div>
      </div>
    </div>
  );
}

export default App;
