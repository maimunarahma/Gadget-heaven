import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Default Title"; // Default title

    // Set title based on the route
    if (location.pathname === "/") {
      title = "Home - My React App";
    } else if (location.pathname === "/statistics") {
      title = "Statistics - My React App";
    } else if (location.pathname === "/dashboard") {
      title = "Dashboard - My React App";
    }

    document.title = title; // Update the title
  }, [location]); // Re-run whenever the location (route) changes
};

export default usePageTitle;
