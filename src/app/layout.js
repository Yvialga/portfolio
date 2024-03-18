import "./ui/globals.css";
import { openSans } from "./ui/fonts";

export const metadata = {
  title: "Portfolio - Tommy BERNARD - Développeur full-stack",
  description: "Tommy BERNARD - Développeur full-stack. Disponible pour un stage courant Juin - Août. J'apprend actuellement React.js, Next.js, php, MySQL & TaildWind CSS",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
