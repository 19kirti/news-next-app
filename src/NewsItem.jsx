import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (

<div className="card" >

<div className="container" style={{display:'flex', justifyContent:'flex-start', position:'absolute', left:'0'}}>
    <span class="badge rounded-pill bg-danger"> {source}</span>
    </div>

  <img src={!imageUrl ? "https://media.licdn.com/dms/image/D4D12AQFnxA9FWojbRQ/article-cover_image-shrink_720_1280/0/1671444196376?e=2147483647&v=beta&t=6mZadDpPRsw80VVF-HoCtNRnPdUXLuS-eyQVh58qDt4" : imageUrl } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5> 
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">Last updated by {!author? "Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

    )
  }
}

export default NewsItem
