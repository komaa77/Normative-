import React, { useEffect, useState } from "react";


const DEFAULT_USER = {
  firstName: "Md",
  lastName: "Rimel",
  email: "rimel1111@gmail.com",
  address: "Kingston, 5236, United State",
  password: "password123",
};

export default function AccountProfile() {
  const [initialUser, setInitialUser] = useState(DEFAULT_USER);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile")) || DEFAULT_USER;
    setInitialUser(saved);

    setFirstName(saved.firstName || "");
    setLastName(saved.lastName || "");
    setEmail(saved.email || "");
    setAddress(saved.address || "");
  }, []);

  // Cancel -> restore original values and clear password inputs & messages
  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName(initialUser.firstName || "");
    setLastName(initialUser.lastName || "");
    setEmail(initialUser.email || "");
    setAddress(initialUser.address || "");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  };

  // Basic email validation
  const isValidEmail = (em) => {
    return /\S+@\S+\.\S+/.test(em);
  };

  // Save handler
  const handleSave = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate basic profile fields
    if (!firstName.trim() || !lastName.trim()) {
      setError("First name va Last name to'ldirilishi kerak.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Iltimos to'g'ri email kiriting.");
      return;
    }

    // Password change flow: agar foydalanuvchi newPassword yoki confirmPassword kiritgan bo'lsa -> treat as password change attempt
    const wantsPasswordChange = newPassword !== "" || confirmPassword !== "" || currentPassword !== "";

    if (wantsPasswordChange) {
      // current password required
      if (!currentPassword) {
        setError("Agar parolni o'zgartirmoqchi bo'lsangiz, joriy parolni kiriting.");
        return;
      }
      // check current password matches stored one
      if (currentPassword !== initialUser.password) {
        setError("Joriy parol noto'g'ri.");
        return;
      }
      // new password validation
      if (newPassword.length < 6) {
        setError("Yangi parol kamida 6 ta belgidan iborat bo'lishi kerak.");
        return;
      }
      if (newPassword !== confirmPassword) {
        setError("Yangi parol va tasdiqlash bir xil emas.");
        return;
      }
    }

    // hammasi ok -> yangilanadi
    const updated = {
      ...initialUser,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      address: address.trim(),
      password: wantsPasswordChange ? newPassword : initialUser.password,
    };

    // save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(updated));
    setInitialUser(updated);

    // clear password inputs
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setSuccess("Ma'lumotlar saqlandi.");
    // avtomatik success messageni bir ozdan keyin olib tashlash
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <section className="account-page">
      <div className="container">
        <div className="breadcrumb__main" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div className="breadcrumb__links">
            <ul style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
              <li><a href="/">Home</a></li>
              <li>/</li>
              <li><a href="/account">My Account</a></li>
            </ul>
          </div>

          <div className="breadcrumb__welcome">
            <p className="welcome__message" style={{ margin: 0 }}>
              Welcome! <span style={{ color: "#DB4444", fontWeight: 600 }}>{initialUser.firstName} {initialUser.lastName}</span>
            </p>
          </div>
        </div>

        <div className="account__overall" style={{ display: "flex", gap: 24 }}>
          {/* left nav */}
          <div className="account__nav" style={{ width: 240 }}>
            <div className="account__section">
              <h3>Manage My Account</h3>
              <ul>
                <li style={{ color: "#DB4444" }}>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>
            <div className="account__section">
              <h3>My Orders</h3>
              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>
            <div className="account__section">
              <h3>My WishList</h3>
            </div>
          </div>

          {/* right form */}
          <form className="profile-edit-form" style={{ flex: 1, maxWidth: 820 }} onSubmit={handleSave}>
            <h1 className="profile__main-title">Edit Your Profile</h1>

            <div className="inputs__profile" style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <label className="main__label" htmlFor="firstName">First Name</label>
                <input id="firstName" className="profile-input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div style={{ flex: 1 }}>
                <label className="main__label" htmlFor="lastName">Last Name</label>
                <input id="lastName" className="profile-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="inputs__profile-next" style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <label className="main__label" htmlFor="email">Email</label>
                <input id="email" className="profile-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div style={{ flex: 1 }}>
                <label className="main__label" htmlFor="address">Address</label>
                <input id="address" className="profile-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            <div className="form__password-changes" style={{ marginBottom: 12 }}>
              <h3 className="profile-password-title">Password Changes</h3>
              <input id="CurrentPassword" className="password__input" type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} style={{ display: "block", width: "100%", marginBottom: 8 }} />
              <input id="NewPassword" className="password__input" type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} style={{ display: "block", width: "100%", marginBottom: 8 }} />
              <input id="ConfirmPassword" className="password__input" type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ display: "block", width: "100%" }} />
            </div>

            <div className="error-message" style={{ color: "red", minHeight: 20, marginBottom: 8 }}>{error}</div>
            <div className="success-message" style={{ color: "green", minHeight: 20, marginBottom: 8 }}>{success}</div>

            <div className="profile__buttons" style={{ display: "flex", gap: 12 }}>
              <button type="button" className="cancel__btn" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="save__btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
