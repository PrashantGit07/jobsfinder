import React, { useState, useEffect } from 'react';
import { Button, Card, Pagination, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import JobDetail from './JobDetail';

const Jobs = () => {
  const [resultItem, setResultItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const excercisePerPage = 9; // Number of jobs per page

  // Calculate the indexes for the current page
  const indexOfLastExercise = currentPage * excercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - excercisePerPage;
  const currentExercises = resultItem.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://jsearch.p.rapidapi.com/search?query=india&page=4&num_pages=15'; // Removed extra %20
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9156440586mshf714a40c71a92b7p16734bjsn69a30ca9ea9a',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setResultItem(result.data);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

     fetchData();
  }, []);
  const handleSearch = () => {
    if (searchTerm === '') {
      setResultItem(resultItem)
    }
    else {
      const filteredResult = resultItem.filter((resultdata) => resultdata.job_title && resultdata.job_city.toLowerCase().includes(searchTerm.toLowerCase()))
      setResultItem(filteredResult)
    }
  }


  return (
    <div className='flex flex-col '>
      <div className=' flex justify-center mt-5 mb-3' >
        <input 
    
          type='text'
          placeholder='Search by job city...'
          className=' border-black bg-slate-200 rounded-full w-64 p-3 '
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className=' ml-4 bg-yellow-400 w-24 rounded-xl'>Search</button>
      </div>
      <div className=' grid grid-cols-3 gap-4 mx-auto'>
        {currentExercises.map((resultdata, index) => (
          <Card key={index} className='max-w-2xl   flex' hoverable>
                 
              <Typography.Title>{resultdata.job_title}</Typography.Title>
              
            <p>{resultdata.job_country}</p>
            <h2 className='font-bold'>Job Title : {resultdata.employer_name}</h2>
            <p>{resultdata.job_description?.slice(0, 500)}</p>
            <p>Employment Type : {resultdata.job_employment_type}</p>
            <p className='text-blue-900 font-extralight'>Publisher : {resultdata.job_publisher}</p>
            <Button className='bg-black text-white' href={resultdata.job_apply_link}>
              Apply Now
            </Button>
            <Link to={`/jobdetail`} state={{ resultdata }}>Details</Link>
          </Card>
        ))}
      </div>
      {resultItem.length > excercisePerPage && (
        <Pagination
          className='flex justify-center items-center mt-8'
          total={resultItem.length}
          pageSize={excercisePerPage}
          current={currentPage}
          onChange={handlePageChange}
        />
      )}
      <br />
    </div>
  );
};

export default Jobs;
