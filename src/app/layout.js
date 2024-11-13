"use client"
import { Provider } from "react-redux"
import { appStore } from "./redux/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={appStore}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
