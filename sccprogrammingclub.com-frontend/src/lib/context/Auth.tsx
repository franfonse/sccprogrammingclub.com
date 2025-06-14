import { useContext, useState } from "react";
import { createContext } from "react";

export interface AuthContextType {
	isLoggedIn: boolean;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const api = "https://sccprogrammingclub.com/api";
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	async function login(username: string, password: string) {
		try {
			const response = await fetch(`${api}/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			if (!response.ok) {
				throw new Error("Login failed");
			}

			const data = await response.json();
			console.log(data);
			setIsLoggedIn(true);
		} catch (error) {
			console.error("Login error:", error);
		}
	}

	function logout() {
		setIsLoggedIn(false);
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
