<!-- .slide: class="quote-slide" -->

> 5.1 Chaque tableau de données complexe a-t-il un résumé ? 
> [source](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1)

##==##

<!-- .slide: -->

## De la bonne utilisation des tableaux

* Bannir au maximum l'utilisation de ``<table>`` pour de la mise en forme.
* Implémenter le role="presentation" sur l'élément ``<table>`` si le tableau est simple
* Que le tableau soit lisible linéairement

Notes: 
https://disic.github.io/guide-integrateur/4-tableaux.html

##==##

<!-- .slide: -->

## role="presentation"

* Permet d'annuler la sémantique native de l'élément qui la possède
* Va lire le contenu, tel qu'il se présente devant nous
* Perds les comportements clavier du composant pour celui du traitement de texte

Notes: 
Faire un exemple


##==##

<!-- .slide: class="with-code" -->

## Tableau simple

* Simple quand pas de cellules fusionnées ou autres structures rendant la lisibilité complexe
* On va dans ce cas:
  * Implémenter un élément <caption> qui est le titre du tableau, il permet aux utilisateurs de comprendre quelles données ils vont rencontrer.
  * Implémenter les en-têtes dans des éléments <th> ;
  * Pour les en-têtes de colonnes, l'élément <th> doit avoir l'attribut scope="col" ;
  * Pour les en-têtes de lignes, l'élément <th> doit avoir l'attribut scope="row".

##==##

<!-- .slide: -->

## Exemple

<table>
 <caption>Accessibilité des lignes du réseau de surface RATP</caption>
 <tr>
  <th scope="col">Équipements</th>
  <th scope="col">Nombre de lignes</th>
  <th scope="col">Pourcentage du total de lignes</th>
 </tr>
 <tr>
  <td>Rampe d'accès</td>
  <td>260</td>
  <td>70,46 %</td>
 </tr>
 <tr>e
  <td>Annonce sonore</td>
  <td>318</td>
  <td>86,17 %</td>
 </tr>
</table>

##==##

<!-- .slide: class="with-code" -->

## Exemple

```
<table>
 <caption>Accessibilité des lignes du réseau de surface RATP</caption>
 <tr>
  <th scope="col">Équipements</th>
  <th scope="col">Nombre de lignes</th>
  <th scope="col">Pourcentage du total de lignes</th>
 </tr>
 <tr>
  <td>Rampe d'accès</td>
  <td>260</td>
  <td>70,46 %</td>
 </tr>
 <tr>
  <td>Annonce sonore</td>
  <td>318</td>
  <td>86,17 %</td>
 </tr>
</table>
```

##==##

<!-- .slide: -->

## Tableau complexe

* Complexe dès que le contenu et la mise en forme s'entremêle
* Hautement déconseillé
* Pour rajouter de la lisibilité, on relie chaque cellule explicitement grâce à des identifiants et des attributs headers

##==##

<!-- .slide: -->

## Exemple

<table>
 <caption>Nombre de gares et points d'arrêts TER, en fonction du type de handicap et du type de dispositif par handicap</caption>
 <tr>
  <th id="malvoyant" colspan="2">Malvoyants</th>
  <th id="aveugle" colspan="2">Aveugles</th>
 </tr>
 <tr>
  <th id="data1" headers="malvoyant">Obstacles contrastés</th>
  <th id="data2" headers="malvoyant">Portes contrastées</th>
  <th id="data3" headers="aveugle">Obstacles détectables à la canne</th>
  <th id="data4" headers="aveugle">Guidage en braille</th>
 </tr>
 <tr>
  <td headers="malvoyant data1">73</td>
  <td headers="malvoyant data2">65</td>
  <td headers="aveugle data3">103</td>
  <td headers="aveugle data4">0</td>
 </tr>
 <tr>
  <td colspan="2" headers="malvoyant">138</td>
  <td colspan="2" headers="aveugle">103</td>
 </tr>
</table>

##==##

<!-- .slide: class="with-code" -->

## Exemple

```
<table>
 <caption>Nombre de gares et points d'arrêts TER, en fonction du type de handicap et du type de dispositif par handicap</caption>
 <tr>
  <th id="malvoyant" colspan="2">Malvoyants</th>
  <th id="aveugle" colspan="2">Aveugles</th>
 </tr>
 <tr>
  <th id="data1" headers="malvoyant">Obstacles contrastés</th>
  <th id="data2" headers="malvoyant">Portes contrastées</th>
  <th id="data3" headers="aveugle">Obstacles détectables à la canne</th>
  <th id="data4" headers="aveugle">Guidage en braille</th>
 </tr>
 <tr>
  <td headers="malvoyant data1">73</td>
  <td headers="malvoyant data2">65</td>
  <td headers="aveugle data3">103</td>
  <td headers="aveugle data4">0</td>
 </tr>
 <tr>
  <td colspan="2" headers="malvoyant">138</td>
  <td colspan="2" headers="aveugle">103</td>
 </tr>
</table>
```

##==##

<!-- .slide: -->

# tata



