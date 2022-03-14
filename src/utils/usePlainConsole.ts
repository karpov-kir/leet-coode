import plainConsole from 'console';

export function usePlainConsole() {
  const jestConsole = console;

  beforeEach(() => {
    global.console = plainConsole;
  });

  afterEach(() => {
    global.console = jestConsole;
  });
}
