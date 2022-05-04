import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

function CreateListing () {
    const [job, setJob] = useState("")
    const [client, setClient] = useState("");
    const [poc, setPoc] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [urgancy, setUrgancy] = useState("");
    const [quantity, setQuantity] = useState("");
    const [skillsNeeded, setSkillsNeeded] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
      e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client,
            poc,
            email,
            role,
            urgancy,
            quantity,
            skills_needed: skillsNeeded,
          }),
        }).then(res => {
          if (res.ok) {
            return res.json()
          } else {
            return res.json().then(errors => Promise.reject(errors))
          }
        })
        .then(job => setJob(job));
        
        history.push("/")
      }

      const fetchEventCallback = useCallback(
        () => {
          fetch(`/jobs/${job.Id}`, {
            credentials: 'include'
          })
            .then(res => res.json())
            .then(job => setJob(job))
        },
        [job.Id],
      )
    
      useEffect(() => {
        fetchEventCallback()
      }, [fetchEventCallback])

      if(!job) { return <div></div>}
    return (
        <Wrapper2>
            <H3>Create Listing</H3>
            <Wrapper>
            <Form onSubmit={handleSubmit}>
                <P>
                <Input
                type="text"
                id="client"
                placeholder="Client"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="poc"
                placeholder="POC"
                value={poc}
                onChange={(e) => setPoc(e.target.value)}
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
                id="role"
                placeholder="Role Name"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="urgancy"
                placeholder="Urgency"
                value={urgancy}
                onChange={(e) => setUrgancy(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="number"
                id="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />
                </P>
                <P>
                <Input
                type="text"
                id="skills"
                placeholder="Skills Needed"
                value={skillsNeeded}
                onChange={(e) => setSkillsNeeded(e.target.value)}
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

export default CreateListing

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