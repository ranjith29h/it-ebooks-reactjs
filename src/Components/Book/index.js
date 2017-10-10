import React,{Component} from 'react';

import BookContainer from './BookContainer';

export default class Book extends Component {
  render(){
    return(
      <div className="container-fluid">
        <BookContainer />
      </div>
    );
  }
}
