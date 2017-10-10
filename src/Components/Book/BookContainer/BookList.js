import React, {Component} from 'react';
import BookSearch from './BookSearch';
import BookListItem from './BookListItem';

export default class BookList extends Component {

  bookItems() {
    return this.props.bookHouse.map((book) => {
      return <BookListItem key={book.ID} bookData={book}/>
    })
  }

  render() {

    if (!this.props.bookHouse) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <div className="addon">
          <BookSearch onSearchChange={this.props.onSearchChange}/>
          <ul>
            {this.bookItems()}
          </ul>
        </div>
        <div>
          {this.props.showLoadMore
            ? <div className="loadMore">
                <button
                  onClick={() => {this.props.onLoadMore()}}
                  className="btn btn-primary loadBtn">Load More</button>
              </div>
            : null
          }
          {this.props.showThatsall
            ? <div className="loadMore">
                <h6>That's all, folks!!</h6>
              </div>
            : null
          }
        </div>
      </div>
    );
  }
}
