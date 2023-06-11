import { Route, Routes } from 'react-router-dom';
import { OnLogin, InfoText } from 'components';
import { Create } from './create';
import { Home } from './home';
import { NFT } from './nft';
import { Ecommerce } from './ecommerce';

const routes = [
  { path: '/', Page: Home },
  { path: 'nft/:id', Page: NFT },
  { path: 'create', Page: Create, isPrivate: true },
  { path: '/ecommerce', Page: Ecommerce },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page, isPrivate }) => (
      <Route
        key={path}
        path={path}
        element={
          isPrivate ? (
            <OnLogin fallback={<InfoText text="In order to use all features, please login" />}>
              <Page />
            </OnLogin>
          ) : (
            <Page />
          )
        }
      />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
