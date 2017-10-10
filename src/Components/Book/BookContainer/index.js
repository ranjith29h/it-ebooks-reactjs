import React, {Component} from 'react';

import BookList from './BookList';
import {SearchBookApi} from '../../../itebooksApi';

export default class BookContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorHandel: false,
      activeOne: null,
      total: null,
      tearm: null,
      pageNo: 0,
      showLoadMore: false,
      showThatsall:false
    }
    this.onBookSearch = this.onBookSearch.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  onBookSearch(term) {
    SearchBookApi(term).then((result) => {
      var resultBook = JSON.parse(result);

      this.setState({term: term, books: resultBook.Books, total: resultBook.Total, pageNo: 1, showLoadMore: true});

    }, (error) => {

      this.setState({errorHandel: true, activeOne: "show"});

      setTimeout(() => {
        this.setState({activeOne: null});
      }, 3000);

    });

  }

  loadMore(){

    let url = `${this.state.term}/page/${this.state.pageNo + 1}`;

    SearchBookApi(url).then((result) => {
      var resultBook = JSON.parse(result);
      if(resultBook.Total > 0){
          this.setState({books: [...this.state.books,...resultBook.Books], total: resultBook.Total, pageNo: this.state.pageNo + 1, showLoadMore: true});
      } else {
        this.setState({showLoadMore: false,showThatsall:true});
      }

    }, (error) => {

      this.setState({errorHandel: true, activeOne: "show"});

      setTimeout(() => {
        this.setState({activeOne: null});
      }, 3000);

    });




  }

  render() {

    return (
      <div className="appContainer">

        {this.state.errorHandel
          ? <div id="snackbar" className={this.state.activeOne}>Some error has occured! No Internet Service</div>
          : null
        }

        <BookList
          onSearchChange={(term) => this.onBookSearch(term)}
          onLoadMore={() => this.loadMore()}
           bookHouse={this.state.books}
           showLoadMore={this.state.showLoadMore}
           showThatsall={this.state.showThatsall}
         />

      </div>
    );
  }
}
