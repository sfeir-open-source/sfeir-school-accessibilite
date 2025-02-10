<!-- .slide: class="width-code" -->

# Layout

- Lien d'accès rapide (au minimum vers contenu principal)
- Régions :
  - En-tête du site
  - Navigation(s)
  - Contenu principal
  - Pied de page du site

##==##


## Exemple

<!-- .slide: class="width-code" -->

⚠ Toutes les régions, sauf la navigation, doivent être uniques dans la page.

```
<a href="#main">contenu</a>
<header>
  <h1>Mon super site !</h1>
  <nav>...</nav>
</header>
<main id="main">
  ...
</main>
<footer>...</footer>
```

##==##

<!-- .slide: class="two-column" -->

## Éléments sémantiques

- Paragraphes `<p>`
- Titres `<h1>` à `<h6>`
- Listes
  - Ordonnées `<ol>`
  - Non ordonnées `<ul>`
  - De définition `<dl>`
- Images `<img>`
- Liens `<a href="">`
- Boutons `<button>`
- Formulaires `<form>`
- Retour chariot `<br/>`
- ...

##--##

## Éléments non sémantiques

- `<div>`
- `<span>`

##==##

<!-- .slide: class="width-code" -->

<h1 style="margin-bottom: 70px;">Zoom sur les paragraphes</h1>

- Pas de texte uniquement dans des `<div>` ou des `<span>` ou autre élément dépourvu de sémantique.

- `<br>` sert à créer un saut de ligne dans un bloc de texte.
  - ⚠ Il ne **doit pas** être utilisé pour ajouter des marges entre des paragraphes ou pour ajouter de l'espace dans un paragraphe.



##==##


## Exemple

<!-- .slide: class="width-code" -->

```
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
<div>Ut fringilla elit est, sit amet efficitur eros tempus et.</div>
```

<p style="margin: 20px 96px">❌ <strong>Non valide :</strong> Les textes ne sont contenus dans aucun élément sémantique</p>

##==##


## Exemple

<!-- .slide: class="width-code" -->

```
<p>
  Du texte <br><br>Encore du texte <br><br>Encore plus de texte
</p>
```

<p style="margin: 20px 96px">
❌ <strong>Non valide :</strong> Utilisation inappropriée de <code>br</code> pour créer des espacements au lieu d'utiliser plusieurs paragraphes.
</p>


##==##


## Exemple

<!-- .slide: class="width-code" -->

```
  <p>Du texte</p>
  <p>Encore du texte</p>
  <p>Encore plus de texte</p>
```
<p style="margin: 20px 96px">
✅ <strong>Valide :</strong>  Les textes sont dans des paragraphes.
</p>
