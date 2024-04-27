import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor(){
        super();
        this.state={
            articles : this.articles,
            laoding : false
        }
    }
    
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    
    return (
    <div className="card" style={{width: "20rem"}}>
        <img src={imageUrl?imageUrl : "https://www.hollywoodreporter.com/wp-content/uploads/2024/01/01_Celestial-Park-Attractions.jpg?w=1024"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-info">Read More</a>
          <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>

        </div>
    </div>
    )
  }
}

export default NewsItem 