import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {
	constructor(props){
		super(props)
			this.state = {
				albums: []
			};
	};

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => this.setState({albums: response.data}));
	}

	renderAlbums(){
		const { albums } = this.state
		return albums.map((album) =>
			<AlbumDetail key={album.title} album={album}/>
		);
	}

	render(){
		return(
			<View style={{flex:1}}>
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>
			</View>
		)
	}
}
