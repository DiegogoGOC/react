import './App.css';
import Acceuil from './page/acceuil';
import Apropos from './page/a-propos';
import Realisation from './page/realisation';
import Blogs from './page/blog';
import Mention from './page/mention-legales';
import Services from './page/services';
import Tete from './page/tete';
import Pied from './page/pied';
import Contact from './page/contact';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Tete/>

      <Pied/>

    </div>
  );
}

export default App;
