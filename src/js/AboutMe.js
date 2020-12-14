
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/AboutMe.css';

export const AboutMe = () => {
    return (
        <div>
        <div className="aboutMeBlock">
          <Typist avgTypingDelay={60} cursor={{element:'▌'}}>
            Hello World !!! My name is Subhash Jha. I am a software developer by profession. Currently working as a computer scientist @Adobe Bangalore. My work is mostly around C++, JS, and WebAssembly.
            In my free time, I like putting paint on canvas.
          </Typist>
        </div>
        </div>
    )
}