import './Instruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import ModalPage from './ModalPage';

const BubbleInst = () => {
  return (
    <div>
      <ModalPage flag={true} />
      <h1 className="custom-h1">Bubble Sort</h1>

      <div>
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <header className="major">
                {/* previously id="header" */}
                <a href="index.html" className="logo">
                  <strong>Bubble Sort Algorithm Introduction</strong> by
                  AlgoRythm
                </a>
              </header>

              <section id="banner">
                <div className="content">
                  <header>
                    <h1 className="custom-h1-inner">
                      Hi I'm the bubble sort algorithm!
                    </h1>
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
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif"
                    alt=""
                  />
                </span>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">What is a bubble sort?</h2>
                </header>
                <div className="features">
                  <article>
                    <span className="icon fa-gem">
                      <div className="custom-icon">
                        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                      </div>
                    </span>
                    <div clasclassNames="content">
                      <h3 className="custom-h3">
                        it's a way to sort data in a computer
                      </h3>
                      <p className="custom-p-title">
                        Computer do not understand human language so we had to
                        come up with ways to tell the computer how to do
                        something simple like sorting in a way that was easy and
                        intuitive.
                      </p>
                    </div>
                  </article>
                  <article>
                    <span className="icon fa-gem">
                      <div className="custom-icon">
                        <FontAwesomeIcon icon={faComment} size="2x" />
                      </div>
                    </span>
                    <div className="content">
                      <h3 className="custom-h3">
                        it's one of the most simple sorting algorithms
                      </h3>
                      <p className="custom-p-title">
                        Bubble sort gets its name because when we visualize, the
                        elements or "numbers" we are trying to sort "bubble up".
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">
                    Some more useful info on bubble sort
                  </h2>
                </header>
                <div className="posts">
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      1. Bubble sort get its name from the way it works
                    </h3>
                    <p className="custom-p-title">
                      When we visualize how bubble sort works, the elements or
                      "numbers" that we are trying to sort "bubble up", that is
                      to say that the smaller numbers end up at the bottom or
                      "at the beginning of the line" and the big numbers end up
                      at the "top" or "at the end of the line".
                    </p>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      2. Bubble sort works as follow
                    </h3>
                    <p className="custom-p-title">
                      Imagine that we have this sequence of numbers, 1,3,2,4,5.
                      we start by looking at the first number and we ask if the
                      number in front is smaller, if the number is smaller we
                      switch places and if it is bigger, we move forward. In
                      this example, 1 is smaller than 3 so we will move forward,
                      3 is bigger than 2 so we switch place, after switching
                      places our sequence is 1,2,3,4,5 and we are done! the
                      number "3" moved up or "bubbled up" until it was in the
                      right place. For a more visual and rich example, click the
                      button below!
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="BubbleSort_animation" className="button">
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

export default BubbleInst;
