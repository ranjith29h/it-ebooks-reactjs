import React, {Component} from 'react';

export default class BookListItem extends Component {
  render() {
    const {Title, Image, Description} = this.props.bookData;
    return (
      <li className="clearfix">
        <a target="_blank">
          <img className="round" src={Image} alt={Title}/>
          <div className="legend-info">
            <p className="book-title">{Title}</p><hr/>
            <p className="book-desc">{Description}</p>
          </div>
        </a>
      </li>
    );
  }
}
