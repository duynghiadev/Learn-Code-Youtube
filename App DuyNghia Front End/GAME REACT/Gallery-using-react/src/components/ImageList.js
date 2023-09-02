import React from 'react';
import {images} from '../fixtures';
import ImageListItem from './ImageListItem';

export default class ImageList extends React.Component{
  renderImageListItem(){
    return images.map((image)=>{
      return <ImageListItem key={image.id} image={image}/>
    });
  }
  render(){
    return (
      <div>
        {this.renderImageListItem()}
      </div>
    );
  }
}
