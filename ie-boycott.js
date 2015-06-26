var overlay = document.createElement('div');
overlay.setAttribute('style', 'position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: black; opacity: 0.5; z-index: 10000;');

var modal = document.createElement('div');
modal.setAttribute('style', 'width: 60%; position: fixed; margin: auto; left: 0; right: 0; top: 10%; max-height: 80%; overflow: auto; padding: 20px; background-color: white; z-index: 10001; text-align: center;');
modal.innerHTML = '<h1> You are using the wrong browser. </h1><img src="https://raw.githubusercontent.com/aug-riedinger/ie-boycott/master/IE_Sucks_by_boozker.png" alt="IE Sucks" title="Stop using Internet Explorer" style="margin: auto;" /><p>You are strongly encouraged to change your browser. <br />Download <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"  style="font-weight:bold;">Firefox</a> or <a href="https://www.google.com/chrome/browser/desktop/"  target="_blank"  style="font-weight:bold;">Chrome</a>.</p><h2>Why?</h2><p>Because Microsoft doesn\'t care about web standards.</p><a href="http://www.augustin-riedinger.fr" target="_blank" style="font-weight:bold;">Read detailed article &#8594;</a>';

var close = document.createElement('a');
close.innerHTML = '&times;';
close.setAttribute('style', 'position: absolute; top: 5px; right: 10px; font-size: 1.5em; font-weight: bold; text-decoration: none;');
close.setAttribute('title', 'Close');
close.setAttribute('href', '');
close.addEventListener('click', function(e){
  e.preventDefault();
  modal.parentNode.removeChild(modal);
  overlay.parentNode.removeChild(overlay);
  // TODO: Remember closed in next page
});
modal.appendChild(close);

var body = document.getElementsByTagName('body')[0];
body.appendChild(overlay);
body.appendChild(modal);
