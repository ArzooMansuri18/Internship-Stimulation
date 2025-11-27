<h1>Password Strength Checker</h1>

<p>This project is a <b>Password Strength Indicator</b> built using <b>HTML, CSS and JavaScript.</b></p>

<p>It checks the entered password in real-time and shows how strong the password is based on different rules such as length, numbers, uppercase, lowercase, special characters, etc.</p>

<h2>Features</h2>

<ul>
    <li>Real-time strength detection</li>
    <li>Visual strength bar (Weak/Medium/Strong)</li>
    <li>Helpful hints to improve password quality</li>
    <li>Show/Hide password toggle</li>
    <li>Clean and responsive UI</li>
</ul>

<h2>What It Checks</h2>

<ol>
    <li>Minimum length(e.g.8 chars)</li>
    <li>At least 1 uppercase letter(e.g.ABC)</li>
    <li>At least 1 number(e.g.123)</li>
    <li>At least 1 special symbol(e.g.@!#$)</li>
</ol>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> input fields + structure</li>
    <li>CSS -> strength color bar + design</li>
    <li>JavaScript -> logic for checking password rules and updating UI</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>User types a password</li>
    <li>JavaScript checks characters using RegEx</li>
    <li>Based on how many rules match -> strength level increases</li>
</ul>

<h2>Future Improvements</h2>

<ul>
    <li>Use an animated bar (instead of colored spans)</li>
    <li>Add smooth color transition with @keyframes.</li>
    <li>Auto generate password button</li>
</ul>

<h2>Folder Structure</h2>

<pre>/password-strength-indicator
|->index.html
|->style.css
|->main.js</pre>

<h2>Author:- Arzoo Mansuri</h2>