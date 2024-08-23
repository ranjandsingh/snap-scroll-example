import { useEffect } from "react";
import "./App.css";

// eslint-disable-next-line
import createScrollSnap from "scroll-snap";

function App() {
  useEffect(() => {
    const element = document.getElementById("container");
    createScrollSnap(
      element,
      {
        snapDestinationY: "100%",
        snapDestinationX: "0%",
      },
      () => console.log("snap")
    );
  }, []);
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
