<h1>Real-Time Form Validation</h1>

<p>This project is a <b>real-time form validation system</b> built using <b>HTML, CSS and JavaScript.</b> It validates inputs such as name, email, password etc. while the user is typing -not after clicking submit.</p>

<h2>Features</h2>

<ul>
    <li>Validates user input live(on input event)</li>
    <li>Shows error message instantly</li>
    <li>Prevent invalid form submission</li>
    <li>Clean & user-friendly design</li>
    <li>Visual cues like green/red borders</li>
    <li>"Show password" eye toggle icon</li>
</ul>

<h2>Fields You Can Validate</h2>

<ol>
    <li>Name -> at least 3 chars</li>
    <li>Email -> must include @ and valid pattern</li>
    <li>Password -> minimum length + combination rules</li>
    <li>Phone -> exact length digits (if included)</li>
</ol>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> input fields + form</li>
    <li>CSS -> error message style + success/error state</li>
    <li>JavaScript -> validation logic using Regex + live feedback</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>On every keystroke (input event), JavaScript checks if the value matches required rules using RegEx</li>
    <li>If valid -> it shows success styles</li>
    <li>If invalid -> it shows error message and red border</li>
    <li>Submit button should only work when all fields are valid</li>
</ul>

<h2>Future Improvements</h2>

<ul>
    <li>Shows strength meter for password</li>
    <li>Allow form data to store in localStorage</li>
    <li>Add validation summary on submit</li>
</ul>

<h2>Folder Structure</h2>

<pre>/Form-validation
|->index.html
|->style.css
|->main.js</pre>

<h2>Author:- Arzoo Mansuri</h2>