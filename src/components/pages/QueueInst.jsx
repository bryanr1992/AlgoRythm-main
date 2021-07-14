import './Instruction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const QueueInst = () => {

  return (
    <div>
      <h1 className="custom-h1">Queues</h1>

      <div>
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <header className="major">
                {/* previously id="header" */}
                <a href="index.html" className="logo">
                  <strong>Queues Introduction</strong> by AlgoRythm
                </a>
              </header>

              <section id="banner">
                <div className="content">
                  <header>
                    <h1 className="custom-h1-inner">Hi I'm the Queue</h1>
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
                    src="assets/images/qani2.gif"
                    alt=""
                  />
                </span>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">What is a queue?</h2>
                </header>
                <div className="features">
                  <article>
                    <span className="icon fa-gem">
                      <div className="custom-icon">
                        <FontAwesomeIcon icon={faArrowRight} size="2x" />
                      </div>
                    </span>
                    <div className="content">
                      <h3 className="custom-h3">It's a line!</h3>
                      <p className="custom-p-title">
                        The simplest way to describe the queue it's a waiting
                        line. We wait in line for a movie, we wait at a line to
                        buy food or at a store's check-out.
                      </p>
                    </div>
                  </article>
                </div>
              </section>

              <section>
                <header className="major">
                  <h2 className="custom-h2">More about Queues!</h2>
                </header>
                <div className="posts">
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      1. A queue is also called a collection of items
                    </h3>
                    <p className="custom-p-title">
                      Every time we add a new item to the queue we do it from
                      the back or
                      <strong>"REAR"</strong> and when an item is removed or
                      leaves we do it from the <strong>"FRONT."</strong>
                    </p>
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      2. The ordering of the queue has a name
                    </h3>
                    <p className="custom-p-title">
                      We call it <strong>"FIFO"</strong>, first-in first-out.
                      Just like a line to enter a movie theater, if you are the
                      first person on the line, you will be the first person to
                      enter watch the movie.
                    </p>
                    <img className="image custom-img" src="assets/images/Queue.png" alt="" />
                  </article>
                  <article>
                    <a href="#" className="image">
                      <img src="images/pic01.jpg" alt="" />
                    </a>
                    <h3 className="custom-h3">
                      3. Queues can also be use to make a schedule!
                    </h3>
                    <p className="custom-p-title">
                      There are tons of more stuff that a queue can do. They are
                      a bit too advanced for us to learn right now, however, we
                      will be learning them in the futre.{' '}
                      <strong>We are not done yet!</strong>
                      To learn how a queue works in a more fun way, click the
                      button below!
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="\Queue_animation" className="button">
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

export default QueueInst;
