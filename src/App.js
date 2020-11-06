import React from "react";

// Example of loading a remote component
// const RemoteApp1 = React.lazy(() => import("mfe1/App"));
// const RemoteApp2 = React.lazy(() => import("mfe2/App"));


const App = () => (
  <div>
    <h1>Prototype Composite UI</h1>
    <p>Nothing included yet. Include components in "src/App.js" of your composite UI service</p>
    {/* <h2>MFE-1</h2>
    <div style={{width: "1000px"}}>
      <React.Suspense fallback="Loading App">
        <RemoteApp1  />
      </React.Suspense>
    </div>
    <h2>MFE-2</h2>
    <div style={{width: "1000px"}}>
      <React.Suspense fallback="Loading App">
        <RemoteApp2  />
      </React.Suspense>
    </div> */}
  </div>
);

export default App;
