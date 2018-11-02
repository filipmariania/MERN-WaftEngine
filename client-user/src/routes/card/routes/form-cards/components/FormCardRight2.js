import React from 'react';
import ResetPassword1 from 'routes/form/routes/forms/components/ResetPassword1';

const Card = () => {
  return(
    <section className="form-card row no-gutters mdc-elevation--z1">
      <div className="form-card__img form-card__img--right col-lg-6 order-lg-2" style={{backgroundImage: "url('assets/images-demo/covers/tomas-jasovsky-178485-unsplash-progressive.jpg')"}}></div>
      <div className="form-card__body col-lg-6 p-lg-6 p-4 order-lg-1">
        <ResetPassword1 />
      </div>
    </section>
  );
}

export default Card;
