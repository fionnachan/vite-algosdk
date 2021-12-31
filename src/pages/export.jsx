import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


export default function Export() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        Export this site to GitHub
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        Welcome to the Glitch React starter, where you can instantly create a
        React site that's fully customizable.
      </p>
      <p>
        <em>
          If you're completely new to React, learning the{" "}
          <a href="https://reactjs.org/docs/hello-world.html">main concepts</a>{" "}
          will get you off to a great start. You'll also see comments and links
          to supporting resources throughout the code.
        </em>
      </p>
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
        {" "}
        The Glitch community is glad to welcome you, and the Internet is better
        when it's made by real people. We can't wait to see what you create!
      </p>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        <a href="https://glitch.com/">Glitch</a>.
      </p>
    </div>
  );
}
