import React,{ Component } from 'react';

export default class AppHeader extends Component {
	render(){
		return (
			<nav className="navbar navbar-dark bg-primary mb-3">
			    <div className="flex-row d-flex">
			        <a className="navbar-brand" title="It ebooks">IT Ebooks</a>
			    </div>
			</nav>
		);
	}
}
