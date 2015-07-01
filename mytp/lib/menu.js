/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
Dans le fichier lib/menu.js
- créer un tableau "pagesDisponibles" avec les informations suivantes (titre court, page, titre long):
	["Accueil","index.htm","Bienvenue sur "+projet["nom"]],
	["Recherche","recherche.htm","Votre recherche de BD"],
	["Commande","commande.htm","Votre panier"]

- créer une fonction affichePageMenu() qui affiche le menu (<div id="menu">) comme précédement.
	* Cette fonction accepte 1 argument, qui est le nom de la page selectionnée (ex: index.htm)
	* utiliser les boucles pour créer les balises <li>
	* utiliser une instruction de controle pour tester la page selectionnée et lui attribuer l'atttribut class="select"
*/


/* global projet */

var pagesDisponibles = new Array(
                    ["Accueil","index.htm","Bienvenue sur " + projet["nom"]],
                    ["Recherche","recherche.htm","Votre recherche de BD"],
                    ["Commande","commande.htm","Votre panier"]
		);

function affichePageMenu(nompage)
{
    var menuHTML = "<div id=\"menu\">";
    menuHTML +=  "<ul>";
    
    for (i = 0; i < pagesDisponibles.length ; i++)
    {
        if (nompage == pagesDisponibles[i][1])
        {
            menuHTML +=  '<li class="select">' 
            +   '<a href="' + pagesDisponibles[i][1] + '" title="' + pagesDisponibles[i][0] 
            +   '">' + pagesDisponibles[i][0]
            +   '</a></li>';
        }
        else
        {
            menuHTML +=  '<li>' 
            +   '<a href="' + pagesDisponibles[i][1] + '" title="' + pagesDisponibles[i][0] 
            +   '">' + pagesDisponibles[i][0]
            +   '</a></li>';
        }

    }
    
    menuHTML +=  "</ul>";
    menuHTML +=  "</div>";
    document.write(menuHTML);
    
    /*
            <li class="select"><a href="index.htm" title="Accueil">Accueil</a></li>
            <li><a href="recherche.htm" title="Recherche">Recherche</a></li>
            <li><a href="commande.htm" title="Commande">Commande</a></li>

   */
      
};


