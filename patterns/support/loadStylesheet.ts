import Require = dojo.Require;

function loadStylesheet(url: string, done: Function): void {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;

  link.onload = (): void => {
    link.onload = null;
    link.onerror = null;
    done(link);
  };

  link.onerror = (): void => {
    link.onload = null;
    link.onerror = null;
    done(link);
  };

  document.head.appendChild(link);
}

const plugin = {
  load(name: string, require: Require, done: Function): void {
    loadStylesheet(require.toUrl(name), done);
  }
};

export = plugin;
