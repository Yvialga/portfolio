import "./ui/globals.css";
import { notoSans } from "./ui/fonts";
<link rel="icon" href="/src/public/favicon.ico"></link>

/**Portfolio description for metadata.
 * @const
 * @type {String}
 */
const portfolioDesc = "Portfolio de Tommy BERNARD - Développeur full-stack. Disponible pour un stage courant Juin - Août. J'apprend actuellement React.js, Next.js, php, MySQL & TaildWind CSS";
/**Metadata for open Graph protocol.
 * @const
 * @type {Array}
 */
const openGraphFields = {
  title: "Tommy BERNARD",
  description: "Portfolio de Tommy BERNARD, développeur full-stack en autodidacte.",
  url: "https://yvialga.fr",
  siteName: "Tommy BERNARD",
  locale: "fr_FR",
  type: "website",
};

export const metadata = {
  title: {
    template: "%s | Tommy BERNARD - Développeur full-stack",
    default: "Portfolio | Tommy BERNARD - Développeur full-stack",
  },
  description: portfolioDesc,
  keywords: ["Développeur full-stack", "Portfolio", "JavaScript", "React.js", "Next.js", "TailWind CSS"],
  authors: ["Yvialga", "Tommy BERNARD"],
  openGraph: openGraphFields,
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} h-screen`}>
        {children}
      </body>
    </html>
  );
}
