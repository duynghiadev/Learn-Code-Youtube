import React from 'react';
import Session from '../StoreImageId';
import {History} from '../routes/routes';
import ImageRender from './ImageRender';
import PropTypes from 'prop-types';

export default class ImageListItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      image:{},
      selected:false,
      id:'random'
    };
  }
  selectImage(){
    Session.set(this.props.image.id);
    if (Session.get()) {
      History.replace(`/gallery/${Session.get()}`);
      this.setState({image:this.props.image,selected:true,id:this.props.image.id});
    }
  }
  renderModal(){
    if (Session.get()===this.state.image.id) {
      return <ImageRender image={this.state.image} selected={this.state.selected}/>;
    }
    else {
      return undefined;
    }
  }
  render(){
    return (
      <div onClick={this.selectImage.bind(this)}>
        <img className="image" alt={this.props.image.title} src={this.props.image.src}/>
        <p>{this.props.image.title}</p>
        {this.renderModal()}
      </div>
    );
  }
}

ImageListItem.propTypes={
  image:PropTypes.object.isRequired
};
