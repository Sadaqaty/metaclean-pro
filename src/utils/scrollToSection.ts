export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
  // Only handle anchor links
  if (!path.startsWith('#')) return;

  e.preventDefault();
  
  const elementId = path.substring(1);
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    // Update URL without page reload
    window.history.pushState({}, '', path);
  }
};
