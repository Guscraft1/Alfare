# Choses à faire :

-> Revoir tous les logs en les finalisant + ajouter des try catch si manque des perms (pour éviter erreur et prévenir des perms à ajouter) + Plus agréable à lire et un thème et une méthode commune [Comme les titres] + revoir toutes les argus si un jour à cause MAJ devient à null ou innacessible
    - Finir les logs des salons

- userUpdate.js                 -> Tout faire car pas test
- guildMemberRemove.js          -> Revoir l'affichage si ban ou kick
- guildMemberUpdate.js          -> Ajouter les trucs nitro
- messageReactionRemoveAll.js   -> Ajouter les membres qui avaient réagit
- messageReactionRemoveEmoji.js -> Ajouter les membres qui avaient réagit
- messageDelete.js              -> Plus de détails (notamment embed)
- messageDeleteBulk.js          -> Plus de détails (notamment embed)
- messageUpdate.js              -> Plus de détails (notamment embed)
- voiceStateUpdate.js           -> Fix demande de parole dans stage : quand quitte la scène main se lève et se baisse

- Faire la catégorie des guild_scheduled_events
- à partir de guild_voice_states et descendre

- stageInstanceDelete.js        -> Envoie le message 2 fois

## Quand transfert sur le vrai bot :

-> index.js : Vérifier le token  
-> ready.js : Vérifier le status + le déploiement des commandes en global