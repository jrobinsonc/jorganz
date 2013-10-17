# jOrganz

Grid layout for html blocks.

With this jQuery plugin you can create Pinterest like layouts.

## How to use

Include jQuery and jOrganz plugin:

```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>  
<script type="text/javascript" src="jquery.jorganz.min.js"></script>
```

Prepare items.

```html
<div id="container">
    <div style="height: 300px;"></div>
    <div style="height: 250px;"></div>
    <div style="height: 100px;"></div>
</div>
```

Set items width through CSS.

```css
<style type="text/css">
#container div { width: 250px; }
</style>
```

Call the plugin.

```javascript
<script type="text/javascript">
jQuery(function ($) {
    $("#container").jOrganz();
});
</script>
```

And enjoy.

## Demo

Basic example  
http://jrobinsonc.github.io/jorganz/example-basic.html

Responsive example  
http://jrobinsonc.github.io/jorganz/example-responsive.html

## License

Licensed under the [MIT licence][1].

[1]: http://raw.github.com/jrobinsonc/jorganz/master/LICENSE