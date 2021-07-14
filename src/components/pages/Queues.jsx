import { useState } from 'react';
import './Queues.css';


var color = "";
var c = 0;
var colors = [];
var colorCounter = 0;

const Queues = () => {
  function getRandomColor() {
    var color = "#";

    for (var i = 0; i < 3; i++) {
      var part = Math.round(Math.random() * 255).toString(16);

      color += part.length > 1 ? part : "0" + part;
    }

    return color;
  }

  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [status, setStatus] = useState(false);

  const handleClick = async () => {
    setStatus(true);
    color = getRandomColor();
    colors.push(color);

    var element = document.getElementById(items[c]);
    element.classList.add("show");
    element.style.backgroundColor = colors[colorCounter];
    c++;
    colorCounter++;
    await new Promise((r) => setTimeout(r, 1200));
    setStatus(false);
  };

  const handleLeave = async () => {
    setStatus(true);
    if (c != 0) {
      colors.splice(0, 1);
      colorCounter--;
      var element = document.getElementById(items[0]);
      element.classList.remove("show");
      element.style.backgroundColor = "";
    }

    c--;
    await new Promise((r) => setTimeout(r, 1200));
    changePosition();
  };

  const changePosition = async () => {
    if (c != 0) {
      let n = 2;
      for (let i = 0; i < c; i++) {
        let element = document.getElementById(n);
        element.classList.remove("show");
        element.style.backgroundColor = "";
        let newElement = document.getElementById(n - 1);
        await new Promise((r) => setTimeout(r, 1000));
        newElement.classList.add("show");
        newElement.style.backgroundColor = colors[i];
        n++;
      }
    }
    setStatus(false);
  };

  return (
    <div className="q-top">
      <button className="ion-margin themed-btn" onClick={handleClick} disabled={status}>
        Insert
      </button>
      <button className="ion-margin themed-btn" onClick={handleLeave} disabled={status}>
        Leave
      </button>
      <div className="q-top-2">
        <div className="q-reverse">
          {items.map((item, itemIndex) => {
            return (
              <div
                // style={{ backgroundColor: item.color }}
                key={itemIndex}
                className="q-block"
                id={item}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Queues;