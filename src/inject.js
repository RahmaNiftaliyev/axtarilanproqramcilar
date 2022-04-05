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

<<<<<<< HEAD
export default inject
=======
export default inject
>>>>>>> 312e1c8681414501dd4d00aca812e16f8f597e21
