// Direct API approach
const GEMINI_API_KEY = "AIzaSyDQtrv-AirBl9ZeBcTundbf604uWW3DcdI";

// Using v1 endpoint with gemini-2.5-flash model
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// Debug logging
console.log("🔑 API Key present:", GEMINI_API_KEY ? "YES ✅" : "NO ❌");
console.log("🔑 API Key starts with:", GEMINI_API_KEY?.substring(0, 10));

// System prompt
const SYSTEM_PROMPT = `You are an Islamic Learning Assistant for Al-Kisa Foundation. Answer questions about Islam, Quran, Hadith, and Islamic education in a warm, helpful manner. Keep responses concise (2-3 paragraphs) and age-appropriate. Use emojis like 🕌 📖 🤲 when relevant.`;

// Main function to get AI response
export const getAIResponse = async (userMessage, conversationHistory = []) => {
  try {
    // Build the entire prompt
    let fullQuery = SYSTEM_PROMPT + "\n\n";
    
    // Add conversation history (last 5 messages)
    if (conversationHistory.length > 0) {
      conversationHistory.slice(-5).forEach(msg => {
        fullQuery += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
      });
    }
    
    fullQuery += `User: ${userMessage}\nAssistant:`;

    console.log("📤 Sending request to Gemini...");

    // Make direct API call
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: fullQuery
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      })
    });

    const data = await response.json();

    // Handle 503 (Service Unavailable) - Retry
    if (response.status === 503) {
      console.warn("⚠️ Gemini servers busy (503). Retrying in 3 seconds...");
      await new Promise((res) => setTimeout(res, 3000));
      
      // Retry the request
      const retryResponse = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: fullQuery
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });
      
      const retryData = await retryResponse.json();
      
      if (!retryResponse.ok) {
        throw new Error(`API error: ${retryResponse.status} - ${JSON.stringify(retryData)}`);
      }
      
      if (retryData.candidates && retryData.candidates[0]?.content?.parts[0]?.text) {
        console.log("✅ Got response from Gemini (retry)!");
        return retryData.candidates[0].content.parts[0].text;
      }
    }

    if (!response.ok) {
      console.error("API Error:", data);
      throw new Error(`API error: ${response.status} - ${JSON.stringify(data)}`);
    }
    
    console.log("✅ Got response from Gemini!");

    // Check if the response was blocked (no candidates)
    if (!data.candidates || data.candidates.length === 0) {
        if (data.promptFeedback?.blockReason) {
            return `🕌 I apologize, but that request was blocked due to safety guidelines (${data.promptFeedback.blockReason}). Please try rephrasing your question.`;
        }
        throw new Error('Received an empty response from the API.');
    }
    
    // Extract text from the first valid candidate
    if (data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }
    
    throw new Error('Invalid response format from API');

  } catch (error) {
    console.error("❌ AI Error:", error);
    return "🕌 I apologize, but I'm having trouble connecting right now. Please try again in a moment.";
  }
};

// Quick suggestions
export const getQuickSuggestions = () => [
  "How do I teach my child about Salah?",
  "What are the 5 pillars of Islam?",
  "Tell me a story about Prophet Muhammad ﷺ",
  "How to make Ramadan fun for kids?",
  "What Islamic books do you recommend for 7-year-olds?",
  "How do I explain Tawheed to children?",
];

// Product recommendations
export const getProductRecommendations = (query) => {
  const keywords = query.toLowerCase();
  const recommendations = [];

  if (keywords.includes('quran') || keywords.includes('qur')) {
    recommendations.push({
      title: "Qur'ān Curriculum",
      description: "Complete Quranic education resources",
      link: "/category/quran-curriculum"
    });
  }

  if (keywords.includes('story') || keywords.includes('prophet') || keywords.includes('book')) {
    recommendations.push({
      title: "Picture Books",
      description: "Islamic stories for children",
      link: "/category/picture-books"
    });
  }

  if (keywords.includes('curriculum') || keywords.includes('teach') || keywords.includes('salah') || keywords.includes('tawheed')) {
    recommendations.push({
      title: "Islamic Curriculum",
      description: "Grade-wise Islamic education",
      link: "/category/islamic-curriculum"
    });
  }

  return recommendations;
};
