"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const NotesPage: React.FC = () => {
  const [text, setText] = useState<string>(''); 
  const [savedText, setSavedText] = useState<string>(''); 

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    setSavedText(text); 
    showToast("Saved Successfully",{description:"Your text has been saved successfully!"});
    setText('');
  };
  const upper = () => {
    let newText=text.toUpperCase();
    setText(newText);
  };
  const lower = () => {
    let newText=text.toLowerCase();
    setText(newText);
  }
  const clear = () => {
    let newText="";
    setText(newText);
  }
  const showToast=(p0: string, p1: { description: string; })=>{toast.success(p0,
     {
    description: p1.description, 
  }
)}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      <div className="bg-primary-foreground p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h1 className="text-2xl font-bold text-center mb-4">Save Your Notes</h1>
        <div className='text-center gap-y-2'>
        <Button
            onClick={handleSave}
            className="rounded-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300" variant={'secondary'}
          >
            Save It
          </Button>
          </div><br/>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Type your text here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          rows={6}
        />
        
        <div className="text-center grid grid-cols-3 gap-2">
          <Button
            onClick={clear}
            className="rounded-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300" 
          >
            Clear
          </Button>
          <Button
            onClick={upper}
            className=" rounded-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300"
          >
            Upper Case
          </Button>
          <Button
            onClick={lower}
            className="rounded-lg hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300"
          >
            Lower Case
          </Button>
          
        </div>
        <br/>
        
        <div>
            <h3>Text Preview:</h3>
            <p>{text}</p>
        </div>

        {savedText && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Saved Text:</h2>
            <p className="bg-muted p-4 rounded-lg mt-2">{savedText}</p>
          </div>
         
        )}
      </div>
    </div>
  );
};

export default NotesPage;
