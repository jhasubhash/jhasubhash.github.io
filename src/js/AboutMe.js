
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/App.css';

export const AboutMe = () => {
    return (
        <div>
        <div className="textBlock">
          <Typist avgTypingDelay={50}>
            I am a software developer, working as a computer scientist @Adobe Bangalore. My work currently revolves around C++, JS, and WebAssembly.
            In my free time, I like putting paint on canvas.
          </Typist>
        </div>
        </div>
    )
}