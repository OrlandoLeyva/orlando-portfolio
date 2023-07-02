import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import cssIcon from '../assets/img/css-icon.svg'
import HtmlIcon from '../assets/img/html-icon.svg'
import javaScriptIcon from '../assets/img/js-icon.svg'
import reactIcon from '../assets/img/react-icon.svg'
import gitIcon from '../assets/img/git-icon.svg'
import colorSharp from "../assets/img/color-sharp.png"
import { Git } from "react-bootstrap-icons";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tech Stack</h2>
                        <p>As a Frontend Developer I like to state up to date with the best technologies and best practices. I actively seek out opportunities to expand my knowledge and skills, ensuring that I deliver modern and efficient solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={HtmlIcon} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={cssIcon} alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={javaScriptIcon} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={gitIcon} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
