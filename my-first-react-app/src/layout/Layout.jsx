import { Outlet, Link } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile/popeye">Profile : Popeye</Link>
        <Link to="/profile/spinach">Profile : Spinach</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>This is footer</footer>
    </div>
  );
}
