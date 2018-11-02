import React from 'react';
import QueueAnim from 'rc-queue-anim';
import Button from '@material-ui/core/Button';
import DEMO from 'constants/demoData.js';

const Error500 = () => (
  <div className="err-container text-center">
    <div className="err">
      <h1>500</h1>
      <h2>Sorry, server goes wrong</h2>
    </div>

    <div className="err-body">
      <Button href={DEMO.home} variant="contained"> Go Back to Home Page </Button>
    </div>
  </div>
);

const Page = () => (
  <div className="page-err">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1">
        <Error500 />
      </div>
    </QueueAnim>
  </div>
);

export default Page;
