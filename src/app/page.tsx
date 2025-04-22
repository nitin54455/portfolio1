"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/40 dark:via-indigo-950/40 dark:to-purple-950/40 opacity-80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 hover:scale-105">
                <Image 
                  src="/your-photo.jpg" 
                  alt="Priyanshu Dadhich" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:order-1 text-center lg:text-left flex-1">
              <div className="inline-block mb-4 px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-300 text-sm font-medium">
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Priyanshu Dadhich
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
                Bachelor of Technology - <span className="font-semibold text-indigo-600 dark:text-indigo-400">Computer Science and Engineering</span>
              </p>
              
              {/* Contact info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <a href="mailto:priyanshuadadhich@gmail.com" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">priyanshuadadhich@gmail.com</span>
                </a>
                <a href="tel:+919023233779" className="group flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">+91-9023233779</span>
                </a>
              </div>
              
              {/* Social/Resume buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="https://github.com/pdadhich2004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/priyanshudadhich96057" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Moved above Skills */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-80"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">About Me</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 -z-0"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a focus on creating impactful solutions
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col-reverse md:flex-row gap-10 items-center">
              <div className="md:w-2/3">
                <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science and Engineering</span> student at Lovely Professional University, Punjab, with expertise in web development and programming.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  My technical journey spans across various technologies and frameworks, including C++, Java, Python, JavaScript and React. I'm passionate about creating user-centric solutions and continuously expanding my knowledge in emerging technologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-blue-800 dark:text-blue-300">Web Development</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Creating responsive and modern web applications</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 p-5 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-purple-800 dark:text-purple-300">Programming</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Proficient in multiple programming languages</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-5 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-green-800 dark:text-green-300">Problem Solving</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Creative solutions to complex problems</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-10 dark:opacity-30"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image 
                      src="/your-photo.jpg" 
                      alt="Priyanshu Dadhich" 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center gap-4">
                  <a href="https://github.com/pdadhich2004" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white shadow-md transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/priyanshudadhich96057" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-md transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="mailto:priyanshuadadhich@gmail.com" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white shadow-md transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 opacity-80"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Skills & Expertise</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-indigo-200 dark:bg-indigo-900 opacity-50 -z-0"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skillset and competencies
            </p>
          </div>
          
          {/* Skills Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full -translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/50 dark:bg-purple-900/20 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6 inline-flex items-center text-indigo-700 dark:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Programming Languages
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['C++', 'Java', 'Python', 'JavaScript', 'C', 'PHP', 'C Sharp'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 inline-flex items-center text-purple-700 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                    Tools & Platforms
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6 inline-flex items-center text-blue-700 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    Frameworks
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['HTML and CSS', 'Bootstrap', 'NodeJS', 'React'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6 inline-flex items-center text-green-700 dark:text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Soft Skills
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Problem-Solving Skills', 'Creativity', 'Teamwork', 'Time Management', 'Adaptability'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                        <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400"></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skill bars (optional) */}
            <div className="mt-12 relative z-10 gap-8 hidden md:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Proficiency</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Web Development</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Programming</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Database Management</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Areas of Interest</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Machine Learning</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Game Development</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Web Application Development</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* Internship Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 opacity-80"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-200/30 dark:bg-green-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Professional Experience</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-green-200 dark:bg-green-800 opacity-50 -z-0"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Where I've worked and the skills I've applied in real-world environments
            </p>
          </div>
          
          {/* Outlier AI Internship */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 mb-8">
            <div className="relative h-36 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">OA</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 py-1 px-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold shadow-md">
                Since Sep 2024
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Outlier AI</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-800 dark:text-blue-300">
                      AI Trainer/Contributor
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <span className="font-medium">Position:</span>
                      <span className="text-gray-700 dark:text-gray-300">AI Trainer/Contributor</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Duration:</span>
                      <span className="text-gray-700 dark:text-gray-300">Since September 2024</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Contributing to diverse AI model training projects by performing data annotation and quality assurance tasks across various domains.
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Worked on environmental monitoring from "village_garde" and software development from "python_scree"</p>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Completed tasks efficiently and met project deadlines while working remotely</p>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Utilized various project management software for AI training tasks</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 border-l border-gray-200 dark:border-gray-700 pl-8">
                  <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Python", "Data Annotation", "AI Training", "Web-based Tools"].map((tech) => (
                      <div key={tech} className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 rounded-lg flex items-center justify-center shadow-sm transform transition-transform hover:scale-105">
                        <span className="font-medium text-blue-800 dark:text-blue-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Key Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["AI Development", "Data Analysis", "Quality Assurance", "Time Management"].map((skill) => (
                        <span key={skill} className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SankalpTaru Foundation Internship */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-36 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-green-600 dark:text-green-400">ST</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 py-1 px-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-green-600 dark:text-green-400 text-sm font-semibold shadow-md">
                Jul'23 – Aug'23
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">SankalpTaru Foundation</h3>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-800 dark:text-green-300">
                      IT & Innovations Department
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <span className="font-medium">Position:</span>
                      <span className="text-gray-700 dark:text-gray-300">Intern</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Duration:</span>
                      <span className="text-gray-700 dark:text-gray-300">July 2023 - August 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Designed and enhanced the IT infrastructure for the IT & Innovations Department at SankalpTaru Foundation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Developed solutions promoting environmental sustainability</p>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Improved platform efficiency and supported the organization's green initiatives</p>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Utilized web technologies to create user interfaces for environmental data</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3 border-l border-gray-200 dark:border-gray-700 pl-8">
                  <h4 className="font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech) => (
                      <div key={tech} className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-3 rounded-lg flex items-center justify-center shadow-sm transform transition-transform hover:scale-105">
                        <span className="font-medium text-green-800 dark:text-green-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Key Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Sustainability", "UI Design", "Web Development", "Environmental Tech"].map((skill) => (
                        <span key={skill} className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="font-medium">Environmental sustainability focus</span>
                </div>
                
                <a href="#" className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium group">
                  <span>View Certificate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-80"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Featured Projects</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 -z-0"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore some of my recent work showcasing my skills in web development and software engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1 - Movie Recommendation System */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Movie Recommendation System</h3>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">This project leverages machine learning to suggest personalized movie recommendations using content-based filtering and collaborative filtering. A hybrid model combines both approaches for better accuracy.</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"].map((tech) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm text-blue-800 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Aug'24 - Nov'24</div>
                </div>
              </div>
            </div>
            
            {/* Project 2 - Tic Tac Toe Game */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-600"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">Tic Tac Toe Game</h3>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">Developed an interactive game with engaging mechanics, dynamic animations, and real-time physics using Unity and C#. Implemented AI-driven behaviors for an immersive experience.</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Unity", "C#", "Game Physics", "Animation", "UI/UX Design"].map((tech) => (
                      <span key={tech} className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm text-purple-800 dark:text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jan'24 - May'24</div>
                </div>
              </div>
            </div>
            
            {/* Project 3 - Real-Time Chat App */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-green-400 to-teal-600"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Real-Time Chat App</h3>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">Built a secure and scalable real-time chat application that enables instant communication with private and group messaging, media sharing, and real-time updates using WebSockets.</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "React", "Socket.io", "MongoDB", "JWT"].map((tech) => (
                      <span key={tech} className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-sm text-green-800 dark:text-green-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jun'24 - Jul'24</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://github.com/pdadhich2004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Todo Demo Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 opacity-80"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Certifications & Credentials</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-800 opacity-50 -z-0"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional qualifications and achievements that showcase my continuous learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Cloud Computing", 
                org: "NPTEL (IIT Kharagpur)", 
                date: "Jul'24 - Oct'24",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                color: "from-blue-500 to-indigo-600"
              },
              { 
                title: "Complete Interview Preparation (C++)", 
                org: "GeeksforGeeks", 
                date: "Jun'24 - Jul'24",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                color: "from-green-500 to-teal-600"
              },
              { 
                title: "Mastering Data Structures & Algorithms", 
                org: "Udemy", 
                date: "Nov'24 - Dec'24",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                color: "from-red-500 to-pink-600"
              },
              { 
                title: "Python Programming Language", 
                org: "CipherSchools", 
                date: "Sept'22 - Jan'23",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                color: "from-yellow-500 to-amber-600"
              },
              { 
                title: "HTML, CSS & JavaScript Language", 
                org: "CipherSchools", 
                date: "Sept'22 - Jan'23",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                color: "from-purple-500 to-indigo-600"
              },
              { 
                title: "Regional Science Congress (Pune)", 
                org: "Achievement", 
                date: "Mar'18 - May'18",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                color: "from-cyan-500 to-blue-600"
              }
            ].map((cert, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert.title}</h3>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ml-2">{cert.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.org}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">Verified</span>
                        </div>
                        
                        <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm hover:underline font-medium group-hover:translate-x-1 transition-transform duration-300">
                          View Certificate
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore More Certifications
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="relative z-10">Achievements</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 -z-0"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400">Regional Science Congress</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Attended Regional Science Congress held in Pune, demonstrating scientific knowledge and research abilities.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">National Boxing Championship</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Secured 3rd rank in the National Boxing Championship, demonstrating athletic excellence and competitive spirit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - REMOVING THIS SINCE WE MOVED IT ABOVE */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="relative z-10">Education</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 -z-0"></span>
          </h2>
          
          <div className="space-y-8">
            {/* LPU */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-bl-full -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-400">LPU</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lovely Professional University</h3>
                    <div className="flex items-center">
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                        Since August 2022
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Bachelor of Technology - Computer Science and Engineering</span>
                    <span className="text-sm ml-3 text-gray-600 dark:text-gray-400 font-medium">Percentage: 63%</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    Punjab, India
                  </p>
                </div>
              </div>
            </div>
            
            {/* JNV */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent dark:from-purple-900/20 dark:to-transparent rounded-bl-full -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl md:text-2xl font-bold text-purple-800 dark:text-purple-400">JNV</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jawahar Navodaya Vidyalaya</h3>
                    <div className="flex items-center">
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-400 text-sm font-medium px-3 py-1 rounded-full">
                        April 2020 - March 2021
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Intermediate</span>
                    <span className="text-sm ml-3 text-gray-600 dark:text-gray-400 font-medium">Percentage: 91.2%</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    Gandhinagar, Gujarat
                  </p>
                </div>
              </div>
            </div>
            
            {/* S.R. Public Sen. Sec. School */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent dark:from-green-900/20 dark:to-transparent rounded-bl-full -z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-xl md:text-2xl font-bold text-green-800 dark:text-green-400">SRPS</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">S.R.Public Sen.Sec.School</h3>
                    <div className="flex items-center">
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full">
                        April 2018 - March 2019
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Matriculation</span>
                    <span className="text-sm ml-3 text-gray-600 dark:text-gray-400 font-medium">Percentage: 83%</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    Kota, Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900 opacity-50 -z-0"></span>
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Get In Touch</h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Email</h4>
                      <a href="mailto:priyanshuadadhich@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">priyanshuadadhich@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Phone</h4>
                      <a href="tel:+919023233779" className="text-blue-600 dark:text-blue-400 hover:underline">+91 9023233779</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-blue-600 dark:text-blue-400" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</h4>
                      <a href="https://linkedin.com/in/priyanshudadhich96057" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">linkedin.com/in/priyanshudadhich96057</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-blue-600 dark:text-blue-400" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">GitHub</h4>
                      <a href="https://github.com/pdadhich2004" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/pdadhich2004</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 h-full">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl h-full flex flex-col justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">Priyanshu Dadhich</h3>
              <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/pdadhich2004" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/priyanshudadhich96057" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a 
                href="mailto:priyanshuadadhich@gmail.com" 
                className="text-red-600 hover:text-red-800 transition-colors duration-200 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500">Made with <span className="text-red-500">❤</span> using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>

      
      
      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 relative overflow-hidden">
        {/* Certificates section content */}
      </section>
    </main>
  );
}
