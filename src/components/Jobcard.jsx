import React from "react";

const Jobcard = ({title, description, Cname , salary, date, index}) => {
  function deleteJob(){
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    jobs.splice(index, 1);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    window.location.reload();
  }
  // console.log({title, description, Cname , salary, date});
  return (
    <div className="max-w-[500px] flex border p-10 rounded">
      <div className="w-full">
      <div className="ml-1 flex justify-between ">
      <p style={{fontSize: "1.2rem"}}>{title}</p>
      <div className="flex">
      {/* <p className="bg-yellow-400 hover:bg-yellow-600 p-2 mr-1 rounded">Edit</p> */}
      <p className="bg-red-400 hover:bg-red-700 p-2 ml-1 rounded" onClick={deleteJob}>delete</p>

      </div>
     </div>
     <div className="flex justify-start align-middle w-full mt-3"> 
      <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" alt="" className="max-w-[50px] rounded-full"/>
      <p className="mt-[12px] ml-[13px]">{Cname}</p>
     </div>
     <div className="flex justify-between mt-3">
      <p><strong>Salary:</strong> {salary}</p>
      <p><strong>Joining date : </strong>{date}</p>
     </div>
     <div className="flex-col overflow-hidden scroll-mx-1 text-left mt-3">
      <p> <strong> Job Description :</strong></p>
      <p>{description}</p>
     </div>
      </div>
     
    </div>
  );
};

export default Jobcard;
