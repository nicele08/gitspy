import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>NotFoundPage</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default NotFoundPage;
