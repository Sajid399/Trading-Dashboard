import React, { useState } from 'react';
import Flag from './Flag';
import FlagImage from '../images/Group 229.png';


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('all'); 

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabData = [
    {
      id: 'all',
      label: 'All',
      content: (
        <div>
          {activeTab === 'all' &&  <Flag className="col-12" url={FlagImage} text="USDEUR" para="US DOLLAR/CHINESE All" />
}
        </div>
      ),
    },
    {
      id: 'notification',
      label: 'Notification',
      content: (
        <div>
          {activeTab === 'notification' && <Flag className="col-12" url={FlagImage} text="USDEUR" para="US DOLLAR/CHINESE Notifcation" />}
        </div>
      ),
    },
    {
      id: 'currency',
      label: 'Currency',
      content: (
        <div>
          {activeTab === 'currency' && <Flag className="col-12" url={FlagImage} text="USDEUR" para="US DOLLAR/CHINESE Currency" />}
        </div>
      ),
    },
    {
      id: 'forex',
      label: 'Forex',
      content: (
        <div>
          {activeTab === 'forex' && <Flag className="col-12" url={FlagImage} text="USDEUR" para="US DOLLAR/CHINESE forex" />}
        </div>
      ),
    },
  ];

  return (
    <div className="m-4">
      <div style={{ overflowX: "scroll !important",width:"250px" }}>
      <ul className="nav nav-tab horizontal">
        {tabData.map((tab) => (
          <li className="nav-item p-0 m-1" key={tab.id}>
            <button
              className={`nav-link btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul></div>
      <div className="tab-content">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${
              activeTab === tab.id ? 'show active' : ''
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
