import { Link, useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const { users } = useUsers();

  const selectedUser = users.find((user) => String(user.id) === String(userId));

  if (!selectedUser) {
    return (
      <main className="container">
        <div className="details-card">
          <h2>User Not Found</h2>
          <p>
            This user is not available in memory. Please go back to dashboard and load/add users
            first.
          </p>
          <Link className="back-link" to="/">
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  const address = selectedUser.address || {};
  const geo = address.geo || {};

  return (
    <main className="container">
      <div className="details-card">
        <h1>{selectedUser.name}</h1>
        <p>
          <span>Email:</span> {selectedUser.email}
        </p>
        <p>
          <span>Phone:</span> {selectedUser.phone}
        </p>
        <p>
          <span>Company:</span> {selectedUser.company?.name || "N/A"}
        </p>
        <p>
          <span>Website:</span> {selectedUser.website || "N/A"}
        </p>

        <h3>Address</h3>
        <p>
          {address.street || "N/A"}, {address.suite || "N/A"}
        </p>
        <p>
          {address.city || "N/A"} - {address.zipcode || "N/A"}
        </p>

        <h3>Geo Location</h3>
        <p>
          <span>Latitude:</span> {geo.lat || "N/A"}
        </p>
        <p>
          <span>Longitude:</span> {geo.lng || "N/A"}
        </p>

        <Link className="back-link" to="/">
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}
