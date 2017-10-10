import React,{Component} from 'react';

export default class BookSearch extends Component{

  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
        <div className="input-group form-search">
             <input type="text"
               className="form-control"
               value={this.state.term}
                placeholder="Search for..."
                aria-label="Search for..."
                onChange={event => this.setState({term:event.target.value})}
               />
             <span className="input-group-btn">
               <button
                  className="btn btn-primary search-btn"
                  onClick={this.handleClick}
                   type="button">
                   Go!
                 </button>
             </span>
        </div>
    );
  }

  handleClick(){
    this.props.onSearchChange(this.state.term);
  }

}
