import React from 'react';
import LoginForm1 from 'routes/form/routes/forms/components/LoginForm1';

const Card = () => {
  return(
    <section className="form-card row no-gutters mdc-elevation--z1">
      <div className="form-card__img form-card__img--left col-lg-5" style={{backgroundImage: "url('assets/images-demo/covers/riccardo-oliva-231656-unsplash-cut-progressive.jpg')"}}></div>
      <div className="form-card__body col-lg-7 p-lg-6 p-4">
        <LoginForm1 />
      </div>
    </section>
  );
}

export default Card;
