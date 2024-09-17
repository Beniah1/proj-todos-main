import { useUser } from "./useUser";
import { useState } from "react";

function User() {
  const { user, isLoading, isError, error } = useUser();
  const [imageUrl, setImageUrl] = useState(null);

  if (isLoading) return <p className="text-muted">Loading user...</p>;
  if (isError) return <p className="text-danger">{error.message}</p>;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="d-flex align-items-center">
      {imageUrl ? (
        <img src={imageUrl} alt="User" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
      ) : (
        <span className="me-2">👤</span>
      )}
      <div>
        <div>{user?.fullname || "Guest"}</div>
        <div className="text-muted small">{user?.email}</div>
      </div>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="d-none" id="imageUpload" />
      <label htmlFor="imageUpload" className="btn btn-sm btn-outline-secondary ms-2">Add Image</label>
    </div>
  );
}

export default User;
