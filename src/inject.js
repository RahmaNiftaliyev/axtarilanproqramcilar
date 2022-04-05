/* eslint-disable import/no-anonymous-default-export */
const rootElement = document.getElementById("root");

export default  (
  React,
  ParamsReactDom,
  ParamsBrowserRouter,
  ParamsProvider,
  ParamsApp,
  ParamsStore
) => {
  ParamsReactDom.render(

      <ParamsBrowserRouter>
        <ParamsProvider store={ParamsStore}>
          <ParamsApp />
        </ParamsProvider>
      </ParamsBrowserRouter>,
    rootElement
  );
};


