import React from 'react';
import LoaderContext from './LoaderContext.js';
import ViewContext from './ViewContext.js';
import LoaderViewContext from './LoaderViewContext.js';

const LoaderViewCombined = props => {
    return (
      <ViewContext.Consumer>
        {viewContext => (
          <LoaderContext.Consumer>
            {loaderContext => (
              <LoaderViewContext.Provider value={{ viewContext, loaderContext }}>
                {props.children}
              </LoaderViewContext.Provider>
            )}
          </LoaderContext.Consumer>
        )}
      </ViewContext.Consumer>
    );
};

export default LoaderViewCombined;