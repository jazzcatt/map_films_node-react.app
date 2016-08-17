import React from 'react';
import Movie_elem from './movie-elem';

export default class Container extends React.Component {
	render() {
		let elems = this.props.data.map((e, i) => {
			return <Movie_elem id={e.id} title={e.Title} year={e['Release Year']} key={i} getId={this.props.getId}/>
		})
		return	<div>
				{elems}
				</div>
	}
}