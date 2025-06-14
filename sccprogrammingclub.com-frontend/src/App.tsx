import "./App.css";
import { Footer } from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header/Header";
import { AuthProvider } from "@/lib/context/Auth";
import { MemberProvider } from "@/lib/context/Members";
import { AppRoutes } from "@/routes/AppRoutes";

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
