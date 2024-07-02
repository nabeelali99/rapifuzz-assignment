import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

export const RegisterPage = () => {
  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "IN", label: "India" },
  ];

  const states = [
    { value: "CA", label: "California", country: "US" },
    { value: "NY", label: "New York", country: "US" },
    { value: "ON", label: "Ontario", country: "CA" },
    { value: "BC", label: "British Columbia", country: "CA" },
    { value: "UP", label: "Uttar Pradesh", country: "IN" },
    { value: "MP", label: "Madhya Pradesh", country: "IN" },
    { value: "TN", label: "Tamil Nadu", country: "IN" },
    { value: "MH", label: "Maharashtra", country: "IN" },
  ];

  const cities = [
    { value: "San Francisco", label: "San Francisco", state: "CA" },
    { value: "New York City", label: "New York City", state: "NY" },
    { value: "Toronto", label: "Toronto", state: "ON" },
    { value: "Vancouver", label: "Vancouver", state: "BC" },
    { value: "Chennai", label: "Chennai", state: "TN" },
    { value: "Mumbai", label: "Mumbai", state: "MH" },
    { value: "Lucknow", label: "Lucknow", state: "UP" },
    { value: "Bhopal", label: "Bhopal", state: "MP" },
  ];

  const isdCodes = [
    { value: "+1", label: "+1 (United States)" },
    { value: "+44", label: "+44 (United Kingdom)" },
    { value: "+91", label: "+91 (India)" },
    { value: "+1", label: "+1 (Canada)" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [filteredStates, setFilteredStates] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [pincode, setPincode] = useState("");
  const [isdCode, setIsdCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fax, setFax] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  async function register(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        email,
        age,
        address,
        type,
        country,
        state,
        city,
        pincode,
        isdCode,
        mobileNumber,
        fax,
        // phoneNumber,
        confirmPassword,
      }),
    });
    if (response.status === 200) {
      setAge("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setUsername("");
      setAddress("");
      setConfirmPassword("");
      setCountry("");
      setCity("");
      setFax("");
      setFilteredCities([]);
      setFilteredStates([]);
      setPincode("");
      // setPhoneNumber("");
      setMobileNumber("");

      navigate("/HomePage");
      toast.success("Registration successful");
    } else {
      toast.error("Registration failed");
    }
  }

  return (
    <form action="" className="register" onSubmit={register}>
      <h1>Sign up</h1>
      <div>
        <label style={{ fontWeight: "bold" }}>
          Individual/Enterprise/Government
        </label>
        <div style={{ display: "flex", gap: "10px" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <input
              style={{ marginRight: "5px", marginTop: "10px" }}
              type="radio"
              name="type"
              value="Individual"
              checked={type === "Individual"}
              onChange={(e) => setType(e.target.value)}
            />
            Individual
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <input
              style={{ marginRight: "5px", marginTop: "10px" }}
              type="radio"
              name="type"
              value="Enterprise"
              checked={type === "Enterprise"}
              onChange={(e) => setType(e.target.value)}
            />
            Enterprise
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              margin: "10px",
            }}
          >
            <input
              style={{ marginRight: "5px", marginTop: "10px" }}
              type="radio"
              name="type"
              value="Government"
              checked={type === "Government"}
              onChange={(e) => setType(e.target.value)}
            />
            Government
          </label>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "50%" }}>
          <label style={{ fontWeight: "bold" }}>First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            maxLength="20"
            minLength="3"
            required
            autoFocus
            title="First Name may only contain letters with a length between 3 and 20"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={{ width: "50%" }}>
          <label style={{ fontWeight: "bold" }}>Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            maxLength="20"
            minLength="3"
            autoFocus
            title="Last Name may only contain letters with a length between 3 and 20"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <label style={{ fontWeight: "bold" }}>Email</label>
      <input
        type="text"
        name="email"
        id="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ fontWeight: "bold" }}>Address</label>
      <input
        type="text"
        name="address"
        id="address"
        required
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "30%" }}>
          <label style={{ fontWeight: "bold" }}>Country</label>
          <Select
            options={countries}
            onChange={(selectedCountry) => {
              setCountry(selectedCountry.value);
              // Filter states based on selected country
              const filteredStates = states.filter(
                (state) => state.country === selectedCountry.value
              );
              setFilteredStates(filteredStates);
            }}
          />
        </div>
        <div style={{ width: "30%" }}>
          <label style={{ fontWeight: "bold" }}>State</label>
          <Select
            options={filteredStates}
            onChange={(selectedState) => {
              setState(selectedState.value);
              // Filter cities based on selected state
              const filteredCities = cities.filter(
                (city) => city.state === selectedState.value
              );
              setFilteredCities(filteredCities);
            }}
          />
        </div>
        <div style={{ width: "30%" }}>
          <label style={{ fontWeight: "bold" }}>City</label>
          <Select
            onChange={(selectedCity) => setCity(selectedCity.value)}
            options={filteredCities}
          />
        </div>
      </div>
      <label style={{ fontWeight: "bold" }}>Pincode</label>
      <input
        type="tel"
        name="pincode"
        id="pincode"
        required
        placeholder="Pincode"
        title="Picode may only contain numbers between 0 and 9 with a length of 6"
        minLength="6"
        maxLength="6"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      <label style={{ fontWeight: "bold" }}>ISD Code</label>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ marginTop: "18px", width: "30%" }}>
          <Select
            name="isdCode"
            id="isdCode"
            required
            placeholder="ISD Code"
            title="ISD Code may only contain numbers with a length of 2"
            min="2"
            max="2"
            options={isdCodes}
            onChange={(selectedISD) => setIsdCode(selectedISD.value)}
          />
        </div>
        <div style={{ marginTop: "-22px", width: "70%" }}>
          <label style={{ fontWeight: "bold" }}>Mobile</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
            title="Mobile numebr may only contain numbers without country code"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "50%" }}>
          <label style={{ fontWeight: "bold" }}>Fax</label>
          <input
            type="tel"
            name="fax"
            id="fax"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
            required
            title="Fax may only contain numbers without country code"
            placeholder="Fax"
            value={fax}
            onChange={(e) => setFax(e.target.value)}
          />
        </div>
        {/* <div style={{ width: "50%" }}>
          <div>
            <label style={{ fontWeight: "bold" }}>Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              minLength="10"
              maxLength="10"
              pattern="[0-9]{10}"
              title="Phone numebr may only contain numbers without country code"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div> */}
      </div>

      <label style={{ fontWeight: "bold" }}>Age</label>
      <input
        type="number"
        name="age"
        id="age"
        required
        placeholder="Age"
        title="Age may only contain numbers between 18 and 100"
        min="18"
        max="100"
        step="1"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label style={{ fontWeight: "bold" }}>Username</label>
      <input
        type="text"
        name="username"
        id="username"
        maxLength="20"
        minLength="3"
        title="Username should be unique with a length between 3 and 20"
        required
        autoFocus
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label style={{ fontWeight: "bold" }}>Password</label>
      <div style={{ display: "flex" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          // minLength="8"
          // maxLength="20"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
          title="Password should contain at least one uppercase letter, one lowercase letter, one number and one special character with a length between 8 and 20"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ backgroundColor: "white", color: "black", width: "50px" }}
          id="togglePassword"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <label style={{ fontWeight: "bold" }}>Confirm Password</label>
      <div style={{ display: "flex" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmpassword"
          id="confirmpassword"
          // minLength="8"
          // maxLength="20"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
          title="Confirm Password should contain at least one uppercase letter, one lowercase letter, one number and one special character with a length between 8 and 20"
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          style={{ backgroundColor: "white", color: "black", width: "50px" }}
          id="togglePassword"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button type="submit">Sign up</button>
    </form>
  );
};
