import React from 'react';

const tasks = [
  { title: 'Call Rahul Sharma', time: '10:30 AM', priority: 'high' },
  { title: "Review Priya's portfolio", time: '11:45 AM', priority: 'medium' },
  { title: 'SIP renewal - Amit Kumar', time: '2:00 PM', priority: 'high' },
  { title: 'Document verification', time: '3:30 PM', priority: 'low' },
  { title: 'Team meeting', time: '4:15 PM', priority: 'medium' },
];

const priorityColor = {
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500',
};

const TasksWidget = () => {
  return(
    <div className="col-span-12 md:col-span-4 bg-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Today's Tasks</h2>
        <p className="text-sm text-gray-500">5 pending</p>
      </div>
      <ul className="divide-y divide-gray-100">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start py-3">
            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${priorityColor[task.priority]}`}></div>
            <div>
              <p className="font-medium text-gray-800">{task.title}</p>
              <p className="text-sm text-gray-500">{task.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksWidget;
