import "../assets/styles/globals.css";
import { notoSans } from "../assets/fonts/fonts";

/**Portfolio description for metadata.
 * @const
 * @type {String}
 */
const portfolioDesc = "Portfolio de Tommy BERNARD - Développeur web full-stack. Disponible pour un stage sur la plage Juin - Août. J'apprend actuellement React.js, Next.js, php, MySQL & TaildWind CSS";
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
    <html lang="en">
      <body className={`${notoSans.className} overflow-x-clip bg-primary/80`}>
        {children}
        <noscript>Veuillez activer JavaScript. / Please enable JavaScript.</noscript>
      </body>
    </html>
  );
}
