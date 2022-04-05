import React from "react";

const inject = (ParamsReactDom,ParamsBrowserRouter,ParamsProvider,ParamsApp,ParamsStore) => {

    const rootElement = document.getElementById("root");
    return{
        obj:ParamsReactDom.render(
            <ParamsBrowserRouter>
              <ParamsProvider store={ ParamsStore }>
                <ParamsApp />
              </ParamsProvider>
            </ParamsBrowserRouter>,
            rootElement
          )
    }
}

export default inject