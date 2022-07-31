import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getCssText } from "./styles/stitches.config";
import { global } from "./styles/global.css";
import preflight from "./styles/preflight.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "CellarDoor",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: preflight },
];

export default function App() {
  global();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
