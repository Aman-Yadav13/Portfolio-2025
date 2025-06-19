"use client";

import { Download } from "lucide-react";

const ResumePage = () => {
  const handleDownloadClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/assets/Aman_Yadav_Resume_20_6_25.pdf";
    downloadLink.download = "Aman_Yadav_Resume.pdf";
    downloadLink.click();

    setTimeout(() => {
      const viewLink = document.createElement("a");
      viewLink.href = "/assets/Aman_Yadav_Resume_20_6_25.pdf";
      viewLink.target = "_blank";
      viewLink.rel = "noopener noreferrer";
      viewLink.click();
    }, 100);
  };

  const handlePortfolioClick = () => {
    window.open("/", "_blank");
  };

  return (
    <>
      <div className="max-w-7xl w-full flex items-center justify-end sm:pr-4 pr-4 py-4 mx-auto gap-2">
        <button
          className="gap-2 rounded-md bg-white text-yellow-600 border border-yellow-600 transition-all flex items-center justify-center sm:px-4 sm:py-2 py-1 px-3 text-base sm:text-lg hover:text-white hover:bg-yellow-600 hover:border-transparent cursor-pointer"
          onClick={handlePortfolioClick}
        >
          <p>Portfolio</p>
        </button>
        <button
          className="gap-2 rounded-md bg-indigo-500 text-gray-100 transition-all flex items-center justify-center sm:px-4 sm:py-2 py-1 px-3 text-base sm:text-lg hover:text-white hover:bg-indigo-700 cursor-pointer"
          onClick={handleDownloadClick}
        >
          <Download className="h-4 w-4 sm:h-5 sm:w-5" />
          <p>Download</p>
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Personal & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-indigo-800 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
              <h1 className="text-3xl font-bold">Aman Yadav</h1>
              <p className="mt-2 text-blue-100">
                Software Engineer | Full Stack Developer
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:amanytests01@gmail.com"
                    className="hover:underline"
                  >
                    amanytests01@gmail.com
                  </a>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 9785177731</span>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>VIT Vellore, Tamil Nadu</span>
                </div>

                <div className="flex items-center mt-4 space-x-4 pt-2 border-t border-blue-500/30">
                  <a
                    href="https://github.com/aman-yadav13"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center hover:text-blue-300 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/aman-yadav13"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center hover:text-blue-300 transition"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-200">
                Technical Expertise
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Typescript",
                      "JavaScript",
                      "Python",
                      "C++",
                      "Java",
                      "SQL",
                      "HTML",
                      "CSS",
                      "Bash",
                    ].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Next.js",
                      "React Native",
                      "Redux",
                      "Tailwind CSS",
                      "Material UI",
                      "Three.js",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-50 text-purple-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    Backend & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express",
                      "GraphQL",
                      "MongoDB",
                      "AWS",
                      "Docker",
                      "Kubernetes",
                      "Firebase",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    AI/ML
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TensorFlow",
                      "PyTorch",
                      "NLP",
                      "LLMs (GPT)",
                      "OpenCV",
                      "Scikit-Learn",
                      "Model Deployment",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-200">
                Education
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-gray-600">VIT Vellore</p>
                  <p className="text-gray-600">2022-2026</p>
                  <p className="mt-1 font-medium">
                    CCPA: <span className="text-indigo-700">9.47</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800">
                    Senior Secondary – Science Math
                  </h3>
                  <p className="text-gray-600">Defense Public School</p>
                  <p className="text-gray-600">2022</p>
                  <p className="mt-1 font-medium">
                    Percentage: <span className="text-indigo-700">94.4%</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-indigo-800 mb-4 pb-2 border-b border-indigo-200">
                Publications
              </h2>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Machine Learning in Stock Market Prediction
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Performance analysis of ML algorithms for financial
                  forecasting and interdisciplinary knowledge sharing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Projects */}
          <div className="lg:col-span-3 space-y-8">
            {/* Experience Section - Enhanced */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b border-indigo-200">
                Professional Journey
              </h2>

              <div className="space-y-10">
                {/* Experience 1 - Expanded */}
                <div className="relative pl-6 border-l-2 border-indigo-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-indigo-600"></div>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold text-gray-800">
                      Frontend Developer Intern
                    </h3>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      June 2024 - Dec 2024
                    </span>
                  </div>
                  <div className="flex items-baseline mt-1">
                    <span className="font-semibold text-gray-700 mr-2">
                      Ausplutes Tech Private Limited
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                      Founding Employee
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">
                    Developed an AI-powered analytics platform from scratch
                    using React.js and TypeScript, serving enterprise clients
                    across multiple industries.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          AI-Powered No-Code Workflow Builder:
                        </span>
                        <span>
                          {" "}
                          Automated 80%+ of manual processes through
                          drag-and-drop interface, reducing client onboarding
                          time from 2 weeks to 3 days and increasing platform
                          adoption by 45%
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">Secure RBAC System:</span>
                        <span>
                          {" "}
                          Reduced setup time while implementing OAuth2.0 and JWT
                          authentication that eliminated 98% of unauthorized
                          access attempts and passed penetration testing with
                          zero critical vulnerabilities
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Google-Integrated Calendar:
                        </span>
                        <span>
                          {" "}
                          Engineered custom scheduling system with Calendar API
                          integration that reduced meeting conflicts by 75% and
                          increased resource utilization by 3x through automated
                          event optimization algorithms
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Performance Optimization:
                        </span>
                        <span>
                          {" "}
                          Improved dashboard load times through React.memo
                          optimization and lazy loading, reducing bounce rate
                          and increasing session duration by 3.2 minutes
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Data Visualization Suite:
                        </span>
                        <span>
                          {" "}
                          Built reusable D3.js components that helped clients
                          identify operational efficiencies
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Experience 2 - Expanded */}
                <div className="relative pl-6 border-l-2 border-indigo-200">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-indigo-600"></div>
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold text-gray-800">
                      Full Stack Developer Intern
                    </h3>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                      Dec 2023 - Feb 2024
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="font-semibold text-gray-700">
                      White Coast Security
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600">
                    Developed full-stack security platform with Web3 integration
                    used by 8,000+ monthly active users, built with Next.js,
                    Node.js, and Ethereum smart contracts.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Web3 Security Dashboard:
                        </span>
                        <span>
                          {" "}
                          Developed real-time threat monitoring interface
                          processing thousands of security events
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Automated Email System:
                        </span>
                        <span>
                          {" "}
                          Reduced ticket resolution time and increased client
                          satisfaction scores by 33% by implementing Nodemailer
                          with template engine handling daily automated
                          communications
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Security Training Modules:
                        </span>
                        <span>
                          {" "}
                          Developed interactive training portal with learning
                          modules that increased client security compliance and
                          reduced phishing susceptibility
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">
                          Blockchain Integration:
                        </span>
                        <span>
                          {" "}
                          Implemented Ethereum-based document verification that
                          reduced fraud incidents and cut verification costs
                          annually through smart contract automation
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <div>
                        <span className="font-medium">API Security Layer:</span>
                        <span>
                          {" "}
                          Designed rate limiting and JWT authentication that
                          blocked 15,00+ malicious requests monthly, reducing
                          server costs and eliminating 100% of brute force
                          attacks
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section - Enhanced */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 pb-2 border-b border-indigo-200">
                Key Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project 1 - Expanded */}
                <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-indigo-50">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Zenthrall – AI Cloud IDE
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Cloud-based development environment with AI assistance
                        and real-time collaboration features.
                      </p>
                      <ul className="mt-3 space-y-1.5 pl-5 list-disc text-sm text-gray-700">
                        <li>
                          Implemented AI-assisted terminals with intelligent
                          code suggestions
                        </li>
                        <li>
                          Designed scalable infrastructure using GKE-powered
                          cloud VMs
                        </li>
                        <li>
                          Enabled real-time collaboration between developers
                        </li>
                        <li>Optimized containerization for faster execution</li>
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          React
                        </span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                          Kubernetes
                        </span>
                        <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded">
                          AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 - Expanded */}
                <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-green-50">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        Instant Loan Platform
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        AI-driven application processing system with document
                        verification and risk assessment.
                      </p>
                      <ul className="mt-3 space-y-1.5 pl-5 list-disc text-sm text-gray-700">
                        <li>
                          Developed document processing pipeline using OCR and
                          NLP techniques
                        </li>
                        <li>
                          Built fraud detection system with machine learning
                          models
                        </li>
                        <li>
                          Created credit scoring algorithm combining traditional
                          and alternative data
                        </li>
                        <li>
                          Designed secure document storage with AWS S3 and
                          encryption
                        </li>
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          Next.js
                        </span>
                        <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded">
                          PyTorch
                        </span>
                        <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded">
                          AWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Skills */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">
                  Additional Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Full-Stack Development",
                    "Microservices",
                    "Web Security",
                    "Performance Optimization",
                    "Data Analytics",
                    "Distributed Systems",
                    "Data Structures",
                    "Algorithms",
                    "App Development",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
