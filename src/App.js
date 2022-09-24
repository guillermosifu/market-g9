import React, { Fragment, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Polo de React 1',
      mainCategory: 'Technology',
      secondaryCategory: 'React',
      price: 50,
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--CSfu32Lv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh26ac7tpt5o1i24dm6n.png'
    },
    {
      id: 2,
      name: 'Polo de React 2',
      mainCategory: 'Technology',
      secondaryCategory: 'React',
      price: 50,
      image: 'https://wallpaperaccess.com/full/3949076.jpg'
    },
    {
      id: 3,
      name: 'Polo de React 3',
      mainCategory: 'Technology',
      secondaryCategory: 'React',
      price: 50,
      image: 'https://blog.facialix.com/wp-content/uploads/2021/03/react-redux.jpg'
    },
    {
      id: 4,
      name: 'Polo de Angular 1',
      mainCategory: 'Technology',
      secondaryCategory: 'Angular',
      price: 50,
      image: 'https://miro.medium.com/max/1838/1*5eGMBtSNu9GVU8pNJC2akQ.png'
    },
    {
      id: 5,
      name: 'Polo de Angular 2',
      mainCategory: 'Technology',
      secondaryCategory: 'Angular',
      price: 50,
      image: 'https://elabismodenull.files.wordpress.com/2015/04/angularjs-resources.jpg'
    },
    {
      id: 6,
      name: 'Polo de Angular 3',
      mainCategory: 'Technology',
      secondaryCategory: 'Angular',
      price: 50,
      image: 'https://images.squarespace-cdn.com/content/v1/5442cdeee4b08813902a524d/1549641336376-HRTKUXNNENODMDKPJOGT/Angular+Picture.png'
    },
    {
      id: 7,
      name: 'Polo de JavaScript 1',
      mainCategory: 'Technology',
      secondaryCategory: 'JavaScript',
      price: 40,
      image: 'https://cutewallpaper.org/21/javascript-wallpaper/JavaScript-Wallpapers-Wallpaper-Cave.jpg'
    },
    {
      id: 8,
      name: 'Polo de JavaScript 2',
      mainCategory: 'Technology',
      secondaryCategory: 'JavaScript',
      price: 40,
      image: 'https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png'
    },
    {
      id: 9,
      name: 'Polo de JavaScript 3',
      mainCategory: 'Technology',
      secondaryCategory: 'JavaScript',
      price: 40,
      image: 'https://midu.dev/images/wallpapers/web-technologies-4k-wallpaper.png'
    },
    {
      id: 10,
      name: 'Polo de JavaScript 4',
      mainCategory: 'Technology',
      secondaryCategory: 'JavaScript',
      price: 40,
      image: 'https://wallpaperbat.com/img/364232-graphics.png'
    },
    {
      id: 11,
      name: 'Polo de JavaScript 4',
      mainCategory: 'Technology',
      secondaryCategory: 'JavaScript',
      price: 40,
      image: 'https://wallpaperbat.com/img/364232-graphics.png'
    }
  ]);

  const [cart, addProduct] = useState([]);

  const currentDate = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        title='Tienda de Ropa Personalizada'
        store='Tu estilo'
        slogan='Personaliza tu estilo, sé siempre tú.'
      />

      <main>
        <section className="container">
          <div className="row align-items-start">

            <section className="col-md-9 my-2">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <h2>Productos</h2>
                </div>
                {products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      products={products}
                      cart={cart}
                      addProduct={addProduct}
                    />
                  );
                })}
              </div>
            </section>

            <section className="col-md-3 my-2">
              <div className="row align-items-start animate__animated animate__fadeInUp">
                <div className="container__title">
                  <h2>Carrito</h2>
                </div>
                <Cart
                  cart={cart}
                  addProduct={addProduct}
                />
              </div>
            </section>

          </div>
        </section>
      </main>

      <Footer
        currentDate={currentDate}
      />
    </Fragment>
  );
}

export default App;

