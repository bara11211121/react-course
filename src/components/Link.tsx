import type { ReactNode } from "react";

interface LinkProps {
  url: string;
  children: ReactNode;
}
export const Link = ({ url, children }: LinkProps) => (
  <a href={url}>{children}</a>
);


