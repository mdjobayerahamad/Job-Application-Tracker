1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById(): Finds one element using its ID. IDs are unique, so it returns only one element.
getElementsByClassName(): Finds many elements that have the same class name. It returns a list of elements.
querySelector(): Finds the first element that matches a CSS selector (id, class, tag, etc.).
querySelectorAll(): Finds all elements that match a CSS selector and returns a list.
querySelector methods are more flexible because they use CSS selectors.


2. How do you create and insert a new element into the DOM?
Ans: First, create a new element using document.createElement().
Then, add text or content to it.
Finally, insert it into the DOM using methods like appendChild() or append().


3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling means an event starts from the target element and then moves upward to its parent elements.
When you click a child element, the event also triggers on its parent, then grandparent, and so on.
Example:If you click a button inside a div, the button’s event runs first, then the div’s event runs.


4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation means adding one event listener to a parent element instead of many child elements.
The parent handles events from its children using event bubbling.
Why it is useful:
Less code and better performance
Works for dynamically added elements
Easier to manage event handling


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault(): Stops the default browser action (like stopping a form from submitting or a link from opening).
stopPropagation(): Stops the event from bubbling up to parent elements.
In short:
preventDefault() stops what the browser does,
stopPropagation() stops where the event goes.