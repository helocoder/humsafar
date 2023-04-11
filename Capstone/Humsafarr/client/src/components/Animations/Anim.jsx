import React from "react";
import lottie from "lottie-web";
import bgAnim from "../Animations/68683-travel.json";

function Anim() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: bgAnim,
      loop:true,
    });
  }, []);

  return (
    <div class="grid grid-flow-row">
      <div id="react-logo" />
    </div>
  );
}
export default Anim;