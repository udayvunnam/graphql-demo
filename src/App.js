import React from 'react';
import Flip from './components/Flip';
import './styles.css';

const initialData = [
  {
    type: 'Mammal',
    img:
      'https://res.cloudinary.com/codebeast/image/upload/c_fill,h_400,q_50,w_400/v1584867791/Animal%20Classes/view-of-elephant-in-water-247431.jpg',
    animals: [
      {
        name: 'Dog'
      },
      {
        name: 'Horse'
      },
      {
        name: 'Antelope'
      },
      {
        name: 'Cat'
      },
      {
        name: 'Tiger'
      },
      {
        name: 'Zebra'
      },
      {
        name: 'Lion'
      },
      {
        name: 'Panter'
      }
    ]
  },
  {
    type: 'Bird',
    img:
      'https://res.cloudinary.com/codebeast/image/upload/c_fill,h_400,q_50,w_400/v1584867879/Animal%20Classes/shallow-focus-photography-of-green-yellow-and-blue-bird-2190209.jpg',
    animals: [
      {
        name: 'Chicken'
      },
      {
        name: 'Duck'
      }
    ]
  },
  {
    type: 'Reptile',
    img:
      'https://res.cloudinary.com/codebeast/image/upload/c_fill,h_400,q_50,w_400/v1584868136/Animal%20Classes/photo-of-a-snake-3280908.jpg',
    animals: [
      {
        name: 'Snake'
      }
    ]
  }
];

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
                <h2 className="title">
                  {classData.type}
                </h2>
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