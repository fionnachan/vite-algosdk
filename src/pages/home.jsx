import * as React from "react";
import algosdk from 'algosdk';

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/
export default function Home() {
  const runIndexerMethods = async () => {
    const token  = "";
    const server = "https://algoindexer.algoexplorerapi.io/";
    const port   = "";
    const indexer = new algosdk.Indexer(token, server, port);
    
    const assetId = 384303832;
    const address = "XBYLS2E6YI6XXL5BWCAMOA4GTWHXWENZMX5UHXMRNWWUQ7BXCY5WC5TEPA";
    
    const accountInfo = await indexer.lookupAccountByID(address).do();
    console.log("lookupAccountByID response:", accountInfo);
    const assetInfo = await indexer.lookupAssetByID(assetId).do();
    console.log("lookupAssetByID response:", assetInfo);
  }
  React.useEffect(() => {
    runIndexerMethods();
  }, [runIndexerMethods]);
  return (
    <>
      <h1 className="title">Hello!</h1>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is a <strong>Vite + Algorand JS SDK</strong> project. It comes with the polyfill for <code>Buffer</code>,{" "} 
          <code>process</code>, <code>stream-browserify</code>,{" "} 
          <code>browserify-zlib</code>, <code>util</code>, and <code>path-browserify</code> to allow Algorand JS SDK to work. You can use
          it to build your own app. On this page, the indexer methods are called and the responses are logged.
        </p>
        <p>
          Open your console to see the results!
        </p>
      </div>
    </>
  );
}
