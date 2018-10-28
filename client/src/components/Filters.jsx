import React from 'react';

export default class Filters extends React.Component {

  render() {

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="pageSizeSelect">Restaurants per page</label>
                </div>
                <select className="custom-select" id="pageSizeSelect" value={this.props.pagesize} onChange={(e) => this.props.onPagesizeChange(e)}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </select>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Find by name</span>
                </div>
                <input type="text" className="form-control" placeholder="Entrez un filtre..." aria-label="name"  onChange={(e) => this.props.onNameFilterChange(e.target.value)}/>
            </div>
        </div>
    );
  }
}