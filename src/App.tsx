import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import LoginModal from "@/components/LoginModal";
import { useTranslation } from "react-i18next";
import "@/i18n";
import RegisterModal from "@/components/RegisterModal";
import Loading from "@/components/Loading";

function App() {
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem("currentLanguage");
    if (currentLanguage) {
      changeLanguage(currentLanguage);
    } else {
      localStorage.setItem("currentLanguage", "vn");
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout == null ? Fragment : route.layout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <LoginModal />
        <RegisterModal />
        <Loading />
      </Router>
    </>
  );
}

export default App;
