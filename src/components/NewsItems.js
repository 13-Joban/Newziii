import React from 'react'
import { Component } from 'react';
// import PropTypes from 'prop-types'


export default class NewsItems extends Component {
  render() {
      let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
      return (
          <div className="my-3">
              <div className="card">
                  <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      position: 'absolute',
                      right: '0'
                  }
                  }>

                      <span className="badge rounded-pill bg-danger"> {source} </span>
                  </div>

  <img src={imageUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
   
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="">By {author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
  
  </div>
  </div>
</div>
 )
}
}



