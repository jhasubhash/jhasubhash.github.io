
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/AboutMe.css';

export const AboutMe = () => {
    return (
        <div className="aboutMeBlock">
          <Typist avgTypingDelay={60} cursor={{element:'▌'}}>
            Hello World !!! <br/>My name is Subhash Jha. I am a software developer by profession. Currently working as computer scientist @Adobe Bangalore. My work is mostly around C++, JS, and WebAssembly.
            In my free time, I like putting paint on canvas.My name is Subhash Jha.
          </Typist>
        </div>
    )
}