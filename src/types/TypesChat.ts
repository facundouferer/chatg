
export interface ChatResponse {
  type: "question" | "answer";
  text: string;
  speaker: string;
  finishReason: string;
  safetyRatings: SafetyRatings;
}

export interface BubbleProps {
  message: ChatResponse;
}

export interface SafetyRatings{
  sexuallyExplicit: string;
  hateSpeech: string;
  harrassment: string;
  dangerousContent: string;
}