import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Basic from './Basic';
import NoLabel from './NoLabel';


const Page = () => (
  <div className="container-fluid no-breadcrumb container-mw-md chapter">
    <article className="article">
      <h2 className="article-title page-title">Bottom Navigation</h2>
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1" className="mb-4"> <Basic /> </div>
        <div key="2" className="mb-4"> <NoLabel /> </div>
      </QueueAnim>
    </article>
  </div>
)

export default Page;
