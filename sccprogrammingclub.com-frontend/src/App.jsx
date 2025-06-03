import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import MemberProvider from "./contexts/member/MemberProvider";
import AuthProvider from "./contexts/auth/AuthProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <Header />
      <MemberProvider>
        <div className="main-container">
          <AppRoutes />
        </div>
      </MemberProvider>
      <Footer />
    </AuthProvider>
  );
}

export default App;
