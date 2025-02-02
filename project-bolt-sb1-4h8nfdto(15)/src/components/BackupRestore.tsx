import React, { useRef } from 'react';
import { Download, Upload } from 'lucide-react';
import { exportData, importData } from '../utils/dataBackup';

export default function BackupRestore() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await importData(file);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to import data');
    }
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <button
        onClick={() => exportData()}
        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg 
                 hover:bg-purple-200 transition-colors w-full sm:w-auto justify-center"
      >
        <Download className="w-4 h-4" />
        Backup Data
      </button>

      <div className="relative w-full sm:w-auto">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImport}
          accept=".json"
          className="hidden"
          id="restore-file"
        />
        <label
          htmlFor="restore-file"
          className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg 
                   hover:bg-purple-200 transition-colors cursor-pointer w-full sm:w-auto justify-center"
        >
          <Upload className="w-4 h-4" />
          Restore Data
        </label>
      </div>
    </div>
  );
}