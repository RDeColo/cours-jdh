/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 - Dans la librairie bd.js vous aller devoir créer un objet ficheBd pouvant stocker les informations suivantes:
 id		entier incrémenté
 titre	
 auteur
 sortie	année de sortie
 resume
 prix	si non defini dans le constructeur, mettre a 0.00
 stock	si non defini dans le constructeur, mettre a 0
 
 - Cet objet aura 3 methodes:
 stocker(qte)	incrémente le stock de qte si fourni, de 1 sinon
 destocker(qte)	décrémente le stock de qte si fourni, de 1 sinon
 toString()		affiche une répésentation textuelle de l'objet
 ex: "FICHE BD N°1 : Luky Luke";
 "Auteur: Uderzo";
 "Prix  : 15.25";
 "Stock : 100";
 */

function ficheBd(id, titre, auteur, sortie, resume, prix, stock)
{
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.sortie = sortie;
    this.resume = resume;
    this.prix = (prix === undefined) ? 0.00 : prix;
    this.stock = (stock === undefined) ? 0 : stock;
    this.stocker = increment;
    this.destocker = decrement;
}
;

function increment(qte)
{
    this.stock += (qte === undefined) ? 1 : qte;
}
;

function decrement(qte)
{
    if (this.stock > 0)
    {
        this.stock -= (qte === undefined) ? 1 : qte;
    }

    if (this.stock < 0)
    {
        this.stock = 0;
    }
}
;

ficheBd.prototype.toString = function ()
{
    ficheHTML = "<br/>FICHE BD N°" + this.id + " : " + this.titre + "<br/>";
    ficheHTML += "Auteur: " + this.auteur + "<br/>";
    ficheHTML += "Prix  : " + this.prix + "<br/>";
    ficheHTML += "Stock : " + this.stock + "<br/>";
    return ficheHTML;
};

/*
 - Dans le fichier bd.js
 - Créer une classe stockBd() dont le constructeur instancie 2 propriétés de tableau "stock" et "stockByKey"
 - Créer une methode referencer(bd) qui vérifie que le paramètre soit un objet. Si c'est
 le cas, il ajoute une entrée dans la propiété stockByKey (clef = id de la bd, valeur = indice dans le tableau stock)
 on ajoute dans le tableau stock, l'objet ficheBd passé en paramètre
 - Créer une methode ajouter(bd) qui accèpte les même paramètres que notre classe ficheBd
 cette fonction créer un objet ficheBd qu'elle ajoute dans l'arbre stock et stockByKey
 - Créer les methode stocker() et destocker() qui prennent en premier paramêtre l'id de 
 la Bd à modifier, et en second paramètre, la quantité à modifier
 - Enfin, créer une methode toString() permettant d'afficher un tableau de toutes les Bd en stock
 ce tableau sera en xhtml
 */

function stockBd()
{
    this.stock = new Array();
    this.stockByKey = new Array();

    this.referencer = function (bd)
    {
        if (typeof bd === 'objet')
        {
            this.stock.push(bd);
            this.stockByKey[bd.id] = (stock.length - 1);
        }
    };

    this.ajouter = function (id, titre, auteur, sortie, resume, prix, stock)
    {
        this.referencer(new ficheBd(id, titre, auteur, sortie, resume, prix, stock));
    };


    this.stocker = function (id, qte)
    {
        if (this.stockByKey[id] != 'undefined')  
        {
            var bd = this.stock[this.stockByKey[id]];
            bd.stock += (qte === undefined) ? 1 : qte;
        }
    };


    this.destocker = function (id, qte)
    {
        if (this.stockByKey[id] != 'undefined')  
        {
            var bd = this.stock[this.stockByKey[id]];
            bd.stock += (qte === undefined) ? 1 : qte;
                
            if (bd.stock > 0)
            {
                bd.stock -= (qte === undefined) ? 1 : qte;
            };

            if (bd.stock < 0)
            {
                bd.stock = 0;
            };
        }
    };

//    	- Enfin, créer une methode toString() permettant d'afficher un tableau de toutes les Bd en stock
//	  ce tableau sera en xhtml
    prototype.toString = function ()
    {
        for ( i = 0; i < this.stock.length; i++) 
        {
            tableHTML = "<br/>FICHE BD N°" + this.stock[i].id + " : " + this.stock[i].titre + "<br/>";
            tableHTML += "Auteur: " + this.stock[i].auteur + "<br/>";
            tableHTML += "Prix  : " + this.stock[i].prix + "<br/>";
            tableHTML += "Stock : " + this.stock[i].stock + "<br/>";
        };
        return tableHTML;
    };
};

