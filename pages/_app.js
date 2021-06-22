import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
// import Database from "server/services/database";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

// MyApp.getInitialProps = async ({ ctx }) => {
//   let subdomain;
//   let portfolio;
//   if (isServer()) {
//     // const cookies = nookies.get(ctx);
//     // const db = await Database({ token: cookies.token });
//     subdomain = getSubdomain(ctx.req.headers.host);
//     // if (subdomain) {
//     //   portfolio = db
//     // }
//   } else {
//     subdomain = getSubdomain(window.location.hostname);
//   }
//   return { subdomain, portfolio };
// };

export default MyApp;
