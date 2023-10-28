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
      needUpdate: false,
    };
  }

  componentDidMount() {
    this.getCards();
  }

  componentDidUpdate() {
    const { needUpdate } = this.state;
    if (needUpdate) {
      this.getCards();
    }
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
          needUpdate: false,
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
