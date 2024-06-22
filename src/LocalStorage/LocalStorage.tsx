import { ChatResponse } from '../types/TypesChat';

export const saveToLocalStorage = (key: string, value: ChatResponse[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
}

export const getFromLocalStorage = (key: string): ChatResponse[] | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error getting data from localStorage: ${error}`);
    return null;
  }
}

export const saveDarkModeToLocalStorage = (key: string, value: boolean) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
}

export const getDarkModeFromLocalStorage = (key: string): boolean | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error getting data from localStorage: ${error}`);
    return null;
  }
}