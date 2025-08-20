'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const ChecklistApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'take out the trash', time: '9:00 AM', completed: true },
    { id: 2, text: 'do homework', time: '12:00 PM', completed: true },
    { id: 3, text: 'go to grocery store', time: '1:00 PM', completed: false },
    { id: 4, text: 'run 5 kilometers', time: '4:20 PM', completed: false },
    { id: 5, text: 'load the dishwasher', time: '9:00 PM', completed: false },
    { id: 6, text: 'Take out the trash', time: '9:00 AM', completed: false }
  ]);

  const toggleTask = (id : number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const calendar = [
    ['s', 'm', 't', 'w', 't', 'f', 's'],
    ['24', '25', '26', '27', '28', '29', '30']
  ];

  return (
    <div className="min-h-screen bg-indigo-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-500 text-sm">Tue Feb 18 2025</p>
            <h1 className="text-2xl font-bold text-gray-800">List Tailwind</h1>
          </div>
          <p className="text-gray-500 text-sm">9:31:25 p.m.</p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {calendar[0].map((day, index) => (
              <div key={index} className="text-gray-500 font-medium py-2">
                {day}
              </div>
            ))}
            {calendar[1].map((date, index) => (
              <div 
                key={index} 
                className={`py-2 ${date === '27' ? 'bg-blue-100 rounded-lg font-semibold text-blue-800' : 'text-gray-700'}`}
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3">
              <div 
                className={`flex items-center space-x-3 p-4 rounded-xl flex-1 transition-all duration-200 ${
                  task.completed 
                    ? 'bg-blue-100 border border-blue-200' 
                    : 'bg-blue-100 border border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    task.completed
                      ? 'bg-green-500 border-green-500'
                      : 'bg-white border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {task.completed && <Check size={14} className="text-white" />}
                </button>
                <span 
                  className={`text-sm font-medium ${
                    task.completed 
                      ? 'text-gray-500 line-through' 
                      : 'text-gray-700'
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <div className="bg-blue-100 px-4 py-4 rounded-xl border border-blue-200">
                <span className="text-sm text-gray-600 font-medium">
                  {task.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChecklistApp;