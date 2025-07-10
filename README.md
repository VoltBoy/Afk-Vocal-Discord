# Afk-vocal
Sert à laissé votre compte en vocal sans avoir besoin de laissé discord ouvert tout en personnalisant votre statut directement dans le script.

Pour le configuré il vous suffit juste de modifié le config.json et de glisser le(s) token(s) dans tokens.txt si il y en a plusieurs il faut faire 1 ligne pour 1 token.

Pour lancer le script il suffit d'installer les bonnes versions des dépendances et de lancer le script avec node .

Si vous avez des difficultés pour intaller les dépendances où des problèmes avec le script vous pouvez directement me contacter sur discord : j8vc




{
  "vocal": "xx",                            rentrer l'id du salon vocal où vous voulez que le script se connecte
  "guild": "xx",                            rentrer l'id du serveur où vous voulez que le script se connecte
  "casque": true,                           true ou false pour activer ou non le casque
  "status": "dnd",                          changer la présence de votre compte discord
  "state": "En live sur Twitch !",          changer le statut directement dans le script
  "emojistatus": "🎥",                      changer l'émoji de votre statut
  "stream_url": "https://twitch.tv/xx"      changer l'url du stream
}