import { useEffect } from 'react';
import './Instruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import StickyButton from '../layout/StickyButton';

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
      <StickyButton customStyle="modal-btn" />
      <h1 class="custom-h1">Stacks</h1>

      <div>
        <div id="wrapper">
          <div id="main">
            <div class="inner">
              <header className="major">
                {/* previously id="header" */}
                <a href="index.html" className="logo">
                  <strong>Stack Introduction</strong> by AlgoRythm
                </a>
              </header>

              <section id="banner">
                <div class="content">
                  <header>
                    <h1 className="custom-h1-inner">Hi I'm the stack</h1>
                    <FontAwesomeIcon
                      className="custom-p"
                      icon="coffee"
                      size="xs"
                    />
                    <p class="custom-p">by AlgoRythm</p>
                  </header>
                </div>
                <span class="image object">
                  <img
                    className="custom-img"
                    src="https://media.giphy.com/media/hUA5JLuHW7kTDQMy7f/giphy.gif"
                    alt=""
                  />
                </span>
              </section>

              <section>
                <header class="major">
                  <h2 class="custom-h2">What is a Stack?</h2>
                </header>
                <div class="features">
                  <article>
                    <span class="icon fa-gem">
                      <div className="custom-icon">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                      </div>
                    </span>
                    <div class="content">
                      <h3 className="custom-h3">it's a form of storage</h3>
                      <p class="custom-p-title">
                        Computers use stacks to store information. Just how you
                        would put away your books on a table "stacked" on top of
                        each other.
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section>
                <header class="major">
                  <h2 class="custom-h2">Why do we call it stack?</h2>
                </header>
                <div class="posts">
                  <article>
                    <a href="#" class="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      1. It's in the nature of how it works
                    </h3>
                    <p class="custom-p-title">
                      When we insert an "element" into the stack to "store" it,
                      that element gets stored at the bottom. So, if we insert
                      another element after that first one, the second element
                      will be place on top of the first element, hence, the
                      elements will be "STACKED" on top of each other.
                    </p>
                  </article>
                  <article>
                    <a href="#" class="image">
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
                    <p class="custom-p-title">
                      This is how we visualize a stack. For a more detail
                      explanation click the button below!
                    </p>
                    <ul class="actions">
                      <li>
                        <a href="Stacks_animation" class="button">
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
