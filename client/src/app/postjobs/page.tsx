import { FC } from 'react'
import Navtop from '../components/Navtop'
import Footer from '../components/Footer'

interface PostJobsProps {
  
}

const PostJobs: FC<PostJobsProps> = ({}) => {
  return <div>
    <Navtop />
    <hr />
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Post a Job</h2>
    <form action="#" method="POST" className="space-y-6">
        {/* <!-- Job Title --> */}
        <div>
            <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" id="job-title" name="job-title" required 
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        {/* <!-- Company Name --> */}
        <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="company-name" name="company-name" required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        {/* <!-- Location --> */}
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" name="location" required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        {/* <!-- Job Type --> */}
        <div>
            <label htmlFor="job-type" className="block text-sm font-medium text-gray-700">Job Type</label>
            <select id="job-type" name="job-type" required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
            </select>
        </div>

        {/* <!-- Salary Range --> */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="salary-min" className="block text-sm font-medium text-gray-700">Minimum Salary</label>
                <input type="number" id="salary-min" name="salary-min" required 
                       className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
            <div>
                <label htmlFor="salary-max" className="block text-sm font-medium text-gray-700">Maximum Salary</label>
                <input type="number" id="salary-max" name="salary-max" required
                       className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>
        </div>

        {/* <!-- Job Description --> */}
        <div>
            <label htmlFor="job-description" className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea id="job-description" name="job-description" rows={6} required
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        {/* <!-- Application Link --> */}
        <div>
            <label htmlFor="application-link" className="block text-sm font-medium text-gray-700">Application Link or Email</label>
            <input type="url" id="application-link" name="application-link" required
                   className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        {/* <!-- Submit Button --> */}
        <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Post Job
            </button>
        </div>
    </form>
</div>
<Footer />
  </div>
}

export default PostJobs