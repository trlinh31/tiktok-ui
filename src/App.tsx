import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import { useTranslation } from "react-i18next";
import "@/i18n";

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
            const Layout = route.layout;
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
      </Router>
    </>
  );
}

export default App;
