import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

export default function RecipeForm({ onGenerate, ingredients, setIngredients }) {


    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        toast.success("Ingredients added!")
    }
    
      const handleSubmit = async (e) => {
          e.preventDefault();
          
          const input = ingredients.filter(Boolean).join(', ');

          const promise = onGenerate(input)

          toast.promise(promise, {
            loading: 'Generating recipe...',
            success: 'Recipe ready!',
            error: 'Failed to generate recipe'
          })
          await promise;
      };

    return (
        <div className='px-10 py-5 w-[90%] max-w-[800px] 
                    bg-white mt-5 border-2 rounded-md shadow-md'>
            <form className="flex flex-col" action={addIngredients}>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Input 
                        type="text" 
                        placeholder='e.g. tomato, egg, cheese' 
                        aria-label='Add ingredient'
                        name='ingredient'
                        className="w-full sm:w-150"
                    />
                    <Button variant="outline" className="w-full sm:w-auto">Add ingredient</Button>
                </div>
                <ol className="list-decimal grid grid-cols-none sm:grid-cols-2 pl-5 mt-3" >
                    {
                        ingredients.map((val, i) => (
                            <li className="text-base sm:text-lg" key={i}>{val}</li>
                        ))
                    }
                </ol>
                {ingredients.length >= 4 && (
                    <Button className="w-full sm:w-80 self-center mt-3 font-bold" onClick={handleSubmit}>
                    Generate Recipe
                    </Button>
                )}
            </form>
        </div>
    )
}