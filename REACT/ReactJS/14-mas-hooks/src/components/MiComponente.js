import React, { useId } from 'react';

export const MiComponente = () => {
  const id1 = useId();
  console.log(id1);

  return (
    <div>
      <h1>Hook useID</h1>
      <input id={id1} name="nombre" placeholder="Nombre"></input>
    </div>
  );
};
