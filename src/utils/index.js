export function fetchJobs(){
    const data = localStorage.getItem('jobs')
    console.log(data);
    return JSON.parse(data);
}