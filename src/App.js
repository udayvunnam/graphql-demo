import React from 'react';

import Flip from './components/Flip';
import initialData from './initialData';
import './styles.css';

export default function App() {
  const [flipped, flip] = React.useState('');

  return (
    <div className="App">
      <main>
        {initialData.map(classData => (
          <Flip
            key={classData.type}
            flip={() => {
              flip(classData.type);
            }}
            Front={() => (
              <div
                style={{
                  backgroundImage: `url(${classData.img})`,
                  height: '100%'
                }}
              >
                <h2 className="title">{classData.type}</h2>
              </div>
            )}
            Back={() => (
              <div className="List">
                {classData.animals.map(animal => (
                  <div className="List__item" key={animal.name}>
                    {animal.name}
                  </div>
                ))}
              </div>
            )}
            flipped={classData.type === flipped}
          />
        ))}
      </main>
    </div>
  );
}
