import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "General",
   
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
   
  }

    
    constructor(props){
        super(props);
        console.log("constructor from news component");
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults : 70
        }
        document.title = `${this.props.category} - NEWS.next | Top Headlines`;
    }

    async componentDidMount(){
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead939c27d884beb8d2c3337777775a0&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
          loading: false
        });
        this.props.setProgress(100);
    }

    handlePrevClick = async () => {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead939c27d884beb8d2c3337777775a0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(50);
      console.log(parsedData);

      this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles,
        loading : false,
      })
      this.props.setProgress(100);

    }

    handleNextClick = async () => {

      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ead939c27d884beb8d2c3337777775a0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(50);
      console.log(parsedData);

      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        loading : false,
      })
      this.props.setProgress(100);
    }

    }

  render() {
    return (
      <div className="container my-3">
        <h2 style={{marginTop: '90px', marginBottom: '40px'}}>NEWS.next - Top {this.props.category} Headlines</h2>

        {this.state.loading && <Loading/>}

        <div className="row">

            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem  title = {element.title} description = {element.description} imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>

            })}

        
        </div>

        <div className="container my-3 d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} class="btn btn-dark"> &larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} class="btn btn-dark">Next &rarr; </button>
        </div>

      </div>
    )
  }
}

export default News
