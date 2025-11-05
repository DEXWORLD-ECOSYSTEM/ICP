'use server';

/**
 * @fileOverview AI flow to suggest areas for article expansion.
 *
 * - suggestArticleExpansion - Analyzes article content and suggests areas for expansion.
 * - SuggestArticleExpansionInput - Input type for the suggestArticleExpansion function.
 * - SuggestArticleExpansionOutput - Return type for the suggestArticleExpansion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestArticleExpansionInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the article to analyze for potential expansion.'),
});
export type SuggestArticleExpansionInput = z.infer<
  typeof SuggestArticleExpansionInputSchema
>;

const SuggestArticleExpansionOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'A list of suggestions for areas in the article that could be expanded.'
    ),
});
export type SuggestArticleExpansionOutput = z.infer<
  typeof SuggestArticleExpansionOutputSchema
>;

export async function suggestArticleExpansion(
  input: SuggestArticleExpansionInput
): Promise<SuggestArticleExpansionOutput> {
  return suggestArticleExpansionFlow(input);
}

const suggestArticleExpansionPrompt = ai.definePrompt({
  name: 'suggestArticleExpansionPrompt',
  input: {schema: SuggestArticleExpansionInputSchema},
  output: {schema: SuggestArticleExpansionOutputSchema},
  prompt: `You are an AI assistant that analyzes article content and suggests areas for expansion to provide more detail and value to the reader.

  Analyze the following article content:
  {{articleContent}}

  Identify areas where the content could be expanded to provide more in-depth information, examples, or context. Provide a list of specific suggestions for expansion.

  Format the suggestions as a numbered list.
  `,
});

const suggestArticleExpansionFlow = ai.defineFlow(
  {
    name: 'suggestArticleExpansionFlow',
    inputSchema: SuggestArticleExpansionInputSchema,
    outputSchema: SuggestArticleExpansionOutputSchema,
  },
  async input => {
    const {output} = await suggestArticleExpansionPrompt(input);
    return output!;
  }
);
