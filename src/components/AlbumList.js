import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component{
    constructor(props){
        super(props);
          this.state = {
              albums : [], 
          }
    }

    renderAlbums(){
          return this.state.albums.map(album => 
             <AlbumDetail key={album.title} details={album} />
          )
    }


    componentWillMount(){
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => {
                 if(!res) return Promise.reject();
                  return this.setState({albums:res.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}