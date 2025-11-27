<h1>Dynamic To-Do List</h1>

<p>This project is a fully functional <b>To-Do List Application</b> built using <b>HTML, CSS and JavaScript.</b> Users can add tasks, mark them as completed, and delete tasks -everything updates dynamically without page reload.</p>

<h2>Features</h2>

<ul>
    <li>Add new tasks</li>
    <li>Mark tasks as completed (strike-through style)</li>
    <li>Delete tasks individually</li>
    <li>Clean UI, simple layout</li>
    <li>Data stored in memory (runtime)</li>
</ul>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> structure of inputs + list items</li>
    <li>CSS -> styling of tasks, completed state, layout</li>
    <li>JavaScript -> core logic for adding/removing/updating tasks</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>User enters a task in input field and clicks Add</li>
    <li>JavaScript creates a new <li> element and appends it to the list</li>
    <li>Clicking on task toggles completed style</li>
    <li>Clicking delete icon removes the task</li>
</ul>

<h2>Example logic steps:</h2>

<ol>
    <li>Capture input text</li>
    <li>Create list item using JS DOM</li>
    <li>Append to <ul></li>
    <li>Add event listeners for complete & delete</li>
</ol>

<h2>Future Improvements</h2>

<ul>
    <li>Store tasks in localStorage</li>
    <li>Add edit task option</li>
    <li>Categories (work/personal)</li>
    <li>Drag to drop sorting</li>
</ul>

<h2>Folder Structure</h2>

<pre>/To-Do-List
|->index.html
|->style.css
|->main.js</pre>

<h2>Author:- Arzoo Mansuri</h2>