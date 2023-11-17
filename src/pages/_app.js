import { appWithTranslation } from "next-i18next";
import "../styles/global.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./loading.js";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleStart = () => {
      timeoutId = setTimeout(() => {
        setLoading(true);
      }, 1000); // Затримка в 1000 мс (1 секунда)
    };

    const handleComplete = () => {
      clearTimeout(timeoutId); // Очистка таймауту, якщо відбулося завантаження
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(timeoutId); // Очистка таймауту під час розмонтування компонента
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div>
      {loading && <Loading />} {/* Ваш власний компонент "loading" */}
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
