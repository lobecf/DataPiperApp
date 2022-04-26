import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function JobDetail ( {jobId} ) {
    const [job, setJob] = useState(null)
    // const history = useHistory()

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
        <Container>
            <Header>{job.role}</Header>
            <List>
            <P>Skills needed: {job.skills_needed}</P>
            </List>
            <Wrapper>
           
            <Button2 as={Link} to={`/jobs/apply/${jobId}`}>Apply</Button2>
            </Wrapper>
        </Container>
    )
}

export default JobDetail

const Input = styled.input`
font-family: 'Quicksand', sans-serif;
width: 300px;
border-radius: 20px;
padding-left: 5px;
margin-bottom: 5px;
`;

const Container = styled.section `
padding: 5px;
width: 400px;
background: dodgerblue;
margin: auto;
position: relative;
border-radius: 25px;
`

const Wrapper = styled.section`
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: auto;
  padding-bottom: 20px;
`;

const Header = styled.h1 `
text-align: center;
color: white;
padding: 15px;
font-family: 'Quicksand', sans-serif;
font-size: 25px;
`;

const P = styled.p `
padding: 15px;
`

const Form = styled.form`
  margin-bottom: 3px;
`;

const List = styled.h1`
margin-left: 5px;
font-family: 'Quicksand', sans-serif;
font-size: 15px;
color: lightsalmon;
padding-bottom: 15px;
`

const Button2 = styled.button`
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  color: white;
  &:hover {
      color: orange;
      transition: all 0.4s ease 0s;
    }
`;
