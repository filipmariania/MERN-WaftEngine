import React from 'react';
import DEMO from 'constants/demoData';
import MaterialIcon from 'components/MaterialIcon';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';

const products = DEMO.products;

class Page extends React.Component {
  render() {
    return (
      <section className="container-fluid container-mw-xxl no-breadcrumb chapter">
        <QueueAnim type="bottom" className="ui-animate row">
          {
            products.map((product, i) =>
              <div className="col-xl-3 col-lg-6 mb-4" key={( i + 1).toString()}>
                <div href={DEMO.link} className="item-card">
                  <div className={classnames('sash sash-triangle-right', product.sash)}>
                    <div>
                      <MaterialIcon icon={product.sash_icon} />
                      <span className="sash-text">{product.sash_text}</span>
                    </div>
                  </div>
                  <a href={DEMO.link} className="card__image">
                    <img alt="product" src={product.img} />
                  </a>
                  <div className="card__body card-white">
                    <div className="card__title">
                      <span>Accessories</span>
                      <a href={product.link}>{product.name}</a>
                    </div>
                    <div className="card__price">
                      <span className="type--strikethrough">$699.99</span>
                      <span>$649.99</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </QueueAnim>
      </section>
    );
  }
}

export default Page;
