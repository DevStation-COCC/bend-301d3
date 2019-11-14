### Show/Hide functionality


HTML Snippet - put this in the EJS file or partial you want the client to process
```HTML
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="/js/app.js"></script>
```

Within your static foler, create a js folder. This should correspond to the src attribute above, and create th app.js file, or whatever name you want... but must correspond again, to the above src atrribute.

In your app.js

```javascript
$('.select-button').on('click', function() {
  $(this).next().removeClass('hide-me');
});
// the above jquery will find a target with the class .select-button. On click of this button, a sibling form with the hide-me class will be manipulated. 
```