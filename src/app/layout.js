    "use client";
    import { useEffect } from "react";
    import { useRouter } from 'next/navigation'
    import "./globals.css";
      
    export default function RootLayout({ children }) {
      const router = useRouter()
      useEffect(() => {

        if(!localStorage.getItem('JWT')) {
          router.push("/");
        }
        else {
          router.push("/dashboard");
        }
      }, []);

      return (
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      );
    }
