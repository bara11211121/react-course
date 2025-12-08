import type { ReactNode } from "react";

interface LinkProps {
  url: string;
  children: ReactNode;
}
const PhotoLink = ({ url, children }: LinkProps) => (
  <a href={url}>{children}</a>
);

export default PhotoLink;
