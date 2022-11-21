import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="h-10 w-full bg-blue-200 space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/watermelon">Watermelon</NavLink>
      </div>
    </>
  );
}
