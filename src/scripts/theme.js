const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    
  };


  const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        console.log(localStorage.getItem('theme'));
    } else {
        setTheme('theme-dark');
    }
    
 };

 export {
     setTheme,
     toggleTheme
 }