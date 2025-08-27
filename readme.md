

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

--
--> Answer Part:

1. getElementById: (i) It selects one element by id (unique).
                   (ii) It returns single element or null.
                   (iii) When selecting a specific element by ID

   getElementsByClassName:
                     (i) It selects all element with a give class
                     (ii) It returns live htmlcollection (updates if DOM changes).
                     (iii) When you need multiple elements by class.   

    querySelector:
                   (i) It selects first element that matches a css selector.
                   (ii) It returns single elements.
                   (iii) When you need the first match of a CSS selector.

    querySelectorAll:
                    (i) It selects all elements that match a css selector.
                    (ii) It returns static nodelist.
                    (iii) When you need multiple elements with CSS flexibility.       
---

2.   First of all create a element, a empty one (p,div,h1 , span). Then add content or attribute after that find the parent, Choose where you want this new element to appear in your page. Then finally attach the new element into the parent. This can be at the end, at the beginning, or before-after a specific element.

   In short : Create ---> Customize --> Parent ---> Insert.
---

3.  Event bubbling is a way events move in the DOM when something happens, like a click.

   Functionality (How does it works extackly?)
   
  Imagine there is a button inside a div. First the button detects the click then the div that contains the    button detects it and finally the body detects it. It allows parents to listen to child events.

  In short: button-->div-->body --> html--> document
---

4. Event Delegation is a technique in JavaScript where instead of attaching event listeners to many child       elements, you attach a single event listener to their parent.

  --> Useful: Instead of adding 100 event listener , you only need 1. It works for dynamic element. It is          easiar to manage and maintain.

---

5. preventDefault():
                   (i) Stops the browser’s default action for an event.
                   (ii) When you want to allow the event but block the browser’s built-in behavior.
                   (iii) Prevent a link from navigating to another page, or prevent a form from submitting.


   stopPropagation():
                    (i) Stops the event from bubbling up the DOM tree.
                    (ii) When you want the event to happen only on the current element, not on its parent.
                    (iii) A button inside a div clicking it shouldn’t trigger the div’s click listener.




   

   


             
