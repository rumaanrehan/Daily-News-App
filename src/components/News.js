import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super();
    console.log("constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      noofpages: 20,
    };
    document.title = `${props.category}-NewsMonkey`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4a1c53da59e4c458249f2dae2487035&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    console.log("cdm");
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("previous");
    console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4a1c53da59e4c458249f2dae2487035&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch(url);
    // let parsedata = await data.json();
    // console.log(parsedata);

    // this.setState({
    //     page : this.state.page-1,
    //     articles: parsedata.articles,
    //     loading : false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("next");
    // if(!Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page+1){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d4a1c53da59e4c458249f2dae2487035&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true})
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     console.log(parsedata);

    //     this.setState({
    //         page : this.state.page+1,
    //         articles: parsedata.articles,
    //         loading : false
    //     })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "40px 0px" }}>
          NewsMonkey Headlines
          {this.state.loading && <Spinner />}
        </h2>
        <div className="row">
          {console.log("renedr")}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col md-4" key={element.url}>
                  {/* if(element.title!==null && element.description==null && element.urlToImage==null) */}
                  <NewsItem
                    title={element.title ? element.title : null}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : null
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}

          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                Math.ceil(this.state.totalResults / this.props.pageSize) <
                this.state.page + 1
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

