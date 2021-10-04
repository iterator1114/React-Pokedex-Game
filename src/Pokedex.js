import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

import { Utils } from './util/utils';

class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                <p className={this.props.isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{this.props.isWinner ? 'Winning hand!' : 'Losing hand!'}</p>
                <p className='Pokedex-exp'>Total Experience: {this.props.exp} </p>
                <div className='Pokedex-cards'>
                    {this.props.Pokemon.map((p) => (
                        <Pokecard key={Utils.makeid(10)} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div >
        )
    }
}

export default Pokedex;
