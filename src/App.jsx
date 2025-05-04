import { useState, useRef, useEffect } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';
import RecipeHeader from './components/RecipeHeader';
import RecipeFooter from './components/RecipeFooter';
import { getRecipeFromMistral } from './ai'
import recipeLogo from "../public/recipe-book.png"


export default function App() {
  const [ingredients, setIngredients] = useState([/*"Egg", "Milk", "Ground cinnamon", "Ground nutmeg", "Slice bread crust on"*/]);
  const [recipe, setRecipe] = useState('');
  const resultRef = useRef(null);

  const generateRecipe = async (ingredients) => {
    setRecipe('Generating...');
    const result = await getRecipeFromMistral(ingredients.split(',').map(i => i.trim()))
    setRecipe(result)
  }

  useEffect(() => {
    if (recipe && recipe !== 'Generating...' && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [recipe]);

  console.log("API KEY from env:", import.meta.env.VITE_OPENROUTER_API_KEY);

  return (
    <>
      <RecipeHeader />
      <div className='flex flex-col items-center h-screen pt-30'>
        <div className='flex flex-col items-center w-full max-w-[800px] mx-auto'>
          <img 
              src={recipeLogo}
              alt="recipe book icon" 
              className="w-35 mb-2"
          />
          <h2 className='text-4xl md:text-5xl font-bold px-2 mb-3.5 text-center'>
            AI Recipe Generator
          </h2>
        </div>
      <p 
        className='text-center text-text-base sm:text-lg text-gray-800 px-3 mb-2 max-w-2xl'
        >
          Lets you enter 4 ingredients and get 
          a full recipe powered by AI. Just type your ingredients, 
          hit generate, and get a cooking idea instantly!
      </p>

      <RecipeForm onGenerate={generateRecipe} ingredients={ingredients} setIngredients={setIngredients} />
      </div>
      {recipe && recipe !== 'Generating...' && 
      (
        <div ref={resultRef} className='flex flex-col items-center py-3'>
          <RecipeCard recipe={recipe} />
        </div>
      )}
      <RecipeFooter />
    </>
  )
}
