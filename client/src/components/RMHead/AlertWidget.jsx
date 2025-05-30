import React from 'react';

const AlertsWidget = () => {
  const alerts = [
    { 
      icon: '⚠️', 
      type: 'high', 
      title: 'High Value Client Risk', 
      description: 'Deepa Iyer (₹1.2Cr AUM) hasn\'t been contacted in 2 weeks', 
      time: 'Assigned to: John Davis', 
      alertClass: 'bg-red-100 text-red-800' 
    },
    { 
      icon: '📊', 
      type: 'medium', 
      title: 'Monthly Target Alert', 
      description: 'Kavya Nair is 40% behind monthly SIP target', 
      time: '5 days remaining', 
      alertClass: 'bg-yellow-100 text-yellow-800' 
    },
    { 
      icon: '🔄', 
      type: 'high', 
      title: 'Service Request Overdue', 
      description: '3 requests pending for more than 48 hours', 
      time: 'Multiple RMs affected', 
      alertClass: 'bg-red-100 text-red-800' 
    },
    { 
      icon: '📞', 
      type: 'low', 
      title: 'Follow-up Reminder', 
      description: '15 qualified leads pending follow-up calls', 
      time: 'Due today', 
      alertClass: 'bg-blue-100 text-blue-800' 
    },
    { 
      icon: '📈', 
      type: 'medium', 
      title: 'Performance Review Due', 
      description: 'Monthly performance review scheduled for tomorrow', 
      time: 'Team meeting at 10 AM', 
      alertClass: 'bg-yellow-100 text-yellow-800' 
    },
  ];

  return (
    <div className="col-span-12 lg:col-span-6 bg-white rounded-2xl p-6 shadow-lg transition-transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-semibold">Alerts & Notifications</h2>
          <p className="text-sm text-gray-500">Requires attention</p>
        </div>
      </div>
      {alerts.map((alert, index) => (
        <div key={index} className="flex items-start py-3 border-b border-gray-100 last:border-0">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center mr-3 ${alert.alertClass}`}>
            {alert.icon}
          </div>
          <div className="flex-1">
            <div className="font-medium">{alert.title}</div>
            <div className="text-sm text-gray-500">{alert.description}</div>
            <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsWidget;