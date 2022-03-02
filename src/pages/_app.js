import MainLayout from '@layout/MainLayout';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />;
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
