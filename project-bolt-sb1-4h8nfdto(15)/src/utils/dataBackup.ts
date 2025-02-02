import { format } from 'date-fns';

interface AppData {
  checkIns: any[];
  sleepLogs: any[];
  movements: any[];
  goals: any[];
  hobbies: any[];
}

export function exportData(): void {
  // Collect all data from localStorage
  const data: AppData = {
    checkIns: JSON.parse(localStorage.getItem('checkIns') || '[]'),
    sleepLogs: JSON.parse(localStorage.getItem('sleepLogs') || '[]'),
    movements: JSON.parse(localStorage.getItem('completedMovements') || '[]'),
    goals: JSON.parse(localStorage.getItem('goals') || '[]'),
    hobbies: JSON.parse(localStorage.getItem('hobbies') || '[]'),
  };

  // Create a Blob with the data
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const link = document.createElement('a');
  link.href = url;
  link.download = `life-balance-backup-${format(new Date(), 'yyyy-MM-dd')}.json`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function importData(file: File): Promise<void> {
  try {
    const text = await file.text();
    const data: AppData = JSON.parse(text);
    
    // Validate data structure
    if (!isValidBackupData(data)) {
      throw new Error('Invalid backup file format');
    }
    
    // Store each data type in localStorage
    localStorage.setItem('checkIns', JSON.stringify(data.checkIns));
    localStorage.setItem('sleepLogs', JSON.stringify(data.sleepLogs));
    localStorage.setItem('completedMovements', JSON.stringify(data.movements));
    localStorage.setItem('goals', JSON.stringify(data.goals));
    localStorage.setItem('hobbies', JSON.stringify(data.hobbies));
    
    // Force page reload to reflect new data
    window.location.reload();
  } catch (error) {
    throw new Error('Failed to import data. Please check the file format.');
  }
}

function isValidBackupData(data: any): data is AppData {
  return (
    data &&
    Array.isArray(data.checkIns) &&
    Array.isArray(data.sleepLogs) &&
    Array.isArray(data.movements) &&
    Array.isArray(data.goals) &&
    Array.isArray(data.hobbies)
  );
}