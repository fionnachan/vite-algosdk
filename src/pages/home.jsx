import * as React from "react";
import algosdk from 'algosdk';
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });
  const indexer = new algosdk.Indexer("","https://algoindexer.algoexplorerapi.io/", "");
  indexer.lookupAssetByID(384303832).do()
    .then(response => {

      console.log("response", response)
    });
  return (
    <>
      <h1 className="title">Hello!</h1>
      <div className="navigation">
        <button className="btn--click-me">
          Psst, click me
        </button>
      </div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is a <strong>Vite + Algorand JS SDK</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}
