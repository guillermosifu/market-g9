import React, { Fragment } from 'react';
import Product from './Product';

const Cart = ({ cart, addProduct }) => {

  const defaultProduct = {
    id: 0,
    name: 'Aún no agrega productos',
    mainCategory: 'All',
    secondaryCategory: 'All',
    price: 'Gratis',
    image: 'https://miro.medium.com/max/800/1*0FAbAXug4XMepL7fGIvXFg.png'
  }

  let productsWhatsapp = 'https://api.whatsapp.com/send?phone=51997629316&text=Deseo%20comprar:';

  return (
    <Fragment>
      {cart.length === 0 ?
        <section className="col-md-12 my-2">
          <div className="card text-center bg-dark text-light animate__animated animate__fadeInUp">
            <a href={defaultProduct.image} target="_blank" rel="noreferrer" className="over-flow-h">
              <img src={defaultProduct.image} className="card-img-top" alt={defaultProduct.name} loading="lazy" />
            </a>
            <div className="card-body">
              <h4 className="card-title">{defaultProduct.name}</h4>
              <h5 className="card-subtitle my-2">Main: {defaultProduct.mainCategory}</h5>
              <h6 className="card-subtitle text-muted mb-2">{defaultProduct.secondaryCategory}</h6>
              <p className="card-text">{defaultProduct.price}</p>
              <button
                type="button"
                className="btn btn-primary"
              > Compra </button>
            </div>
          </div>
        </section>
        :
        <section>
          <div class="d-grid gap-2 col-12 mx-auto">
            <a
              href={productsWhatsapp += cart.map((product) => {
                return (
                  ` ${product.name}`
                );
              })}
              className="btn btn-light mt-2"
              target="_blank"
              rel="noreferrer">Confirmar</a>
          </div>
          {
            cart.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  cart={cart}
                  addProduct={addProduct}
                />
              )
            })
          }
        </section>
      }
    </Fragment>
  );
}

export default Cart;