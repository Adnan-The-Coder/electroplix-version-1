/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Link from 'next/link'
import React from 'react'

function BuildTogetherQuatation() {
  return (
    <div className="relative mt-20 overflow-hidden rounded-2xl border border-gray-800 shadow-lg shadow-indigo-500/10">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm"></div>
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></div>
      <div className="absolute -left-20 -top-20 size-64 rounded-full bg-indigo-600 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-fuchsia-600 opacity-10 blur-3xl"></div>
      <div className="relative z-10 p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-indigo-900 bg-opacity-50 px-3 py-1 text-sm font-medium text-indigo-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 size-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Collaboration
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
                Let`s Build Something Amazing Together
              </span>
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              Have a vision but need help bringing it to life? Share your requirements and let`s collaborate to create something extraordinary.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                      "Custom web applications tailored to your needs",
                      "Mobile apps with seamless user experiences",
                      "E-commerce solutions to grow your business",
                      "AI and machine learning integrations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-500 bg-opacity-20">
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-3 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-flex items-center rounded-lg border border-transparent bg-gradient-to-r from-indigo-400 to-purple-500 px-6 py-3 text-base font-medium text-black shadow-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="inline-flex items-center rounded-lg border border-indigo-500 bg-transparent px-6 py-3 text-base font-medium text-indigo-400 transition-all duration-300 hover:bg-indigo-900 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl border border-gray-700 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-indigo-500 bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Our Development Process</h3>
                  <p className="mb-6 text-gray-300">From concept to deployment, we follow a collaborative approach to ensure your vision becomes reality.</p>
                  <Link href="#" className="inline-flex items-center text-indigo-400 transition-colors hover:text-white">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 size-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Code pattern background */}
              <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18h1v1h-1zm8-5h1v1h-1zm-5 3h1v1h-1zm3 3h1v1h-1zm-7-8h1v1h-1zm-3 3h1v1h-1zm5-6h1v1h-1zm-5 9h1v1h-1zm8 5h1v1h-1zm-3 3h1v1h-1zm3-7h1v1h-1zm-8 8h1v1h-1zm-3-6h1v1h-1zm10 1h1v1h-1zm-3 3h1v1h-1zm5-8h1v1h-1zm-7 10h1v1h-1zm-1-8h1v1h-1zm3-8h1v1h-1z' fill='%23a78bfa' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                      backgroundSize: '24px 24px'
                    }}></div>
            </div>
            {/* Tech stack icons */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2">
              {['react', 'node', 'python', 'aws'].map((tech, index) => (
                <div key={index} className="flex size-8 items-center justify-center rounded-full bg-gray-800" title={tech}>
                  <span className="text-xs text-indigo-400">{tech.charAt(0).toUpperCase()}</span>
                </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildTogetherQuatation
