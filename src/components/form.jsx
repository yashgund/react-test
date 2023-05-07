import React, {useEffect, useState} from 'react'
import { fetchJobs } from '../utils'
import { Link, useNavigate } from 'react-router-dom';

export const Form = () => {
    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");
    const [Cname, setCname] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    //   setJobs();
    }, []);
    // function setJobs(){
    //     const list = {
    //         title: 'Dev',
    //         name: 'star trek',
    //         salary: '49k',
    //         date: '29 may',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore, eum neque sint nemo accusamus iure consequuntur itaque architecto ut ab molestiae perspiciatis pariatur earum aspernatur minima error cumque! Voluptas?'
    //     }
    //     const jobsArr = fetchJobs();
    //     console.log(jobsArr);
    //    if(!jobsArr ){
    //     const arr = []
    //     arr.push(list);
    //     console.log(arr);
    //     localStorage.setItem('jobs', JSON.stringify(arr) )
    //    }
        
    //     jobsArr.push(list);
    //     console.log(jobsArr);
    //     // localStorage.setItem('jobs', JSON.stringify(jobsArr) ),
    // }

    function handleSubmit(e){
        e.preventDefault();
        const jobsArr = fetchJobs();
        const list = {
            title,
            Cname,
            salary,
            date,
            description
        }
        if(!jobsArr){

            let arr = []
            console.log(list);
            arr.push(list);
            localStorage.setItem('jobs', JSON.stringify(arr) );
            navigate('/');
        }
        jobsArr.push(list);
        localStorage.setItem('jobs', JSON.stringify(jobsArr) );
        navigate('/');

    }
  return (
    <div>

      <div className="flex justify-center items-center w-full">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <Link to="/">
      <div className="w-full flex justify-left">
          <button className="bg-blue-400 text-white p-1 rounded mb-2 underline p-2 w-[70px]"> back </button>
      </div>
        </Link>
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Jobs</h1>
        <form>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900 text-left" htmlFor="first_name">Job Title</label>
                <input className="border py-2 px-3 text-grey-800" type="text"name={title}
                onChange={(e) => setTitle(e.target.value)} id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900 text-left" htmlFor="last_name">Company Name</label>
                <input className="border py-2 px-3 text-grey-800" type="text"name={Cname}
                onChange={(e) => setCname(e.target.value)} id="last_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900 text-left" htmlFor="email">Salary</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name={salary}
                onChange={(e) => setSalary(e.target.value)} id="email"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900 text-left" htmlFor="date">Date</label>
                <input className="border py-2 px-3 text-grey-800" type="date"  name={date}
                onChange={(e) => setDate(e.target.value)} id="date" placeholder="DD/MM/YY"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-gray-900 text-left" htmlFor="date">Description</label>
                <textarea className="border py-2 px-3 text-grey-800" type="date" name={description}
                onChange={(e) => setDescription(e.target.value)} id="date"/>
            </div>
            <button className="block bg-blue-400 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-4 rounded" type="button" onClick={handleSubmit} >Add Job</button>
        </form>
    </div>
</div>
</div>
  )
}
