import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'

export default function RecipeFooter() {
  return (
    <div className="w-full py-5">
    <div className="w-full container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <a 
            href="https://github.com/miwalaa/ai-recipe-generator"
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-black transition'
            >
            <FaGithub size={28} />
        </a>
        <a 
            href="https://discordapp.com/users/1296288536495915072"
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-black transition'
            >
            <FaDiscord size={28} />
        </a>
      </div>
      <p className="mt-4 md:mt-0 text-sm">&copy; 2025 Miwa. All rights reserved.</p>
    </div>
  </div>
  )
}
