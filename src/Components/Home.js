import { Button, Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckOutlined } from '@ant-design/icons'
import Footer from './Footer'
import professionalmage from '../assets/Working professionals.jpg'
const Home = () => {

  const navigate = useNavigate()
  function clickHandler() {
    navigate("/jobs")

  }
  function jobSearch() {
    navigate("/jobs")

  }
  function filterSearch() {
    navigate("/about")

  }
  return (
    <div>
      <div className='flex justify-center items-center mt-20'>
        <div className='mt-3'>
          <div className='flex flex-col flex-wrap ml-4 text-7xl font-bold'>
            <p>Opportunity Knocks</p>
            <p>-Your Personalized</p>
            <p>Job Search Plateform</p>

          </div>
          <br />
          <div className='flex flex-col flex-wrap ml-4 text-neutral-600'>
            <p>
              Opportunity Knocks is your go-to platform for finding tailored job listings

            </p>
            <p>based on your role, experience, and location preferences.</p>
            <p>Discover worldwide opportunities, including remote and office work options, and land your dream job today!</p>

          </div >
          <div className='mt-5 flex justify-center'>
            <Button className=' bg-blue-600 flex text-white flex-col flex-wrap ml-4 h-16 w-32 items-center justify-center' onClick={clickHandler}>View Jobs</Button>

          </div>
        </div>

        <div className='mt-3'>
          {/* <img src='https://10web-site.ai/40/wp-content/uploads/sites/43/2023/09/georgie-cobbs-bKjHgo_Lbpo-unsplash_qMnZYXmj.webp' className=' rounded-lg' alt='searchjob' /> */}
          <img src={professionalmage} className=' rounded-lg max-h-96' alt='searchjob' />

        </div>


      </div>

      <div>
        <h1 className=' text-5xl ml-32'> Our Services</h1>

        <div className=" w-[80%] mx-auto  space-x-32 ml-32 flex flex-row justify-between   ">
          <Card
            hoverable
            title="Job Search Made Easy"
            className=' mt-5 max-w-[25%]'
            onClick={jobSearch}
          >
            <p className=' text-blue-600'>
              Our personalized job search platform enables you to discover relevant job listings based on your role, experience, and location preferences, making your job search easy At Opportunity Knocks, we understand the frustration that comes with finding the perfect job. That’s why we’ve created a personalized job search platform designed to make your job search easy and efficient.
              Our platform is tailored to your unique needs, allowing you to discover relevant job listings based on your role, experience, and location preferences.
            </p>
          </Card>

          <Card
            hoverable
            title="Advanced Search Filters"
            className=' mt-5 max-w-[25%]'
            onClick={filterSearch}

          >
            <p className='text-blue-600'>
              Our advanced search filters allow you to refine your job search and find the job that suits your needs. Our filters include location, salary, job type, and more, so you can find the perfect job for you.

              Our filters are designed to save you time and effort by presenting you with the most relevant job listings. You can customize your search based on your preferences, making it easy to find the job that matches your skills and experience.making it easy to find the job that matches your skills and experience.
            </p>
          </Card>

          <Card
            hoverable
            title="About Us"

            className=' mt-5 max-w-[25%]'

          >
            <p className='text-blue-600'>
              Opportunity Knocks is a job search community that is committed to helping job seekers find the perfect job. Our platform is designed to take the hassle out of job hunting and make the process easy and efficient.

              Our team of experts is dedicated to providing you with the best possible job search experience. We are constantly updating our database to ensure you have access to the most recent job openings, and our filters allow you to refine your search and find the job that suits your needs.
            </p>
          </Card>
        </div>
      </div>

      <div className='flex flex-row ml-32 space-x-64 mt-5 '>
        <div>
          <h2 className=' text-4xl '>Features</h2>
          <div className='mt-4 text-2xl'>
            <p>
              <CheckOutlined className=" text-green-700" />   Advanced Job Search Filter</p>
            <p> <CheckOutlined className=" text-green-700" />   Personalized Job Listings</p>
            <p>  <CheckOutlined className=" text-green-700" />  Worldwide Opportunities</p>
            <p> <CheckOutlined className=" text-green-700" />   Remote and Office Work  </p>
            <p></p>
          </div>
        </div>

        <div>
          <h2 className=' text-4xl '>Benifits</h2>
          <div className='mt-4 text-2xl'>
            <p>
              <CheckOutlined className=" text-green-700" />   Efficient Job Search</p>
            <p> <CheckOutlined className=" text-green-700" />   Tailored Job Listings</p>
            <p> <CheckOutlined className=" text-green-700" />   Increased Visibility</p>
            <p>
              <CheckOutlined className=" text-green-700" />   Worldwide Opportunities</p>

          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Home
