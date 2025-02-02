// src/utils/localStorage.ts

// Save data to local storage under a given key.
export const saveData = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  
  // Load data from local storage under a given key.
  export const loadData = (key: string): any => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading data:", error);
      return null;
    }
  };
  