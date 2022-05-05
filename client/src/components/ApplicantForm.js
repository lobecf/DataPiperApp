import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

function ApplicantForm ( {jobId} ) {
    const [applicant, setApplicant] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [job, setJob] = useState(null)
    const history = useHistory();

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
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            address,
            city,
            state,
            country,
            zipcode,
            job_id: jobId,
          }),
        }).then(res => {
            if (res.ok) {
              return res.json()
            } else {
              return res.json().then(errors => Promise.reject(errors))
            }
          })
          .then(applicant => setApplicant(applicant));
          
          history.push(`/jobs/${jobId}`)
      }
  
      const fetchEventCallback = useCallback(
        () => {
          fetch(`/jobs/${jobId}`, {
            credentials: 'include'
          })
            .then(res => res.json())
            .then(job => setJob(job))
        },
        [jobId],
      )
    
      useEffect(() => {
        fetchEventCallback()
      }, [fetchEventCallback])
  
      console.log(job)
  
      if(!job) { return <div></div>}
    return (
        <Wrapper2>
            <H3>{job.role}</H3>
            <Wrapper>
            <Form onSubmit={handleSubmit}>
                <P>
                <Input
                type="text"
                id="first-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="address"
                placeholder="Street Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="zipcode"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                />
                </P>
                <SubmitButton type="submit">{isLoading ? "Loading..." : "Submit"}</SubmitButton>
                
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}

            </Form>
            </Wrapper>
        </Wrapper2>
    )
}

export default ApplicantForm

const Form = styled.form`
  margin-bottom: 3px;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SubmitButton = styled.button`
    text-align: center;
    margin: auto;
    font-family: 'Quicksand', sans-serif;
    width: 300px;
    color: black;
    background: white;
    border: white;
    border-radius: 20px;
    &:hover {
      color: orange;
      background: rgb(63,0,255);
      transition: all 0.4s ease 0s;
    }
    margin-bottom: 15px;
`;

const Wrapper2 = styled.section`
padding: 5px;
width: 400px;
background: dodgerblue;
margin: auto;
position: relative;
border-radius: 25px;
`;


const Input = styled.input`
font-family: 'Quicksand', sans-serif;
width: 300px;
border-radius: 20px;
padding-left: 5px;
background: white;
border-color: white;
`;

const P = styled.p `
display: flex;
position: relative;
`

const H3 = styled.h1 `
text-align: center;
color: white;
padding: 15px;
font-family: 'Quicksand', sans-serif;
font-size: 25px;
`;