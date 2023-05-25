<!-- .slide: class="with-code-bg-dark" -->

# Lien texte

> 6.1 Chaque lien est-il explicite (hors cas particuliers) ?
* Être précis dans l'intitulé
* En dernier recours, aria-label

```
<a href="salsifis.com">
  Venez sur le site dédié aux salsifis
</a>

<a href="salsifis.com" aria-label="le site web des salsifis">
  salsifis
</a>
```

Notes:
Parler de 10.5 Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ? 
10.6 Dans chaque page web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ?
Il y a trois type de lien: texte, image et composite
Par soucis de formalisme du titre, on peut se retrouver avec des non conformités en voulant bien faire

Parler de mettre l'icone quand ça ouvre un nouveau lien, et de ne pas ouvrir une nouvelle fenetre au maximum
