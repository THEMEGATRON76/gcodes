// scrollBounce.js - Scroll Animation Utility

class ScrollBounceHandler {
  constructor(options = {}) {
    this.options = {
      bounceThreshold: 30,
      bounceClass: 'bounce-top',
      bounceBottomClass: 'bounce-bottom',
      scrollIndicator: true,
      smoothScrollDuration: 600,
      autoInit: true,
      ...options
    };
    
    this.isAtTop = false;
    this.isAtBottom = false;
    this.scrollTimeout = null;
    this.bounceTimeout = null;
    this.isInitialized = false;
    
    if (this.options.autoInit) {
      this.init();
    }
  }

  init() {
    if (this.isInitialized) return;
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.createScrollIndicator();
    this.bindEvents();
    this.isInitialized = true;
  }

  createScrollIndicator() {
    if (!this.options.scrollIndicator) return;
    
    // Remove existing indicator if present
    const existingIndicator = document.getElementById('scroll-indicator');
    if (existingIndicator) {
      existingIndicator.remove();
    }
    
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.id = 'scroll-indicator';
    document.body.appendChild(indicator);
  }

  bindEvents() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.updateScrollIndicator = this.updateScrollIndicator.bind(this);
    
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.updateScrollIndicator);
    window.addEventListener('wheel', this.handleWheel, { passive: false });
  }

  handleScroll() {
    clearTimeout(this.scrollTimeout);
    this.updateScrollIndicator();
    
    this.scrollTimeout = setTimeout(() => {
      this.checkScrollBounds();
    }, 50);
  }

  handleWheel(event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Check if trying to scroll up at top
    if (scrollTop <= this.options.bounceThreshold && event.deltaY < 0) {
      this.triggerBounce('top');
    }
    
    // Check if trying to scroll down at bottom
    if (scrollTop + windowHeight >= scrollHeight - this.options.bounceThreshold && event.deltaY > 0) {
      this.triggerBounce('bottom');
    }
  }

  checkScrollBounds() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    const atTop = scrollTop <= this.options.bounceThreshold;
    const atBottom = scrollTop + windowHeight >= scrollHeight - this.options.bounceThreshold;
    
    if (atTop && !this.isAtTop) {
      this.isAtTop = true;
      this.isAtBottom = false;
    } else if (atBottom && !this.isAtBottom) {
      this.isAtBottom = true;
      this.isAtTop = false;
    } else if (!atTop && !atBottom) {
      this.isAtTop = false;
      this.isAtBottom = false;
    }
  }

  triggerBounce(direction) {
    clearTimeout(this.bounceTimeout);
    
    const body = document.body;
    const bounceClass = direction === 'top' ? this.options.bounceClass : this.options.bounceBottomClass;
    
    // Remove existing bounce classes
    body.classList.remove(this.options.bounceClass, this.options.bounceBottomClass);
    
    // Add bounce class
    body.classList.add(bounceClass);
    
    // Remove bounce class after animation
    this.bounceTimeout = setTimeout(() => {
      body.classList.remove(bounceClass);
    }, 600);
  }

  updateScrollIndicator() {
    const indicator = document.getElementById('scroll-indicator');
    if (!indicator) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = scrollHeight - windowHeight;
    const scrollProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    
    indicator.style.setProperty('--scroll-progress', `${Math.min(100, Math.max(0, scrollProgress))}%`);
    
    // Show/hide indicator based on scroll position
    if (scrollTop > 100) {
      indicator.classList.add('visible');
    } else {
      indicator.classList.remove('visible');
    }
  }

  // Public API methods
  scrollToTop(duration = null) {
    const scrollDuration = duration || this.options.smoothScrollDuration;
    this.smoothScrollTo(0, scrollDuration);
  }

  scrollToBottom(duration = null) {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollDuration = duration || this.options.smoothScrollDuration;
    this.smoothScrollTo(scrollHeight, scrollDuration);
  }

  scrollToElement(element, offset = 0, duration = null) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    
    if (!element) return;
    
    const elementTop = element.offsetTop - offset;
    const scrollDuration = duration || this.options.smoothScrollDuration;
    this.smoothScrollTo(elementTop, scrollDuration);
  }

  smoothScrollTo(targetPosition, duration = null) {
    const scrollDuration = duration || this.options.smoothScrollDuration;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / scrollDuration, 1);
      
      // Easing function (ease-out-cubic)
      const ease = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }

  // Update options
  updateOptions(newOptions) {
    this.options = { ...this.options, ...newOptions };
    
    // Recreate indicator if visibility changed
    if ('scrollIndicator' in newOptions) {
      this.createScrollIndicator();
    }
  }

  // Get current scroll info
  getScrollInfo() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = scrollHeight - windowHeight;
    const scrollProgress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    
    return {
      scrollTop,
      scrollHeight,
      windowHeight,
      maxScroll,
      scrollProgress,
      isAtTop: this.isAtTop,
      isAtBottom: this.isAtBottom
    };
  }

  // Destroy method to clean up
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateScrollIndicator);
    window.removeEventListener('wheel', this.handleWheel);
    
    const indicator = document.getElementById('scroll-indicator');
    if (indicator) {
      indicator.remove();
    }
    
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.bounceTimeout);
    
    this.isInitialized = false;
  }
}

// Factory function for easy usage
export const createScrollBounceHandler = (options = {}) => {
  return new ScrollBounceHandler(options);
};

// Default instance
let defaultInstance = null;

export const initScrollBounce = (options = {}) => {
  if (defaultInstance) {
    defaultInstance.destroy();
  }
  
  defaultInstance = new ScrollBounceHandler({
    autoInit: true,
    ...options
  });
  
  return defaultInstance;
};

// Utility functions that use the default instance
export const scrollToTop = (duration) => {
  if (defaultInstance) {
    defaultInstance.scrollToTop(duration);
  }
};

export const scrollToBottom = (duration) => {
  if (defaultInstance) {
    defaultInstance.scrollToBottom(duration);
  }
};

export const scrollToElement = (element, offset, duration) => {
  if (defaultInstance) {
    defaultInstance.scrollToElement(element, offset, duration);
  }
};

export const getScrollInfo = () => {
  return defaultInstance ? defaultInstance.getScrollInfo() : null;
};

export const destroyScrollBounce = () => {
  if (defaultInstance) {
    defaultInstance.destroy();
    defaultInstance = null;
  }
};

// React Hook
export const useScrollBounce = (options = {}) => {
  const [scrollInfo, setScrollInfo] = React.useState(null);
  
  React.useEffect(() => {
    const handler = new ScrollBounceHandler({
      autoInit: true,
      ...options
    });
    
    // Update scroll info periodically
    const updateScrollInfo = () => {
      setScrollInfo(handler.getScrollInfo());
    };
    
    const interval = setInterval(updateScrollInfo, 100);
    
    return () => {
      clearInterval(interval);
      handler.destroy();
    };
  }, []);
  
  return {
    scrollInfo,
    scrollToTop: (duration) => scrollToTop(duration),
    scrollToBottom: (duration) => scrollToBottom(duration),
    scrollToElement: (element, offset, duration) => scrollToElement(element, offset, duration)
  };
};

// Default export
export default ScrollBounceHandler;