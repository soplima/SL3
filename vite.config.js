import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "Sl3 Consultoria Contabil Ltda",
      short_name: "SL3",
      description:
        "Atuamos de forma integrada nas áreas de contabilidade, "
        + "direito tributário e societário, oferecendo soluções completas, "
        + "seguras e personalizadas para empresas e pessoas físicas.",
      theme_color: "#0d1f08",
      background_color: "#f5f3e7",
      lang: "pt-BR"
    }
  })
  ],
})
