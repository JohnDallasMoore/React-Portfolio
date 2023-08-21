import React from 'react'
import LinkedIn from '../images/LinkedIn.svg'
import GitHub from "../images/GitHub.svg"

function Contact() {
  return (
    <div id="contact" className="lg:snap-start lg:h-screen bg-gray-800">

            <section className="bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight lg:text-6xl text-white">Contact Me</h2>
                        <p className="mb-6 font-light text-gray-400 md:text-lg">
                              moore.johndallas@gmail.com
                        </p>
                        <p className="mb-6 font-light text-gray-400 md:text-lg">(785)409-8269</p>
                            <div className="flex flex-row justify-center">
                                <button onClick={() => window.open('https://github.com/JohnDallasMoore', '__blank')} className='mx-4 bg-gray-900 mb-2 ml-2inline-block rounded text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'>
                                    <img className="mx-8 p-2"  src={GitHub} alt="" style={{cursor: "pointer", width: '4em'}} />
                                </button>
                                <button onClick={() => window.open('https://www.linkedin.com/in/john-dallas-moore/', '__blank')} className='mx-4 bg-[#0077b5] mb-2 ml-2inline-block rounded text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'>
                                    <img className="mx-8 p-2"  src={LinkedIn} alt="" style={{cursor: "pointer", width: '4em'}} />  
                                </button>
                            
                            </div>
                        
                    </div>
                </div>
            </section>
    
            <section className="bg-gray-800">
                <div className="py-0 px-4 mx-auto max-w-screen-md">
                    <form action="https://api.sheetmonkey.io/form/hMj4F3QZemK3y58wdYokuc" method="post" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                            <input type="email" name="Email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@example.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                            <input type="text" name="Subject" id="subject" className="block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let me know how I can help" required></input>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
                            <textarea id="message" name="Message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm-light border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
  )
}

export default Contact