import "../styles/globals.css";
import type { AppProps } from "next/app";

// Component를 div로 묶음
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-lg mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
