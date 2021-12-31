import * as React from "react";


export default function Export() {
  // Content from: https://glitch.happyfox.com/kb/article/27-can-i-export-my-project-to-github/
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        Export this site to GitHub
      </h1>
      <p>
        To export your project's code to GitHub:
      </p>
      <ol>
        <li>
          In the Project Editor view, click Tools on the lower-left side of the page.
        </li>
        <li>
          In the Tools menu, click Import and Export.
        </li>
        <li>
          If a message appears that says Connect your GitHub account, click Connect to GitHub.
        </li>
        <li>Now, click Export to GitHub.</li>
        <li>In the popup, enter the GitHub repo that you want to use, and then click OK.</li>
      </ol>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        <a href="https://glitch.com/">Glitch</a>.
      </p>
    </div>
  );
}
