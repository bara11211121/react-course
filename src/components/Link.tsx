import type { ReactNode } from "react";

interface LinkProps {
  url: string;
  children: ReactNode;
}
const Link = ({ url, children }: LinkProps) => <a href={url}>{children}</a>;

export default Link;
