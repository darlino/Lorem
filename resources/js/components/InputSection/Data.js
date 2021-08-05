import {
    Center,Text,Heading
  } from "@chakra-ui/react"
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
export const questions = [
    {
        title:"Comment envoyer une requête",
        text:<><Heading as="h4" size="md" textAlign="justify" color="black">Pour envoyer une requ&ecirc;te au support technique, rendez-vous a l&rsquo;adresse suivante <a color="blue.50" href="https://support-gitsa.atlassian.net/servicedesk/customer/portal/1"> help.git-sa.net </a>, ensuite, suivez la procédure suivante :</Heading>
        <OrderedList p="50px">
        <ListItem>Choisissez la rubrique concernant votre demande et la rubrique <i>autres </i>pour les requêtes ne figurant pas dans la liste.</ListItem>
        <li>Remplissez toutes les informations requises (Champ avec l'&eacute;toile rouge) avec les donn&eacute;es correctes et precises.</li>
        <li>Cliquez sur le bouton <i>Envoyer </i>pour soumettre votre requ&ecirc;te.</li>
        
        
        <li>Les noms et les pr&eacute;noms doivent correspondre exactement &agrave; celles pr&eacute;sentes sur vos pi&egrave;ces d&rsquo;identification.</li>
        <li>Le num&eacute;ro de t&eacute;l&eacute;phone doit &ecirc;tre pr&eacute;c&eacute;d&eacute; de l&rsquo;indicatif t&eacute;l&eacute;phonique du pays et ne doit pas contenir des espaces.</li>
        <li>Toutes requ&ecirc;tes n&eacute;cessitent au moins trois pi&egrave;ces jointes &agrave; savoir le selfie avec la carte d&rsquo;identification, l&rsquo;avant et l'arri&egrave;re de la carte d&rsquo;identification: La carte d&rsquo;identification peut &ecirc;tre la <strong>carte nationale d&rsquo;identification</strong>, le <strong>passeport</strong> ou autres pi&egrave;ces d'identifications. </li>
        <li>Les fichiers doivent avoir une taille maximale 3 Mo par fichier</li>
        </OrderedList></>
    },
    {
        title:"La livraison des produits",
        text:<>
         


<Text color="black">Les d&eacute;lais de livraison commencent &agrave; partir du jour o&ugrave; vous passez votre commande jusqu'au jour o&ugrave; notre soci&eacute;t&eacute; de livraison livre effectivement le produit</Text>

        </> },


]