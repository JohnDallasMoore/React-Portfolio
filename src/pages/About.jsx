import React from 'react'

function About() {
  return (
    
    <div id="about" className="lg:snap-start lg:h-screen bg-gray-900">
            <div className="grid content-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-48 lg:grid-cols-12">
                
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">About Me</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">I'm an ambitious professional currently enrolled in the Full Stack Coding Bootcamp at the University of Kansas, dedicated to expanding my web development skills. Passionate about technology, I stay ahead of industry trends and thrive in high-pressure environments. With strong problem-solving abilities, I aim to create impactful and user-friendly web applications.</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="ml-6 rounded-full justify-center" src="/dallas-pic.jpg" alt="mockup"></img>
                </div>  
                            
            </div>
            <div className="bg-gray-900 flex justify-center justify-around py-8">
                <div class="max-w-lg w-3/12 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                    <h5 class="text-center mb-2 text-3xl font-bold tracking-tight text-white">Skills</h5>
                    <hr className="mb-8"/>
                    <div class="flex flex-wrap justify-center text-lg-center justify-start my-11 text-white">
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">CSS</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">TypeScript</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">jQuery</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Bootstrap</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Tailwind</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Node</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Rest API's</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Git</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">MySQL</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Mongo</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">NoSQL</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Express</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Sequelize</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Handlebars</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Model View Controllers</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Object Oriented Programming</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Object-Rational Mapping</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Heroku</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Jest</span>
                                <span class="bg-blue-900 text-blue-300 text-2xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">GraphQL</span>
                            </div>
                    
                </div>

                <div class="max-w-lg w-3/12 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                    <h5 class="text-center mb-2 text-3xl font-bold tracking-tight text-white">Education</h5>
                    <hr className="mb-8"/>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li class="mb-10 ml-6">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">University of Kansas <br/> Coding Bootcamp</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Mar 2023 - Sep 2023</time>
                            <p class="text-base font-normal text-gray-400">Full Stack Web Development Certification</p>
                            
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">Baker University <br/> School of Nursing</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Aug 2018 - May 2020</time>
                                        <p class="text-base font-normal text-gray-400">Bachelors of Science - Nursing</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">University of Kansas <br/> General Studies</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Aug 2014 - May 2018</time>
                                        <p class="text-base font-normal text-gray-400">Bachelors of Liberal Arts and Sciences</p>
                        </li>
                    </ol>
                   
                </div>

                <div class="max-w-lg w-3/12 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
                    <h5 class="text-center mb-2 text-3xl font-bold tracking-tight text-white">Experience</h5>
                    <hr className="mb-8"/>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li class="mb-10 ml-6">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">University of Kansas <br/> Coding Bootcamp</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Mar 2023 - Sep 2023</time>
                            <p class="text-base font-normal text-gray-400">Student Developer</p>
                            
                        </li>
                        <li class="mb-10 ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">Stormont Vail <br/>Emergency Department</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Sep 2020 - Current</time>
                            <p class="text-base font-normal text-gray-400">Registered Nurse</p>
                        </li>
                        <li class="ml-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 class="text-lg font-semibold text-white">Stormont Vail <br/>Emergency Department</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Dec 2019 - Sep 2020</time>
                            <p class="text-base font-normal text-gray-400">Patient Care Technician</p>
                        </li>
                    </ol>
                    
                </div>
            </div>

            

        </div>
  )
}

export default About