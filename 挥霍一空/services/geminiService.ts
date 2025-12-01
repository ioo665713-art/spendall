import { GoogleGenAI, Type } from "@google/genai";
import { CartItem, AdvisorResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialAdvice = async (cartItems: CartItem[], totalSpent: number): Promise<AdvisorResponse> => {
  if (cartItems.length === 0) {
    return {
      commentary: "你还没花一分钱呢！这可是1000兆美元，别这么抠门！快去买点东西，哪怕是个汉堡也好。",
      rating: 0
    };
  }

  const itemListString = cartItems
    .map(c => `${c.quantity}个${c.item.name} (单价$${c.item.price})`)
    .join(', ');

  const prompt = `
    我正在玩一个"花光1000兆美元"的游戏。
    我目前的购物车里有：${itemListString}。
    总共花费了：$${totalSpent}。
    
    请扮演一个极度刻薄、讽刺、幽默且见过大世面的亿万富翁财务顾问。
    根据我的购物清单，给出一段简短、辛辣的评价（中文）。
    如果是买了很多便宜货，嘲笑我格局小；如果买了疯狂的东西，嘲笑我品味差或者表示震惊。
    
    请严格按照JSON格式返回，不要包含Markdown标记。
    {
      "commentary": "你的评价文本",
      "rating": 1到10的整数 (10表示最荒谬/最疯狂)
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            commentary: { type: Type.STRING },
            rating: { type: Type.INTEGER }
          },
          required: ["commentary", "rating"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AdvisorResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      commentary: "哎呀，我的理财大脑死机了。不过看你这花钱的架势，估计也不是什么好事。",
      rating: 5
    };
  }
};