//Recta должен находиться в области видимости JSX-файла
import Recta from './recta';
import RectaDom from './recta-dom';
import Counter from './counter';

// Функциональный компонент
const Greeting = ({ name }) => <p>Привет, {name}!</p>;

const foods = [
  'Две мясные котлеты гриль',
  'Специальный соус, сыр',
  'Огурцы, салат и лук',
  'Всё на булочке с кунжутом'
];

const App = (
  <div>
    <h1 className="primary">Да здравствует Recta!</h1>
    <p>Самостоятельная реализация React</p>
    <Greeting name={'Recta'} />
    <Counter />
    <h4>Сегодня в меню:</h4>
    <ul>
      {foods.map(food => (
        <li>{food}</li>
      ))}
    </ul>
  </div>
);

RectaDom.render(App, document.getElementById('root'));
