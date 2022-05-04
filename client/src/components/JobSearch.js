import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function JobSearch ({allJobs}) {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    
    const filterJobs = (allJobs, query) => {
      if (!query) {
          return allJobs;
      }
    
      return allJobs.filter((job) => {
          const jobRole = job.role.toLowerCase();
          return jobRole.includes(query);
      });
    };
    
    const filteredJobs = filterJobs(allJobs, searchQuery);

    return (
        <Container>
    
            <Form action="/" method="get">
            <Wrapper>
            <Header htmlFor="header-search">
            <span>Job Listings</span>
            </Header>
            <Input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search by role"
            name="s" 
            />
        <SubmitButton type="submit">Search</SubmitButton>
        </Wrapper>
            <ul>
          {filteredJobs.map((job) => (
              <List>
              <Button2 as={Link} to={`jobs/${job.id}`}key={job.id}>{job.role}{""}</Button2>
              </List>
          ))}
        </ul>
    </Form>
    
        </Container>
    )
}

export default JobSearch

const Input = styled.input`
font-family: 'Quicksand', sans-serif;
width: 300px;
border-color: white;
border: white;
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
display: flex;
position: relative;
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
`;