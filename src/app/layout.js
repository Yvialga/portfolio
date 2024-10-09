import "../assets/styles/globals.css";
import { notoSans } from "../assets/fonts/fonts";

/**Portfolio description for metadata.
 * @const
 * @type {String}
 */
const portfolioDesc = "Développeur web - Portfolio. Au cours de mes expériences, j'ai pu travailler sur des sites webs ou bien des SaaS";
/**Metadata for open Graph protocol.
 * @const
 * @type {Array}
 */
const openGraphFields = {
  title: "Tommy BERNARD",
  description: "Tommy BERNARD | Portfolio. Développeur full-stack autodidacte.",
  url: "https://yvialga.fr",
  siteName: "Tommy BERNARD",
  locale: "fr_FR",
  type: "website",
};

export const metadata = {
  title: {
    template: "%s | Tommy BERNARD - Développeur web full-stack",
    default: "Tommy BERNARD - Développeur web full-stack",
  },
  description: portfolioDesc,
  keywords: ["Développeur", "full-stack", "Portfolio", "JavaScript", "React.js", "Next.js", "TailWind CSS"],
  authors: ["Yvialga", "Tommy BERNARD"],
  openGraph: openGraphFields,
};

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <body className={`${notoSans.className} overflow-x-clip bg-primary/80 min-h-screen`}>
        {children}
        <noscript>Veuillez activer JavaScript. / Please enable JavaScript.</noscript>
      </body>
    </html>
  );
}
