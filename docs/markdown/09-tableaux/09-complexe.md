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




