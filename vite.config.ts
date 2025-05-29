// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // autorise les connexions extérieures
		strictPort: true,
		cors: true,
		origin: "http://localhost:5173",
		hmr: {
			clientPort: 443, // nécessaire pour que le HMR fonctionne via HTTPS (loca.lt)
		},
		// ⚠️ Change ici : on ne met pas "all" mais une fonction qui accepte tout
		allowedHosts: [
			".loca.lt", // accepte tous les sous-domaines de loca.lt
		],
	},
});
