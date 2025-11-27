<h1>Progress Bar Animation</h1>

<p>This project is a smooth and interactive <b>Progress Bar Animation</b> created using <b>HTML, CSS and JavaScript.</b> The bar fills up from 0% to 100% with animation when a button is clicked or automatically on page load.</p>

<h2>Features</h2>

<ul>
    <li>Smooth filling animation</li>
    <li>Shows percentage increasing in real-time</li>
    <li>Triggered by button or auto-start</li>
    <li>Clean, minimal UI</li>
    <li>Fully responsive</li>
</ul>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> Structure for progress container & text</li>
    <li>CSS -> Styling, animation, colors, rounded bar</li>
    <li>JavaScript -> Animated width + percentage logic</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>A progress container holds the progress bar</li>
    <li>JavaScript updates the bar width from 0% -> 100% setInterval()</li>
    <li>The percentage text updates on every step</li>
    <li>CSS gives smooth transition and visual styles</li>
</ul>

<h2>Future Improvements</h2>

<ul>
    <li>Add multiple bars with different values</li>
    <li>Add color change based on progress (red, yellow, green)</li>
    <li>Add circular progress animation</li>
</ul>

<h2>Folder Structure</h2>

<pre>/progress-bar-animation
|->index.html
|->style.css
|->main.js</pre>

<h2>Step-by-step logic</h2>

<ul>
    <li>Start at 0%</li>
    <li>Increase width by 1% (or any step) at a fixed interval</li>
    <li>Update UI until the value reaches 100%</li>
    <li>Stop the interval and show "Completed" or full bar</li>
</ul>

<h2>Author:- Arzoo Mansuri</h2>