import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: {
    default: "Mwinja Divine Help Foundation | Empowering Refugees & Communities",
    template: "%s | Mwinja Divine Help Foundation",
  },
  description: "Mwinja Divine Help Foundation develops sustainable livelihoods to empower refugees and host communities in Uganda through education, health, and economic programs.",
  keywords: ["refugees", "Uganda", "NGO", "community development", "education", "livelihoods", "empowerment", "humanitarian"],
  authors: [{ name: "Mwinja Divine Help Foundation" }],
  creator: "Mwinja Divine Help Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mwinjadivinehelpfoundation.org",
    title: "Mwinja Divine Help Foundation | Empowering Refugees & Communities",
    description: "Mwinja Divine Help Foundation develops sustainable livelihoods to empower refugees and host communities in Uganda.",
    siteName: "Mwinja Divine Help Foundation",
    images: [
      {
        url: "https://ext.same-assets.com/922964245/3478060187.jpeg",
        width: 1200,
        height: 630,
        alt: "Mwinja Divine Help Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mwinja Divine Help Foundation | Empowering Refugees & Communities",
    description: "Mwinja Divine Help Foundation develops sustainable livelihoods to empower refugees and host communities in Uganda.",
    images: ["https://ext.same-assets.com/922964245/3478060187.jpeg"],
  },
  icons: {
    icon: "https://ext.same-assets.com/922964245/2252904973.png",
    apple: "https://ext.same-assets.com/922964245/2252904973.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
