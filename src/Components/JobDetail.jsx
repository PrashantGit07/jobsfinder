import { Button, Card, Typography } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';

const JobDetail = () => {
    const location = useLocation();
    const { resultdata } = location.state;


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };
    return (
        <div className='flex justify-center items-center overflow-hidden bg-gradient-to-l from-gray-700 via-gray-900 to-black min-h-screen min-w-screen'>
            <Card className=' min-h-[100px] w-[500px]' hoverable>
                
                <Typography.Title> {resultdata.job_title} </Typography.Title>

                
               <div className=' flex items-center justify-between'> 

                <p className=' font-semibold text-blue-800'> {resultdata.employer_name} </p>


                <img src={resultdata.employer_logo} className=' h-[60px] w-[60px]' />

                </div>
                <p className=' font-semibold text-gray-500'>Employer Company Type : {resultdata.employer_company_type} </p>

                <p className=' font-semibold text-gray-700'>Job City : {resultdata.job_city}</p>

                <p className=' text-black text-xs'> {resultdata.job_description.slice(0, 800)} </p>

                <span className=' font-serif font-semibold'>To know more about company : </span>

                <Button href={resultdata.employer_website} target='blank' className=' hover:bg-blue-700 hover:transition hover:duration-300' >Click here</Button><br />

                <Button href={resultdata.job_apply_link} className='hover:brightness-110 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white flex items-center w-[110px]' >Apply Now</Button>

                <p className=' font-semibold text-gray-700'>Employement Type : {resultdata.job_employment_type}</p>

                <Button href={resultdata.job_google_link} target='blank' className=' bg-blue-600 h-8 w-[240px] rounded-xl'>Get to know more on Google</Button>

                <p className=' font-serif font-semibold text-green-700'>Posted Date :{formatDate(resultdata.job_posted_at_datetime_utc)} </p>

                <p>Remote Work Availabilty : {resultdata.job_is_remote?"Yes":"No"} </p>
            </Card>
        </div>
    );
}

export default JobDetail;
