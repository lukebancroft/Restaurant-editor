import React from 'react';

export default class RestaurantTable extends React.Component {
    constructor(props) {
        super(props);
        this.idRef = React.createRef();
        this.nomRef = React.createRef();
        this.cuisineRef = React.createRef();
        this.state = {
            id: '',
            name: '',
            cuisine: ''
        }
    }

    openEdit(id, nom, cuisine) {
        this.setState({ id: id, name: nom, cuisine: cuisine});
    };

    openDelete(id, nom) {
        this.setState({ id: id, name: nom});
    };

    handleEditSubmit(event) {
        event.preventDefault();
        document.getElementById("closeEdit").click();
        this.props.editRestaurant(this.idRef.current.value, this.nomRef.current.value, this.cuisineRef.current.value);
    }

    handleDeleteSubmit(event) {
        event.preventDefault();
        document.getElementById("closeDelete").click();
        this.props.deleteRestaurant(this.state.id);
    }

  render() {
    return (
        <div>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Nom</th>
                        <th>Cuisine</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.restaurants.map(restaurant => 
                    <tr key={restaurant._id}>
                        <td key={"name_" + restaurant._id}>{restaurant.name}</td>
                        <td key={"cuisine_" + restaurant._id}>{restaurant.cuisine}</td>
                        <td key={"actions_" + restaurant._id}>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#editModal" onClick={e => this.openEdit(restaurant._id, restaurant.name, restaurant.cuisine)}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-dark" data-toggle="modal" data-target="#deleteModal" onClick={e => this.openDelete(restaurant._id, restaurant.name)}><i className="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>


            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Modifier un restaurant</h5>
                        <button type="button" id="closeEdit" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form id="editForm" onSubmit={e => this.handleEditSubmit(e)}>
                            <label htmlFor="idRestaurant">Id du restaurant</label>
                            <input type="text" id="idRestaurant" className="form-control" placeholder="Entrez l'id..." defaultValue={this.state.id} ref={this.idRef} required />
                            
                            <label htmlFor="nomRestaurant">Nom du restaurant</label>
                            <input type="text" id="nomRestaurant" className="form-control" placeholder="Entrez le nom..." defaultValue={this.state.name} ref={this.nomRef} required />
                            
                           <label htmlFor="cuisineRestaurant">Type de cuisine</label>
                            <input type="text" id="cuisineRestaurant" className="form-control" placeholder="Entrez le type..." defaultValue={this.state.cuisine} ref={this.cuisineRef} required />
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Annuler</button>
                        <button type="submit" form="editForm" value="Submit" className="btn btn-dark">Enregistrer</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmer la suppression</h5>
                        <button type="button" className="close" id="closeDelete" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Êtes-vous sûr de vouloir supprimer le restaurant {this.state.name} ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Annuler</button>
                        <button type="submit" form="createForm" value="Submit" className="btn btn-dark" onClick={(e) => this.handleDeleteSubmit(e)}>Supprimer</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}