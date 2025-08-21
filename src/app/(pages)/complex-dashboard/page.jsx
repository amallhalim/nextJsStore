import React from 'react';
import NotificationDashboardLayout from './layout';

export default function page({ children, notification, user, post ,NotificationPage}) {
  console.log("page ~ notification:", notification);
  console.log("page ~ children:", children);

  return (
    <div className=" bg-green-100 text-amber-950 p-4">
      page
     {/* <NotificationDashboardLayout>
     mainnn 

     </NotificationDashboardLayout> */}
    </div>
  );
}