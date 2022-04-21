/* eslint-disable no-unused-vars */
import React from 'react';

const inject = (
  ParamsReactDom,
  ParamsBrowserRouter,
  ParamsProvider,
  ParamsApp,
  ParamsStore,
) => {
  const container = document.getElementById('root');
  const root = ParamsReactDom.createRoot(container);
  return root.render(
    <ParamsBrowserRouter>
      <ParamsProvider store={ParamsStore}>
        <ParamsApp name='Axtarılan Proqramçılar' />
      </ParamsProvider>
    </ParamsBrowserRouter>,
  );
};

export default inject;
