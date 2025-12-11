<h1>Drag & Drop Element</h1>

<p>This project is a simple <b>Drag & Drop UI</b> created using <b>HTML, CSS and JavaScript.</b> It allows users to drag an element from one container and drop it into another, demonstrating interactive UI behaviour commonly used in dashboards and kanban boards</p>

<h2>Features</h2>

<ul>
    <li>Drag elements between boxes/containers</li>
    <li>Smooth drag-and-drop functionality</li>
    <li>Visual feedback while dragging</li>
    <li>Clean and responsive design</li>
    <li>Pure vanilla JavaScript (no libraries)</li>
</ul>

<h2>Technologies Used</h2>

<ul>
    <li>HTML -> Structure: containers and draggable items</li>
    <li>CSS -> Styling: boxes, draggable items, hover effects</li>
    <li>JavaScript -> Drag-and-drop logic, event handling (dragstart, dragover, drop)</li>
</ul>

<h2>How It Works</h2>

<ul>
    <li>Elements are made draggable using draggable = "ture"</li>
    <li>Javascript listens to events: 
    <ul>
        <li>dragstart -> store the element being dragged</li>
        <li>dragover -> allow the drop</li>
        <li>drop -> append the dragged element to the target container</li>
    </ul> </li>
    <li>CSS :hover and .hidden class provide visual feedback during drag</li>
</ul>

<h2>Future Improvements</h2>

<ul>
    <li>Support multiple draggable items</li>
    <li>Snap-to-grid layout</li>
    <li>Save element positions in localStorage</li>
    <li>Add animation when element is dropped</li>
</ul>

<h2>Folder Structure</h2>

<pre>/drag-and-drop
|->index.html
|->style.css
|->main.js</pre>

<h2>How to Run</h2>

<p>Just open 'index.html' in any browser -no server required.</p>

<h2>Author:- Arzoo Mansuri</h2>