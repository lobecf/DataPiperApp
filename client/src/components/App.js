import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route } from 'react-router-dom'
import JobSearch from "./JobSearch"
import JobDetail from "./JobDetail"
import ApplicantForm from "./ApplicantForm"

function App() {
  const [allJobs, setAllJobs] = useState([])

useEffect(() => {
  fetch("/jobs", {
    credentials: 'include'
  })
  .then(res => res.json())
  .then(allJobs => setAllJobs(allJobs))
}, [])



console.log(allJobs)
  return (
    <Container>
      <Switch>
        <Route exact path="/">
        <JobSearch allJobs={allJobs}/>
        </Route>
        <Route
          exact
          path="/jobs/:id"
          render={({ match }) => {
            return (
              <JobDetail
              jobId={match.params.id}
            />
            )
          }}
        />
        <Route
          exact
          path="/jobs/apply/:id"
          render={({ match }) => {
            return (
              <ApplicantForm
              jobId={match.params.id}
            />
            )
          }}
        />
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.p `
margin-top: 40px;
`