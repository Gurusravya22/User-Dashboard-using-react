import { useEffect, useMemo, useState } from "react";
import UserCard from "../components/UserCard";
import { useUsers } from "../context/UserContext";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
};

export default function DashboardPage() {
  const { users, setUsers, addUser, isLoading, setIsLoading, error, setError } = useUsers();
  const [searchText, setSearchText] = useState("");
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (users.length > 0) {
      return;
    }

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Unable to fetch users.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [setError, setIsLoading, setUsers, users.length]);

  const filteredUsers = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) {
      return users;
    }
    return users.filter((user) => user.name.toLowerCase().includes(query));
  }, [searchText, users]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const companyName = formData.companyName.trim();

    if (!name || !email || !phone || !companyName) {
      return;
    }

    addUser({
      name,
      email,
      phone,
      company: { name: companyName },
      address: {
        street: "Client Side Street",
        suite: "Suite 1",
        city: "Sample City",
        zipcode: "000000",
        geo: { lat: "0.0000", lng: "0.0000" },
      },
      website: "example.com",
    });
    setFormData(initialFormState);
  };

  return (
    <main className="container">
      <header className="header">
        <h1>User Dashboard</h1>
        <p>Browse users, search by name, and add a new user locally.</p>
      </header>

      <section className="controls-section">
        <div className="search-wrap">
          <label htmlFor="search">Search by Name</label>
          <input
            id="search"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="e.g. Leanne"
          />
        </div>
      </section>

      <section className="form-section">
        <h2>Create New User</h2>
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleFormChange}
            required
          />
          <button type="submit">Add User</button>
        </form>
      </section>

      {isLoading && <p className="status-message">Loading users...</p>}
      {error && <p className="status-message error">{error}</p>}

      <section className="grid" aria-live="polite">
        {!isLoading &&
          !error &&
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)}
      </section>

      {!isLoading && !error && filteredUsers.length === 0 && (
        <p className="status-message">No users match your search.</p>
      )}
    </main>
  );
}
