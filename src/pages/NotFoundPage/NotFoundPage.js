import React from 'react'
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <>
      <h2 className="not-found">
        Page does not exist sorry
      </h2>
      <h2 className="not-found">
        You were referred to this page from {location.state.referrer.pathname}
      </h2>
    </>
  )
}

export default NotFoundPage
