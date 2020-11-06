import React from "react";

const RemoteApp1 = React.lazy(() => import("mfe_test/App"));


const App = () => (
  <div>
    <h1>Prototype Composite UI</h1>
    <h2>MFE-1</h2>
    <div style={{width: "1000px"}}>
      <React.Suspense fallback="Loading App">
        <RemoteApp1  />
      </React.Suspense>
    </div>
  </div>
);

export default App;