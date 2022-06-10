import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }) {
  // const desiredChainId = 137;
  const desiredChainId = ChainId.Polygon;

  /**
   * Make sure that your app is wrapped with these contexts.
   * If you're using React, you'll have to replace the Component setup with {children}
   */
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
