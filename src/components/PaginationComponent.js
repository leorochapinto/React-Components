import React from "react";

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 20,
      itensPage: 5,
      pageIndex: 2
    };

    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.onClickPage = this.onClickPage.bind(this);
  }

  clickNext(event) {
    alert("Cliquei no next");
    this.state.pageIndex =  this.state.pageIndex + 1;
    this.forceUpdate();
  }

  clickPrev(event) {
    alert("Cliquei no prev");
    this.state.pageIndex = this.state.pageIndex -1;
    this.forceUpdate();

  }

  onClickPage(event) {
    alert("Cliquei na pag");
  }

  renderIconsPrevious(prevDisabled) {
    if (this.props.icons) {
      return (
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      );
    }
    let className = "page-item";
    if(prevDisabled){
      className = "page-item disabled";
    }
    return (
      <li class={className}>
        <a class="page-link" href="#" onClick={this.clickPrev}>
          Previous
        </a>
      </li>
    );
  }

  renderIconsNext(nextDisabled) {
    if (this.props.icons) {
      return (
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      );
    }

    let className = "page-item";
    if(nextDisabled){
      className = "page-item disabled";
    }
  

    
    return (
      <li class={className}>
        <a class="page-link" href="#" onClick={this.clickNext}>
          Next
        </a>
      </li>
    );
  }
  

  render() {
    let total = this.state.result / this.state.itensPage;

    let itens = [];
    let nextDisabled = false;
    let prevDisabled = false;
    for (let i = 1; i <= total; i++) {

      let className = "page-item";
      if(i == this.state.pageIndex){
        className = "page-item active"
      }

      if(this.state.pageIndex == total){
        nextDisabled = true;
      }

      if(this.state.pageIndex == 1){
        prevDisabled = true;
      }

      itens.push(
        <li class={className}>
        <a class="page-link" href="#" onClick={this.onClickPage}>
          {i}
        </a>
      </li>);
    }
   
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">{this.renderIconsPrevious(prevDisabled)}</li>
            {itens}
            <li class="page-item">{this.renderIconsNext(nextDisabled)}</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default PaginationComponent;
