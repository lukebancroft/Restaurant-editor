import React from 'react';

export default class Pagination extends React.Component {

  render() {

    let prevClass = this.props.currentPage === 1 ? "page-item disabled" : "page-item";
    let nextClass = this.props.currentPage === this.props.pageCount ? "page-item disabled" : "page-item";

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={prevClass}><button type="button" className="page-link text-light bg-dark" value={1} onClick={(e) => this.props.onPageChange(e)}>First</button></li>
                <li className={prevClass}><button type="button" className="page-link text-light bg-dark" value={Number(this.props.currentPage) - 1} onClick={(e) => this.props.onPageChange(e)}>Previous</button></li>
                <li className="page-item"><button type="button" className="page-link text-light bg-dark" >{this.props.currentPage}</button></li>
                <li className={nextClass}><button type="button" className="page-link text-light bg-dark" value={Number(this.props.currentPage) + 1} onClick={(e) => this.props.onPageChange(e)}>Next</button></li>
                <li className={nextClass}><button type="button" className="page-link text-light bg-dark" value={this.props.pageCount} onClick={(e) => this.props.onPageChange(e)}>Last</button></li>
            </ul>
        </nav>
    );
  }
}