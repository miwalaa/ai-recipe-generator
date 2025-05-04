import sandwich from '../../public/sandwich.png'
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

export default function RecipeResult({ recipe }) {
  return (
    <>
      <img src={sandwich} alt="sandwich icon" className='w-35 mb-2' />
      <h2 className="text-4xl md:text-5xl font-bold px-2 mb-3.5 text-center">Generated Recipe</h2>
      <div className='result-recipe-container prose prose-sm sm:prose-base max-w-none text-gray-800 border-2 rounded-md shadow-md' aria-live='polite'>
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </>
  )
}
