import {Component} from "react";
import style from './style.css';

class CardNota extends Component{
	render(){
		return (
					<section className="card-nota">
                <header>
                  <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
          </section>
			)
	}
}

export default CardNota;