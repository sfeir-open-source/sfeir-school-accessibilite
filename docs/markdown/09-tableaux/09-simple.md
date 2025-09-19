<!-- .slide: class="with-code" -->

## Tableau simple

* Simple quand pas de cellules fusionnées ou autres structures rendant la lisibilité complexe
* On va dans ce cas:
  * Implémenter un élément <caption> qui est le titre du tableau, il permet aux utilisateurs de comprendre quelles données ils vont rencontrer.
  * Implémenter les en-têtes dans des éléments <th> ;
  * Pour les en-têtes de colonnes, l'élément <th> doit avoir l'attribut scope="col" ;
  * Pour les en-têtes de lignes, l'élément <th> doit avoir l'attribut scope="row".


##==##




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
 <tr>
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
