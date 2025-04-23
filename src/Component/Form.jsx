import React, { useState } from 'react'

export const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastname: "",
        Email: "",
        country: "",
        St: "",
        city: "",
        state: "",
        comments: "",
        candidates: false,
        offers: false,
        pushNotifications:""

    })
    function handleFormdata(e) {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value,
        }))
    }

    function SubmitHandler(e) {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div className="max-w-xl p-8 mx-auto mt-10 bg-white shadow-lg rounded-2xl">
        <form className="flex flex-col gap-6" onSubmit={SubmitHandler}>
          {/* First Name */}
          <div>
            <label htmlFor="firstname" className="block mb-1 text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          {/* Last Name */}
          <div>
            <label htmlFor="lastname" className="block mb-1 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          {/* Email */}
          <div>
            <label htmlFor="Email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          {/* Country */}
          <div>
            <label htmlFor="country" className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>India</option>
              <option>Germany</option>
              <option>China</option>
              <option>Russia</option>
              <option>USA</option>
            </select>
          </div>
      
          {/* Address */}
          <div>
            <label htmlFor="St" className="block mb-1 text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="St"
              name="St"
              value={formData.St}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
      
            <label htmlFor="city" className="block mt-4 mb-1 text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleFormdata}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
      
            <label htmlFor="state" className="block mt-4 mb-1 text-sm font-medium text-gray-700">
              State / Province
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleFormdata}
              placeholder="Bihar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          {/* Checkboxes */}
          <fieldset className="pt-4 border-t border-gray-200">
            <legend className="text-lg font-medium text-gray-900">By Email</legend>
      
            <div className="flex items-start gap-3 mt-3">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={handleFormdata}
                className="mt-1"
              />
              <div>
                <label htmlFor="comments" className="font-medium text-gray-700">Comments</label>
                <p className="text-sm text-gray-500">Get notified when someone posts a comment.</p>
              </div>
            </div>
      
            <div className="flex items-start gap-3 mt-3">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={handleFormdata}
                className="mt-1"
              />
              <div>
                <label htmlFor="candidates" className="font-medium text-gray-700">Candidates</label>
                <p className="text-sm text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
      
            <div className="flex items-start gap-3 mt-3">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={handleFormdata}
                className="mt-1"
              />
              <div>
                <label htmlFor="offers" className="font-medium text-gray-700">Offers</label>
                <p className="text-sm text-gray-500">Get notified when offers are accepted or rejected.</p>
              </div>
            </div>
          </fieldset>
      
          {/* Radio Group */}
          <fieldset className="pt-4 border-t border-gray-200">
            <legend className="mb-2 text-lg font-medium text-gray-900">Push Notifications</legend>
            <p className="mb-3 text-sm text-gray-500">These are delivered via SMS.</p>
      
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="pushNotifications"
                  value="Everything"
                  onChange={handleFormdata}
                  className="mr-2"
                />
                Everything
              </label>
      
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="pushNotifications"
                  value="Same as email"
                  onChange={handleFormdata}
                  className="mr-2"
                />
                Same as email
              </label>
      
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="pushNotifications"
                  value="No Push Notifications"
                  onChange={handleFormdata}
                  className="mr-2"
                />
                No Push Notifications
              </label>
            </div>
          </fieldset>
      
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      

    )
}