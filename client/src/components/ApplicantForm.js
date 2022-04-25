import React, { useState } from "react";

function ApplicantForm ( {jobId} ) {
    const [applicants, setApplicant] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipecode] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/applicants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            country,
            zipcode,
          }),
        }).then(res => {
            if (res.ok) {
              return res.json()
            } else {
              return res.json().then(errors => Promise.reject(errors))
            }
          })
          .then(applicant => setApplicant(applicant))
      }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                id="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="text"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <input
                type="text"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                <input
                type="text"
                id="address"
                placeholder="Street Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                <input
                type="text"
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <input
                type="text"
                id="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                />
                <input
                type="text"
                id="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <input
                type="text"
                id="zipcode"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setZipecode(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}

            </form>
        </div>
    )
}

export default ApplicantForm