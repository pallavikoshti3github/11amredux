import { appstore } from "@/redux/store"
import { Provider } from "react-redux"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={appstore}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
