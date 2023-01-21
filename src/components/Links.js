import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <>
      <h3>Links</h3>
      <a href={"https://github.com/liza"}>{github}</a>
      <a href="https://www.linkedin.com/in/liza/">{linkedin}</a>
    </>
  );
};

export default Links;
