<!-- .slide: class="with-code" -->

## Rassembler les informations avec `<fieldset>`

```
<fieldset>
  <legend>Shipping Address:</legend>
  <div>
    <label for="shipping_name">Name:</label>
    <input type="text" name="shipping_name" id="shipping_name">
  </div>
  <div>
    <label for="shipping_street">Street:</label>
    <input type="text" name="shipping_street" id="shipping_street">
  </div>
  […]
</fieldset>
```

##==##

<!-- .slide: class="with-code" -->

## Rassembler les informations avec ARIA

```
<div role="group" aria-labelledby="shipping_head">
  <div id="shipping_head">Shipping Address:</div>
  <div>
    <label for="shipping_name">Name:</label>
    <input type="text" name="shipping_name" id="shipping_name">
  </div>
  […]
</div>
```

Notes:
https://www.w3.org/WAI/tutorials/forms/grouping/ pour d'autres exemples
* 11.8 Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupées de manière pertinente ?
Il en va de même pour des choix, si thématiques communes il y a.
