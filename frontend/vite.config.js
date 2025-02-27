// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          colors: {
            lightPink: {
              DEFAULT: "#f7f7f7",
              50: "#f7f7f7",
              100: "#efefef",
              200: "#dcdcdc",
              300: "#bdbdbd",
              400: "#989898",
              500: "#7c7c7c",
              600: "#656565",
              700: "#525252",
              800: "#464646",
              900: "#3d3d3d",
              950: "#292929",
            },
            Heather: {
              DEFAULT: "#c4ceda",
              50: "#f5f7f9",
              100: "#e8ecf1",
              200: "#d7dee6",
              300: "#c4ceda",
              400: "#9baabf",
              500: "#8292af",
              600: "#707ea0",
              700: "#646f91",
              800: "#555c78",
              900: "#474e61",
              950: "#2e323d",
            },
          },
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      plugins: [],
    }),
  ],
});

