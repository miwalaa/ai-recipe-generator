import { FaGithub } from 'react-icons/fa';
import recipeLogo from "../../public/recipe-book.png"

export default function RecipeHeader() {
  return (
    <header 
      style={{ backgroundColor: "#303030" }} 
      className="absolute flex items-center justify-between top-0 left-0 w-full shadow-md p-2 z-50"
      >
        <div className='flex direction-column items-center gap-1'>
          <img src={recipeLogo} alt="recipe book icon" className='w-8' />
          <h1 className="text-xl sm:text-xl md:text-2xl text-white" style={{ color: "#DCDCDC"}} >AI Recipe Generator</h1>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/miwalaa/ai-recipe-generator"
            target='_blank'
            rel='noopener noreferrer'
            className='hover:brightness-125 transition duration-300'
            style={{ color: "#DCDCDC"}} 
          >
            <FaGithub size={28} />
          </a>
        </div>
    </header>
  )
}
