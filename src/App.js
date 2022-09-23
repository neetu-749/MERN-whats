
import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {

  const clientId = '533502528051-ejgjt5k4e2khsdtp9pf08mkd3u5oj1jb.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
