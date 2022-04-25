import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PagesProps } from '../components/pagesProps';

const RouteFactory = () => {
  return (
    <Routes>
      {PagesProps.content.body.map((e, key) => {
        return (
          <Route
            key={key}
            path={e.path}
            element={React.createElement(e.component, {
              name: e.name,
              getData: e.getData,
              saveData: e.saveData,
              previous: e.previous,
              next: e.next,
              placeholder: e.placeholder,
              type: e.type,
              validate: e.validate
            })}
          />
        );
      })}
    </Routes>
  );
};

export default RouteFactory;
