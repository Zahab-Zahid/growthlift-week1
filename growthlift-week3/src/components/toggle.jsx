import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ marginTop: "30px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <p style={{ marginTop: "15px" }}>
          This content is now visible!
        </p>
      )}
    </div>
  );
}

export default Toggle;