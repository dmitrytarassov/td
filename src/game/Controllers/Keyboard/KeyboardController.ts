type Listener = {
  callback: Function,
  eventName: string,
};

class KeyboardController {
  listeners: Listener[] = [];
  constructor() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      const { key } = e;
      let event: string = '';
      switch (key) {
        case 'ArrowDown':   event = 'down'; break;
        case 'ArrowUp':     event = 'up'; break;
        case 'ArrowRight':  event = 'right'; break;
        case 'ArrowLeft':   event = 'left'; break;
        case 'Enter':       event = 'enter'; break;
      }
      if (event) {
        this.emit(event);
      }
    });
  }
  emit (eventName: string) {
    this.listeners.filter(l => l.eventName === eventName).forEach(({ callback }) => {
      callback();
    });
  }
  on (eventName: string, callback: Function) {
    this.listeners.push({
      eventName,
      callback,
    });
  }
}

export default KeyboardController;
