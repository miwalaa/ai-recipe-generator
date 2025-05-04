const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(', ');

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://your-site-name.vercel.app/', // Replace with your actual Vercel URL
        'X-Title': 'AI Recipe Generator'
      },
      body: JSON.stringify({
        model: 'mistralai/mixtral-8x7b-instruct',
        messages: [
          { role: 'system', content: 'You are a helpful and creative chef who gives fun, easy-to-follow recipes based on ingredients.' },
          { role: 'user', content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }
        ],
        max_tokens: 1024
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'No recipe returned.';
  } catch (err) {
    console.error('Error generating recipe:', err);
    return 'Sorry, something went wrong.';
  }
}
