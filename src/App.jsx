import { useState } from "react";
import './App.css'; // Import the CSS file

function App() {

  const [accordianClicked, setAccordianClicked] = useState([]);

  const array = [
    { id: 1, header: 'header 1', content: 'content 1' },
    { id: 2, header: 'header 2', content: 'content 2' },
    { id: 3, header: 'header 3', content: 'content 3' }
  ];

  const handleOnClick = (id) => {
    if (!accordianClicked.includes(id)) {
      setAccordianClicked([...accordianClicked, id]);
    } else {
      setAccordianClicked(accordianClicked.filter(val => val !== id));
    }
  };

  return (
    <div className="accordion-container"> {/* Added container class */}
      {array.map((obj) => {
        const isActive = accordianClicked.includes(obj.id); // Check if active

        return (
          <div key={obj.id} className="accordion-item"> {/* Added item class */}
            <div 
              className={`accordion-header ${isActive ? 'active' : ''}`} // Added header class and active class
              onClick={() => handleOnClick(obj.id)}
            >
              {obj.header}
            </div>
            {isActive && <div className="accordion-content">{obj.content}</div>} {/* Added content class and conditional rendering */}
          </div>
        );
      })}
    </div>
  );
}

export default App;