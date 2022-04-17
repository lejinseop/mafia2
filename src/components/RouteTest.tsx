import React, { useContext } from 'react';
import type { FC } from 'react';
import { BrowserRouter, useLocation, UNSAFE_LocationContext } from 'react-router-dom';

const LocationContextConsumer = React.lazy(() => import('mafia_helper/LocationContextConsumer'));

const RouteTest: FC = (props) => {
  // console.log('RouteTest::props :: ', props);
  const location = useContext(UNSAFE_LocationContext);
  // console.log('location :: ', location);
  // const location = useLocation();
  // console.log('mafia2::location :: ', location);
  return (
    <div>
      RouteTestPage
      <React.Suspense fallback="loading!!">
        {/* @ts-ignore */}
        <LocationContextConsumer>
          {(value: any) => {
            console.log('remote::react-router.v6::location:: ', value)
            return <div>haha</div>
          }}
        </LocationContextConsumer>
      </React.Suspense>
      {/* <UNSAFE_LocationContext.Consumer>
        {value => {
          console.log('location context value :: ', value)
          return <div>hoho</div>
        }}
      </UNSAFE_LocationContext.Consumer> */}
    </div>
  );
}

export default RouteTest;
