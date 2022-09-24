import React, { Fragment } from 'react';
import Swal from 'sweetalert2'

const Product = ({ product, cart, addProduct, products }) => {

  const { id, name, mainCategory, secondaryCategory, price, image } = product;

  const addProductCart = (id) => {
    const product = {
      id: id,
      name: name,
      mainCategory: mainCategory,
      secondaryCategory: secondaryCategory,
      price: price,
      image: image
    };

    const existProduct = cart.filter((product) => {
      return product.id === id;
    });

    if (existProduct[0]) {
      Swal.fire({
        position: 'center',
        title: 'El producto ya fue seleccionado.',
        text: 'Elegir otro producto por favor.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        timer: 4000
      });
    } else {
      addProduct([
        ...cart,
        product
      ]);
    }
  };

  const deleteProduct = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Estás segur@?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const products = cart.filter((product) => {
          return product.id !== id;
        });
        addProduct(products);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelad@',
          'Está seguro :)',
          'error'
        );
      }
    });
  };

  return (
    <Fragment>
      {products ?
        <section className="col-md-4 my-2">
          <div className="card text-center bg-dark text-light" >
            <a href={image} target="_blank" rel="noreferrer" className="over-flow-h">
              <img src={image} className="card-img-top" alt={name} />
            </a>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h5 className="card-subtitle my-2">Main: {mainCategory}</h5>
              <h6 className="card-subtitle text-muted mb-2">{secondaryCategory}</h6>
              <p className="card-text">S/ {price}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => addProductCart(id)}
              >Agregar</button>
            </div>
          </div >
        </section >
        :
        <section className="col-md-12 my-2">
          <div className="card text-center bg-dark text-light animate__animated animate__fadeInUp" >
            <a href={image} target="_blank" rel="noreferrer" className="over-flow-h">
              <img src={image} className="card-img-top" alt={name} />
            </a>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h5 className="card-subtitle my-2">Main: {mainCategory}</h5>
              <h6 className="card-subtitle text-muted mb-2">{secondaryCategory}</h6>
              <p className="card-text">S/ {price}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteProduct(id)}
              >Eliminar</button>
            </div>
          </div >
        </section >}
    </Fragment>
  );
}

export default Product;