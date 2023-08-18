import React from 'react'

function About() {
  return (
    <div id="about" class="lg:snap-start lg:h-screen bg-gray-900">
            <div class="grid content-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-48 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">About Me</h1>
                    <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">I'm an ambitious professional currently enrolled in the Full Stack Coding Bootcamp at the University of Kansas, dedicated to expanding my web development skills. Passionate about technology, I stay ahead of industry trends and thrive in high-pressure environments. With strong problem-solving abilities, I aim to create impactful and user-friendly web applications.</p>
                    <div class="mb-4 border-b border-gray-700">
                        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Skills</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Education</button>
                            </li>
                            <li class="mr-2" role="presentation">
                                <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Experience</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div class="hidden p-4 rounded-lg bg-gray-900" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="flex flex-wrap content text-lg-center justify-start mb-6 text-white">
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">HTML</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">CSS</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">TypeScript</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">jQuery</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Bootstrap</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Tailwind</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Node</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Rest API's</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Git</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">MySQL</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Mongo</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">NoSQL</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Express</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Sequelize</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Handlebars</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Model View Controllers</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Object Oriented Programming</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Object-Rational Mapping</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Jest</span>
                                <span class="bg-blue-900 text-blue-300 text-xl mt-2 font-medium mr-2 px-2.5 py-0.5 rounded">Heroku</span>
                            </div>
                            
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <ol class="items-center sm:flex">
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                            <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-white">University of Kansas <br/>Coding Bootcamp</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Mar 2023 - Sep 2023</time>
                                        <p class="text-base font-normal text-gray-400">Full Stack Web Development Certification</p>
                                    </div>
                                </li>
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                            <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-white">Baker University <br/>School of Nursing</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Aug 2018 - May 2020</time>
                                        <p class="text-base font-normal text-gray-400">Bachelors of Science - Nursing</p>
                                    </div>
                                </li>
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                            <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-white">University of Kansas <br/>General Studies</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Aug 2014 - May 2018</time>
                                        <p class="text-base font-normal text-gray-400">Bachelors of Liberal Arts and Sciences</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div class="hidden p-4 rounded-lg bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <ol class="items-center inline-flex justify-center sm:flex">
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                            <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-white">Stormont Vail <br/>Emergency Department</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Sep 2020 - Current</time>
                                        <p class="text-base font-normal text-gray-400">Registered Nurse</p>
                                    </div>
                                </li>
                                <li class="relative mb-6 sm:mb-0">
                                    <div class="flex items-center">
                                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                            <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                                    </div>
                                    <div class="mt-3 sm:pr-8">
                                        <h3 class="text-lg font-semibold text-white">Stormont Vail <br/>Emergency Department</h3>
                                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Dec 2019 - Sep 2020</time>
                                        <p class="text-base font-normal text-gray-400">Nurse Aide</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img class="ml-6 rounded-full justify-center" src="/dallas-pic.jpg" alt="mockup"></img>
                </div>                
            </div>
        </div>
  )
}

export default About