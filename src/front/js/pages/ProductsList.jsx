import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
export const ProductsList = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container">
            <h1 className="mb-4">Products List</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                {!store.products ? <h2>Loading...</h2> :
                    store.products.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card border-dark my-3 mx-2 text-bg-dark">
                                <img src={product.image_url} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className='card-text'>
                                        $ {product.price}.00
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link className="btn btn-secondary my-auto" to={"/product/" + product.id}><i className="fas fa-eye"></i></Link>
                                    {store.isLogin && (
                                        <button className="btn btn-primary my-auto" onClick={() => handlePOST(product)}>
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    )}
                                    <button onClick={() => actions.toggleFavorite(product)} className="btn btn-outline-warning my-auto">
                                        <i className={`${actions.getHeartClass(product)} my-auto`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};