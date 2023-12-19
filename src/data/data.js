const boxData = [
  {
    id: 1,
    icon: "bx bxs-calendar-check",
    count: 1020,
    name: "New Order",
  },
  {
    id: 2,
    icon: "bx bxs-group",
    count: 2834,
    name: "Visitors",
  },
  {
    id: 3,
    icon: "bx bxs-dollar-circle",
    count: "$2543",
    name: "Total Sales",
  },
];

const sidebarData = {
  brand: {
    logo: "bx bxs-category-alt",    
    text: "Dashboard",
  },
  topMenu: [
    {
      id: 1,
      isActive: true,
      icon: "bx bxs-dashboard",
      name: "Dashboard",
    },
    {
      id: 2,
      isActive: false,
      icon: "bx bxs-shopping-bag-alt",
      name: "My Store",
    },
    {
      id: 3,
      isActive: false,
      icon: "bx bxs-doughnut-chart",
      name: "Analytics",
    },
    {
      id: 4,
      isActive: false,
      icon: "bx bxs-message-dots",
      name: "Message",
    },
    {
      id: 5,
      isActive: false,
      icon: "bx bxs-group",
      name: "Team",
    },
  ],
  sideMenu: [
    {
      id: 6,
      icon: "bx bxs-cog",
      name: "Settings",
    },
    {
      id: 7,
      icon: "bx bxs-log-out-circle",
      name: "Logout",
      className: "logout",
    },
  ],
};

const recentOrders = [
  {
    id: 1,
    user: {
      avatar: "https://source.unsplash.com/150x150/?black",
      name: "Kylan Gentry",
    },
    dateOrder: "01-10-1980",
    status: "Completed",
  },
  {
    id: 2,
    user: {
      avatar: "https://source.unsplash.com/150x150/?blue",
      name: "Amelie Griffith",
    },
    dateOrder: "17-08-1983",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      avatar: "https://source.unsplash.com/150x150/?brown",
      name: "Franklin Sierra",
    },
    dateOrder: "03-03-1985",
    status: "Process",
  },
  {
    id: 4,
    user: {
      avatar: "https://source.unsplash.com/150x150/?gray",
      name: "Marceline Avila",
    },
    dateOrder: "11-07-1993",
    status: "Pending",
  },
  {
    id: 5,
    user: {
      avatar: "https://source.unsplash.com/150x150/?green",
      name: "Jaylen Blackwell",
    },
    dateOrder: "20-09-2017",
    status: "Completed",
  },
];

const todoData = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare for client meeting",
    completed: false,
  },
  {
    id: 3,
    title: "Review and edit presentation slides",
    completed: true,
  },
  {
    id: 4,
    title: "Send progress report to team",
    completed: false,
  },
  {
    id: 5,
    title: "Follow up on pending tasks",
    completed: true,
  },
];

export default sidebarData;
export { boxData, recentOrders, todoData };
