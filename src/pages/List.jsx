import React, { useEffect, useState } from 'react'
import Jobcard from '../components/Jobcard';
import { Link } from 'react-router-dom';

export const List = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    fetchJobs();
  }, [])
  function fetchJobs(){
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    // console.log(jobs);
    console.log(jobs);
    if( !jobs) setJobs([])
    else setJobs(jobs);
    
  }
   console.log(jobs);
  return (
    <>
    <div className='w-full flex justify-end '>
      <Link to="/add" className='bg-blue-400 hover:bg-blue-600 text-white p-3 rounded'>
      <button>
        add Jobs
      </button>
      </Link>
     
    </div>
    <div className='w-full flex justify-center align-middle items-center '>
    <div className='m-10 grid-flow-row w-[80%] ' style={jobs?.length > 0 ? {
      display: "grid",
      gap: "10px",
      gridTemplateColumns: "repeat(2, 1fr)",
    }: { display: "flex", justifyContent: "center" }}>
       {jobs?.length > 0 ? jobs.map((job, index) => {
          return (
           <Jobcard key={index} title={job.title} description={job.description} Cname={job.Cname} salary={job.salary} date={job.date} index={index} />
          );
       }) : (
        <div className='w-full flex text-center justify-center'>
          <h1 className=''>No jobs Currently Set</h1>
        </div>
       )
       }
    </div>

    </div>
    </>
  )
}
