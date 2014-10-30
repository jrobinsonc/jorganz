# jOrganz

Grid layout for html blocks.

With this jQuery plugin you can create Pinterest like layouts.

## How to use

**1. Include jQuery and jOrganz plugin:**

```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>  
<script type="text/javascript" src="jquery.jorganz.min.js"></script>
```

**2. Prepare items:**

```html
<div id="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

**3. Set items width through CSS:**

```css
<style type="text/css">
#container div { width: 250px; }
</style>
```

**4. Call the plugin:**

```javascript
<script>
jQuery(window).load(function($){
    $("#container").jOrganz({
        selector: 'div'
    });
});
</script>
```

**5. And enjoy.**

## Demo

Basic example  
http://jrobinsonc.github.io/jorganz/example-basic.html

Responsive example  
http://jrobinsonc.github.io/jorganz/example-responsive.html

## License

Licensed under the [MIT licence][1].

[1]: http://raw.github.com/jrobinsonc/jorganz/master/LICENSE