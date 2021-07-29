import React, { useState } from 'react';
import ModalPage from './ModalPage';
import './Stack.css';

var color = '';
var aTitle = '';
var reverseItems = [];

const Stack = () => {
  // const randomColor = Math.floor(Math.random()*16777215).toString(16);
  //"#"+Math.random().toString(16).substr(2, 6)
  // document.body.style.backgroundColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;

  function getRandomColor() {
    var color = '#';

    for (var i = 0; i < 3; i++) {
      var part = Math.round(Math.random() * 255).toString(16);

      color += part.length > 1 ? part : '0' + part;
    }

    return color;
  }

  const [items, setItems] = useState([{}]);

  const [animate, setAnimate] = useState(false);

  const [input, setInput] = useState('');
  const [reverse, setReverse] = useState(false);

  function addItem(item) {
    if (items.length >= 8) {
      return;
    }

    const arr = [...items, item];
    setItems(arr);
    console.log(items);
  }

  const handleClick = () => {
    color = getRandomColor();
    const list = {
      title: '',
      color: color,
    };
    addItem(list);
  };

  const handleClick2 = () => {
    color = getRandomColor();
    console.log(input);
    const list = {
      title: input,
      color: color,
    };
    setInput('');
    addItem(list);
  };

  function pop() {
    if (items.length < 2) {
      return;
    }
    setAnimate(true);
    color = items[items.length - 1].color;
    aTitle = items[items.length - 1].title;
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== items.length - 1;
      });
    });

    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  const reverseWord = () => {
    if (items.length < 2) {
      return;
    }
    var newItem = items[items.length - 1];
    pop();

    if (reverse) {
      setTimeout(() => {
        reverseItems.push(newItem);
        console.log('Debug');
      }, 1000);
    } else {
      reverseItems.push(newItem);
      console.log('outside timeout');
    }
    // reverseItems.push(newItem)

    if (!reverse) {
      setTimeout(() => {
        setReverse(true);
      }, 2000);
    }
  };

  const filteredItems = items.filter((item, itemIndex) => {
    if (itemIndex >= 1 && itemIndex <= 8) {
      return item;
    } else {
      return '';
    }
  });

  return (
    <React.Fragment>
      <ModalPage />
      <div className="top">
        <button
          className=" mini ui primary button stack-btn"
          onClick={handleClick}
        >
          Push
        </button>
        <button className=" mini ui primary button stack-btn" onClick={pop}>
          Pop
        </button>
        <div className="ui input focus stack-input">
          <input
            className="stack-input"
            onChange={handleChange}
            value={input}
            name="word"
            placeholder="Type here"
            type="text"
          ></input>
        </div>
        <button
          onClick={handleClick2}
          class=" mini ui primary button stack-btn"
        >
          Push letter
        </button>
        <button
          onClick={reverseWord}
          className="mini ui primary button stack-btn"
        >
          Reverse
        </button>
      </div>

      <div className="reverse">
        {filteredItems.map((item, itemIndex) => {
          return (
            <div
              style={{ backgroundColor: item.color }}
              key={itemIndex}
              className="block"
            >
              {item.title}
            </div>
          );
        })}
        <div
          style={{ backgroundColor: color }}
          className={animate ? 'shown-block' : 'hidden-block'}
        >
          {aTitle}
        </div>
      </div>
      {reverse ? (
        <div>
          {reverseItems.map((item, itemIndex) => {
            return (
              <div
                style={{ backgroundColor: item.color }}
                key={itemIndex}
                className="horizontal-container"
              >
                {item.title}
              </div>
            );
          })}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Stack;
