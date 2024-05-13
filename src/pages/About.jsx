import React from "react";
import { Wrapper } from "../components/Todo";

export default function About() {
  return (
    <div>
      <Wrapper>
        <h1>About this Web-Application</h1>

        <p>This web application is built in one-day.</p>
        <p>
          while we were watching random youtube videos, I went through these
          videos like React Hooks in 100 mins.
        </p>
        <p>
          so I built this web-app using all the hooks that I know, to test my
          knowledge on hooks
        </p>
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useContext</li>
          <li>
            Written some more custom hooks like usememomory (localstorage)
          </li>
        </ul>
      </Wrapper>
    </div>
  );
}
