function useIsMobile() {
    if(typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
  
    return false;
  }
  
  export default useIsMobile;