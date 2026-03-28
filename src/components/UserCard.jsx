import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <article className="user-card">
      <h3>{user.name}</h3>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Phone:</span> {user.phone}
      </p>
      <p>
        <span>Company:</span> {user.company?.name || "N/A"}
      </p>
      <Link className="card-link" to={`/users/${user.id}`}>
        View Details
      </Link>
    </article>
  );
}
