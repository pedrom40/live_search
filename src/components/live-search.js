import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters
    }
  };

  setSearchTerm(term) {

    let characters = [];

    this.props.characters.map( character => {
      if (character.name.search(term) !== -1) {
        return characters.push(character);
      }
    });

    this.setState({
      characters: characters
    })
  };

  render() {
    return  <div className="live-search">
              <SearchForm onChange={value => this.setSearchTerm(value)}/>
              <CharacterList characters={this.state.characters}/>
            </div>
  };
}
