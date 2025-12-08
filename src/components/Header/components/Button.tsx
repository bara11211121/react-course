interface ButtonProps {
  children: React.ReactNode;
}
export const Button = ({ children }: ButtonProps) => (
  <button className="nav-button">{children}</button>
);
