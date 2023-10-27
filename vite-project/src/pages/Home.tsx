import { Component } from 'react';
import Search from '../components/Search';
import Cards from '../components/Cards';
import { HomeState } from '../types';

class Home extends Component<object, HomeState> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
      cards: [],
    };
  }

  componentDidMount() {
    this.getCards();
  }

  componentDidUpdate() {
    this.getCards();
  }

  async getCards() {
    let baseUrl = 'https://swapi.dev/api/vehicles/?page=1';
    const { search } = this.state;
    baseUrl = search
      ? `${baseUrl}&search=${search.split(' ').join('+')}`
      : baseUrl;

    fetch(baseUrl, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          search,
          cards: res.results,
        });
      })
      .catch((e) => e);
  }

  setSearch = this.setState.bind(this);

  render() {
    const { cards } = this.state;
    return (
      <>
        <Search setSearch={this.setSearch} cards={cards} />
        <Cards cards={cards} />
      </>
    );
  }
}

export default Home;
