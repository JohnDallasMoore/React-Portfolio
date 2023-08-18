import React from 'react'
import BrewFinder from "../images/BrewFinder.png"
import BrewReview from "../images/BrewReview.png"
import NoteTaker from "../images/NoteTaker.png"

function Projects() {
  return (
    <div id="projects" className="lg:snap-start lg:h-screen bg-gray-800 py-6 lg:py-24">
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">My Projects</h1>
            <p className="mb-6 text-lg text-center font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here are some completed projects showcasing my creative solutions and significant contributions.</p>
            <div id="project-container" className="flex-wrap lg:flex justify-around lg:py-24">
                <div className="justify-center mx-auto my-6 max-w-sm border rounded-lg shadow bg-gray-900 border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={BrewReview} alt="" />
                    </a>
                    <div className="text-center p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">BrewReview</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">
                            Beer enthusiasts can share their experiences by posting, liking, and commenting on reviews using this app.</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/JohnDallasMoore/BrewReview" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            GitHub
                            
                            </a>
                            <a href="https://brewreview-c780e18c5286.herokuapp.com/" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Deploy
                                
                            </a>
                        </div>
                    </div>
                </div>
    
                <div className="my-6 mx-auto max-w-sm border rounded-lg shadow bg-gray-900 border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={BrewFinder} alt="" />
                    </a>
                    <div className="text-center p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">BrewFinder</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Discover and locate breweries using the Open Brewery Database and Google Maps API for easy planning.</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/JohnDallasMoore/BrewFinder" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                GitHub
                                
                            </a>
                            <a href="https://johndallasmoore.github.io/BrewFinder/" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Deploy
                                
                            </a>
                        </div>
                    </div>
                </div>
    
                <div className="my-6 mx-auto max-w-sm border rounded-lg shadow bg-gray-900 border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={NoteTaker} alt="" />
                    </a>
                    <div className="text-center p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Note Taker</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Create, save, and manage personal notes effortlessly with a user-friendly web application.</p>
                        <div className="flex justify-center">
                            <a href="https://github.com/JohnDallasMoore/Note-Taker" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                GitHub
                                
                            </a>
                            <a href="https://note-taker-0.herokuapp.com/" className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                Deploy
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Projects