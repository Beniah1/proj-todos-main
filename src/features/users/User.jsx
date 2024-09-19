import { useSearchParams } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect, useState } from "react";
import { useGetUser } from "./useGetUser";

function User() {
  const { data, isLoading, isError } = useGetUser();
  const { user, isLoading: isLoading1, isError: isError1 } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (data && data.id) {
      searchParams.set("user_id", data.id);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, data]);

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

  if (isLoading || isLoading1) {
    return <p className="text-muted">Loading user...</p>;
  }

  const userName = data?.fullname ? data.fullname.split(" ")[0] : "Guest";
  const userEmail = user?.email || "Email not available";

  return (
    <div className="d-flex align-items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="User"
          className="rounded-circle me-2"
          style={{ width: "40px", height: "40px" }}
        />
      ) : (
        <span className="me-2">👤</span>
      )}
      <div>
        <div>{`Welcome, ${userName}!`}</div>
        <div className="text-muted small">{userEmail}</div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="d-none"
        id="imageUpload"
      />
      <label
        htmlFor="imageUpload"
        className="btn btn-sm btn-outline-secondary ms-2"
      >
        Add Image
      </label>
    </div>
  );
}

export default User;