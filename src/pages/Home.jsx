import React from 'react'


function Home() {
  return (
    <section  class="bg-center h-screen bg-[length:1400px] lg:bg-cover bg-[url('hero.jpeg')] bg-gray-700 bg-blend-multiply">
                <div class="my-auto h-screen px-4 mx-auto max-w-screen-xl text-center py-48 lg:py-80">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-8xl">John Dallas Moore</h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48">Full Stack Web Developer</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <button class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                            About Me
                        </button>
                        <button class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Projects
                        </button>  
                    </div>
                </div>
            </section>
  )
}

export default Home