import { useEffect } from 'react';
import './Instruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import ModalPage from './ModalPage';
import Notes from './Notes';

const StackInst = () => {
  // useEffect(() => {
  //   const changeIndex = () => {
  //     const element = document.querySelector('.main-container');
  //     element.style.zIndex= -1;
  //     //console.log(element.style.zIndex);
  //   };
  //   changeIndex();

  // }, []);

  return (
    <div className="front">
      <ModalPage flag={true}>
        <Notes />
      </ModalPage>
      <h1 className="custom-h1">Stacks</h1>

      <div>
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <header className="major">
                {/* previously id="header" */}
                <a href="index.html" className="logo">
                  <strong>Stack Introduction</strong> by AlgoRythm
                </a>
              </header>

              <section id="banner">
                <div className="content">
                  <header>
                    <h1 className="custom-h1-inner">Hi I'm the stack</h1>
                    <FontAwesomeIcon
                      className="custom-p"
                      icon="coffee"
                      size="xs"
                    />
                    <p className="custom-p">by AlgoRythm</p>
                  </header>
                </div>
                <span className="image object">
                  <img
                    className="custom-img"
                    src="https://media.giphy.com/media/hUA5JLuHW7kTDQMy7f/giphy.gif"
                    alt=""
                  />
                </span>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">What is a Stack?</h2>
                </header>
                <div className="features">
                  <article>
                    <span className="icon fa-gem">
                      <div className="custom-icon">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                      </div>
                    </span>
                    <div className="content">
                      <h3 className="custom-h3">it's a form of storage</h3>
                      <p className="custom-p-title">
                        Computers use stacks to store information. Just how you
                        would put away your books on a table "stacked" on top of
                        each other.
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">Why do we call it stack?</h2>
                </header>
                <div className="posts">
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      1. It's in the nature of how it works
                    </h3>
                    <p className="custom-p-title">
                      When we insert an "element" into the stack to "store" it,
                      that element gets stored at the bottom. So, if we insert
                      another element after that first one, the second element
                      will be place on top of the first element, hence, the
                      elements will be "STACKED" on top of each other.
                    </p>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      2. It's a known word and easy to visualize
                    </h3>
                    <img
                      className="custom-img"
                      src="assets/images/stack.png"
                      alt=""
                    />
                    <p className="custom-p-title">
                      This is how we visualize a stack. For a more detail
                      explanation click the button below!
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="Stacks_animation" className="button">
                          Click Here To Learn More
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackInst;
