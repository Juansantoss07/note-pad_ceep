import {Component} from 'react';
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'

class App extends Component {
  render(){
  return (
    <>
     <FormularioCadastro />
     <ListaDeNotas />
    </>
  );
  }
}
export default App;
