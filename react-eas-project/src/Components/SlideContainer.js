import React from 'react';
import ButtonContainer from './ButtonContainer';
import PropTypes from 'prop-types';

class SlideContainer extends React.Component {
  render() {
    return (
      <div className="content-container">
        <h1 className="topic-header content-items">{this.props.slides[this.props.pageCount].title}</h1>
        {this.props.slides[this.props.pageCount].text.map((paragraph) => (
          <p 
            key={this.props.slides[this.props.pageCount].text.indexOf(paragraph)} 
            className="content-items">
            {paragraph}
          </p>
        ))}
        <img 
          className="topic-image content-items"
          src={require("../" + this.props.slides[this.props.pageCount].image)}
          alt="please work"
        />
        <ButtonContainer 
          pageCount={this.props.pageCount} 
          changeInfo={this.props.changeInfo}
        />
      </div>
    );
  }
}

SlideContainer.propTypes = {
  slides: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired
}

export default SlideContainer;