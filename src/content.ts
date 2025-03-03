import './css/style.css';

const injectScript = (filePath: string, tag: string) => {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', filePath);
  node.appendChild(script);
};
injectScript(chrome.runtime.getURL('src/index.js'), 'body');

chrome.runtime.onMessage.addListener(function (request) {
  {
    const elements = [...document.querySelectorAll('.mieru')] as HTMLDivElement[];
    Array.from(elements).forEach((element) => {
      element.style.display = request ? 'block' : 'none';
    });
  }
  {
    const element = document.querySelector('.gaia-argoui-space-spacecontent-right') as HTMLDivElement;
    if (element) {
      element.style.width = request ? '600px' : '';
    }
  }
});
