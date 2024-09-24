// Import necessary hooks and functions
import { useSearchParams } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect, useState } from "react";
import { useGetUser } from "./useGetUser";

function User() {
  // Set up state and fetch user data
  const { data, isLoading, isError } = useGetUser();
  const { user, isLoading: isLoading1, isError: isError1 } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageUrl, setImageUrl] = useState(null);

  // Update URL parameters when user data changes
  useEffect(() => {
    if (data && data.id) {
      searchParams.set("user_id", data.id);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, data]);

  // Handle image upload functionality
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

  // Show loading message while fetching user data
  if (isLoading || isLoading1) {
    return <p className="text-muted">Loading user...</p>;
  }

  // Prepare user name and email for display
  const userName = data?.fullname ? data.fullname.split(" ")[0] : "Guest";
  const userEmail = user?.email || "Email not available";

  return (
    // Change the color of the box around the user email and picture
    <div className="d-flex align-items-center  rounded p-2">
      <div className="position-relative me-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="User"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        ) : (
          <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
            <span className="text-white fs-4">👤</span>
          </div>
        )}
        <label
          htmlFor="imageUpload"
          className="position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex justify-content-center align-items-center"
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
        >
          <span className="text-white fs-6">+</span>
        </label>
      </div>
      {/* TODO: This div has a white background in dark mode. Update the className to support dark mode. */}
      <div>
        <div className="fw-bold">{`Welcome, ${userName}!`}</div>
        <div className="text-muted small">{userEmail}</div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="d-none"
        id="imageUpload"
      />
    </div>
  );
}

export default User;