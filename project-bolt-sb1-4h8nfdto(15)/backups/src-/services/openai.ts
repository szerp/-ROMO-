import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.warn('OpenAI API key is missing. Recipe generation will be disabled.');
}

const openai = new OpenAI({
  apiKey: apiKey || '',
  dangerouslyAllowBrowser: true
});

export async function generateMealPlan(ingredients: string[]): Promise<string> {
  if (!apiKey) {
    return 'Recipe generation is disabled. Please add your OpenAI API key to continue.';
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful meal planning assistant specialized in creating healthy, balanced recipes."
        },
        {
          role: "user",
          content: `I have these ingredients: ${ingredients.join(', ')}. Can you suggest a healthy recipe that uses these ingredients?`
        }
      ]
    });

    return response.choices[0]?.message?.content || 'No recipe generated';
  } catch (error) {
    console.error('Error generating recipe:', error);
    return 'Failed to generate recipe. Please try again.';
  }
}