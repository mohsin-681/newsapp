import React, { Component } from 'react'

export class NewsItem extends Component {
  render(props) {
    let {newsurl, title, description, imageUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "85%", zIndex: "1"}}>{source}</span>        
        <img src={imageUrl?imageUrl:"https://img.jagranjosh.com/images/2023/July/572023/GH1_11zon.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} at {new Date(date).toUTCString()}</small></p>
            <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
