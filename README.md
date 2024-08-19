# multiTreadingJs
Ce modèle montre comment utiliser plusieurs threads (Workers) pour effectuer plusieurs tâches intensives en calcul simultanément, ce qui peut grandement améliorer la performance et la réactivité d'une application web.

## explication
Dans ce projet il y a deux fonctions une qui calculebla somme de nombre et une qui compte le nombre de nombres paires.
Le but etant de démontrer le fonctionnement du multi-threading.

## comment ça marche :
Lorsque l'utilisateur clique sur "Calculate", les deux workers démarrent simultanément, chacun dans son propre thread.
sumWorker calcule la somme de tous les nombres jusqu'au nombre spécifié.
evenCountWorker compte le nombre de chiffres pairs jusqu'au même nombre.
Les deux calculs se font en parallèle sans interférer l'un avec l'autre.
Les résultats sont affichés dès que chaque worker a terminé son calcul.
