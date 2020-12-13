import React, { useState } from 'react';
import Loader from '../components/Loader';

const withLoader = (WrappedComponent, message) => {
  return (props) => {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    }

    return (
      <>
        {isLoading && <Loader message={message} />}
        <WrappedComponent {...props} setLoading={setLoadingState}/>
      </>
    )
  }
}

export default withLoader;
