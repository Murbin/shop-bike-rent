import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { components } from './components';

const RouteFactory = (props) => {
  return (
    <Routes>
      {components.content.body.map((e, key) => {
        return (
          <Route
            key={key}
            path={e.path}
            element={React.createElement(e.component, {
              ...props,
              name: e.name,
              getData: e.getData,
              saveData: e.saveData,
              previous: e.previous,
              next: e.next,
              placeholder: e.placeholder,
              type: e.type,
              validate: e.validate,
              items: e.items,
              options: e.options
            })}
          />
        );
      })}
    </Routes>
  );
};

export default RouteFactory;
