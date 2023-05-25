<!-- .slide: class="with-code-bg-dark" -->

# Liens images

Toujours mettre sur l'image un alt

```
<a href="salsifis.com">
    <img src="../salsifis.png" alt="le site web des salsifis">
</a>

<a href="salsifis.com">
  <span>repérez notre stand grâce à nos salsifis</span>
  <img src="../salsifis.png" alt="" >
</a>

<img tabindex="0"
     role="link"
     onclick="goToLink(event, 'salsifis.com')"
     onkeydown="goToLink(event, 'salsifis.com')"
     src="../salsifis.png"
     alt="le site web des salsifis">
```

Notes:
Besoin de l'information de la redirection
