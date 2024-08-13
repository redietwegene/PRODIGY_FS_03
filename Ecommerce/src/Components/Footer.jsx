import React from 'react'

function Footer() {
  return (
      <div>
           <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:underline"> Terms of Service</a>
          </p>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
