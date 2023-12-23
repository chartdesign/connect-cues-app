import Link from "next/link";

export const NavItem = ({ href, isActive, children }) => {
  <Link
    href={href}
    className={`text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 ${
      isActive ? "border-l-4 border-blue-500 pl-2" : ""
    }`}
  >
    {children}
  </Link>;
};
