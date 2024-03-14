// ParentComponent.js

import React from 'react';
import SubmitForm from './SubmitForm';

const ParentComponent = () => {
  const captureImage = () => {

    console.log('Capturing image...');

  };

  return <SubmitForm captureImage={captureImage} />;
};

export default ParentComponent;
