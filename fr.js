const messages = {
    
    // Login
    'Email': 'Email',
    'Login': 'Se connecter',
    'Password': 'Mot de passe',
    'Provided by your administrator': 'Fourni par votre administrateur',
    'Remember me': 'Se souvenir de moi',
    'no-identification-info': 'Si vous n\'avez pas vos identifiants, veuillez contacter votre administrateur',
    'bad-credentials': 'Vos identifiants sont incorrects. Veuillez réessayer.',
    'not-enough-rights': 'Vous n\'avez pas les droits suffisants pour vous connecter.',
    'user-not-found': 'L\'utilisateur n\'a pas été trouvé.',

    // General
    'more-info': 'Plus d\'infos',
    'from': 'Du',
    'to': 'Au',
    'real-time': 'en temps réel',
    'update': 'Modifier',
    'delete': 'Supprimer',
    'previous': 'Précédent',
    'next': 'Suivant',
    'send': 'Envoyer',
    'export-all': 'Exporter tout',
    'yes': 'Oui',
    'no': 'Non',
    'open': 'Ouvert',
    'fullname': 'Nom complet',
    'job-position': 'Position',
    'assistance': 'Besoin d’aide ? Contactez jessie@whasq.com  ( Du lundi à vendredi de 9:00 à 12:00 et de 14:00 à 18:00) ',
    'download-attachment': 'Télécharger la pièce jointe',

    // Menu
    'activity': 'Activité',
    'actives-users': 'Utilisateurs Actifs',
    'registered-users': 'Utilisateurs Inscrits',
    'whasqs-answers': 'Whasqs & Réponses',
    'skills': 'Talents',
    'time-savings': 'Gain de temps',
    'whasqers': 'Whasqers',
    'podium': 'Podium',
    'search': 'Recherche',
    'manage': 'Gestion',
    'skills-categories': 'Talents & Catégories',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs signalés',
    'answers-reports': 'Réponses signalées',
    'users': 'Utilisateurs',
    'admin': 'Administration',
    'targets': 'Objectifs & Gamification',
    'notifications': 'Notifications',

    // Activity
    'eve-computed-kpi': 'indicateur calculé à J-1',
    'no-data-for-selected-period': 'Aucune donnée disponible pour la période sélectionnée',
    'no-data-available': 'Aucune donnée disponible',

    // ActivityActiveUsers
    'actives-title': 'Utilisateurs Actifs',
    'actives-kpi-title': 'Actifs',
    'actives-kpi-help-title': 'Actifs',
    'actives-kpi-help-message': 'Cet indicateur représente le nombre d\'utilisateurs qui se sont connectés au moins une fois au mois de "{month}".',
    'actives-dda-kpi-title': 'Actifs DDA',
    'actives-dda-kpi-help-title': 'Actifs "DDA" (Depuis le Début de l\'Application)',
    'actives-dda-kpi-help-message': 'Cet indicateur représente le nombre d\'utilisateurs qui se sont connectés depuis le début de l\'activité.',
    'actives-target-kpi-title': 'Actifs - Objectifs',
    'actives-target-kpi-help-title': 'Actifs - Objectifs',
    'actives-target-kpi-help-message': 'Cet indicateur représente le rapport entre le nombre d\'utilisateurs qui se sont connectés au moins une fois au mois de "{month}" par rapport à l\'objectif défini.',
    'actives-evolution-title': 'Evolution des actifs',
    'actives-evolution-help-title': 'Evolution des actifs',
    'actives-evolution-help-message': 'Cet indicateur représente le nombre d\'utilisateurs actifs.',
    'actives-dda-evolution-title': 'Evolution des actifs DDA',
    'actives-dda-evolution-help-title': 'Evolution des actifs DDA',
    'actives-dda-evolution-help-message': 'Cet indicateur représente le nombre d\'utilisateurs actifs cumulés depuis la création du store.',
    'actives-notregistered-evolution-title': 'Evolution des actifs - inscription',
    'actives-notregistered-evolution-help-title': 'Evolution des actifs - inscription',
    'actives-notregistered-evolution-help-message': 'Cet indicateur représente le nombre d\'utilisateurs actifs en soustrayant les utilisateurs inscrits.',

    // ActivityRegisteredUsers
    'registered-title': 'Utilisateurs Inscrits - {month}',
    'registered-kpi-title': 'Inscrits',
    'registered-kpi-help-title': 'Inscrits',
    'registered-kpi-help-message': 'Cet indicateur représente le nombre d\'utilisateurs qui se sont inscrits au mois de "{month}".',
    'registered-inactives-kpi-title': 'Pourcentage d\'inscrits non actifs',
    'registered-inactives-kpi-help-title': 'Pourcentage d\'inscrits non actifs',
    'registered-inactives-kpi-help-message': 'Cet indicateur représente le rapport entre le nombre d\'utilisateurs qui se sont inscrits au mois de "{month}" sans s\'être connectés par rapport au nombre d\'utilisateurs total inscrits dans le mois.',
    'registered-inactives-evolution-title': 'Evolution des inscriptions',
    'registered-inactives-evolution-help-title': 'Evolution des inscriptions',
    'registered-inactives-evolution-help-message': 'Cet indicateur représente le nombre d\'utilisateurs inscrits.',

    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs & Réponses - {month}',
    'whasqs-answers-kpi-title': 'Nombre de Whasqs et réponses',
    'whasqs-answers-kpi-help-title': 'Nombre de Whasqs et réponses',
    'whasqs-answers-kpi-help-message': 'Cet indicateur représente le nombre de whasqs postés additionné au nombre de réponses postées au mois de "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Nombre de Whasqs / créateur de whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Nombre de Whasqs / créateur de whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'Cet indicateur représente le nombre de whasqs postés au mois de "{month}" par créateur de whasqs.',
    'answers-kpi-title': 'Nombre de réponses',
    'answers-kpi-help-title': 'Nombre de réponses',
    'answers-kpi-help-message': 'Cet indicateur représente le nombre de réponses postées au mois de "{month}".',
    'answers-by-creator-kpi-title': 'Nombre de réponses / créateur de réponses',
    'answers-by-creator-kpi-help-title': 'Nombre de réponses / créateur de réponses',
    'answers-by-creator-kpi-help-message': 'Cet indicateur représente le nombre de réponses postées au mois de "{month}" par créateur de réponses.',
    'whasqs-with-contribution-kpi-title': 'Pourcentage de Whasqs avec interaction',
    'whasqs-with-contribution-kpi-help-title': 'Pourcentage de Whasqs avec interaction',
    'whasqs-with-contribution-kpi-help-message': 'Cet indicateur représente la part du nombre de whasqs qui ont reçu des réponses au mois de "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Pourcentage de Whasqs avec interaction DDA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Pourcentage de Whasqs avec interaction DDA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Cet indicateur représente la part du nombre de whasqs qui ont reçu des réponses.',
    'whasqs-resolved-part-kpi-title': 'Pourcentage de Whasqs résolus',
    'whasqs-resolved-part-kpi-help-title': 'Pourcentage de Whasqs résolus',
    'whasqs-resolved-part-kpi-help-message': 'Cet indicateur représente la part du nombre de whasqs qui ont été résolus au mois de "{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Pourcentage de Whasqs résolus DDA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Pourcentage de Whasqs résolus DDA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Cet indicateur représente la part du nombre de whasqs qui ont été résolus.',
    'whasqs-evolution-title': 'Evolution du nombre de whasqs',
    'whasqs-evolution-help-title': 'Evolution du nombre de whasqs',
    'whasqs-evolution-help-message': 'Cet indicateur représente le nombre cumulé de whasqs.',
    'answers-evolution-title': 'Evolution du nombre de réponses',
    'answers-evolution-help-title': 'Evolution du nombre de réponses',
    'answers-evolution-help-message': 'Cet indicateur représente le nombre cumulé de réponses.',

    // ActivitySkills
    'skills-title': 'Talents',
    'skills-dda-kpi-title': 'Nombre total des talents identifiés DDA',
    'skills-dda-kpi-help-title': 'Nombre total des talents identifiés DDA',
    'skills-dda-kpi-help-message': 'Cet indicateur représente le nombre de talents qui ont été identifiés par les whasqers depuis le début de l\'activité.',
    'skills-part-kpi-title': 'Part de talents uniques identifiés',
    'skills-part-kpi-help-title': 'Part de talents uniques identifiés',
    'skills-part-kpi-help-message': 'Cet indicateur représente le rapport entre le nombre de talents uniques qui ont été identifiés par les whasqers depuis la création de l\'activité par rapport au nombre de talents existants.',
    'skills-evolution-title': 'Evolution du nombre de talents identifiés dans les whasqs',
    'skills-evolution-help-title': 'Evolution du nombre de talents identifiés dans les whasqs',
    'skills-evolution-help-message': 'Cet indicateur représente le nombre de talents identifiés dans les whasqs.',
    'most-used-cats-whasqs-kpi-title': 'Top 5 des catégories les plus utilisées dans les whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 des catégories les plus utilisées dans les whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 catégories qui contiennent le plus de talents utilisés dans les whasqs.',
    'most-used-cats-whasqs-kpi-help-message-2': 'Les pastilles colorées représentent le nombre de talents utilisés dans les whasqs pour la catégorie correspondante.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 des talents les plus utilisés dans les whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 des talents les plus utilisés dans les whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus utilisés dans les whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'Les pastilles colorées représentent le nombre d\'utilisation dans les whasqs de chaque talent.',
    'most-used-whasqers-kpi-title': 'Top 5 des talents les plus déclarés par les whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 des talents les plus déclarés par les whasqers',
    'most-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les plus identifiés par les whasqers.',
    'most-used-whasqers-kpi-help-message-2': 'Les pastilles colorées représentent le nombre d\'identification par les whasqers de chaque talent.',
    'less-used-whasqers-kpi-title': 'Top 5 des talents les moins déclarés par les whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 des talents les moins déclarés par les whasqers',
    'less-used-whasqers-kpi-help-message-1': 'Vous trouverez dans ce tableau les 5 talents les moins identifiés dans les whasqs.',
    'less-used-whasqers-kpi-help-message-2': 'Les pastilles colorées représentent le nombre d\'identification par les whasqers de chaque talent.',

    // TimeSavings
    'time-savings-title': 'Gain de temps - {month}',
    'minutes-earned-kpi-title': 'Minutes gagnées du mois',
    'minutes-earned-kpi-help-title': 'Minutes gagnées du mois',
    'minutes-earned-kpi-help-message': 'Cet indicateur représente le nombre de minutes gagnées au mois de "{month}".',
    'minutes-earned-dda-kpi-title': 'Minutes gagnées DDA',
    'minutes-earned-dda-kpi-help-title': 'Minutes gagnées DDA',
    'minutes-earned-dda-kpi-help-message': 'Cet indicateur représente le nombre de minutes gagnées depuis le début de l\'activité.',
    'minutes-earned-month-kpi-title': 'Minutes gagnées du mois',

    // Podium
    'podium-title': 'Podium',
    'whasqers-of-month': 'Whasqers du mois de',
    'no-podium-for-selected-month': 'Aucun podium n\'est disponible pour le mois sélectionné',

    // Card-user
    'answers-label': 'REPONSES',
    'solutions-label': 'SOLUTIONS',
    'see-profile': 'Voir le profil',

    // Search
    'search-title': 'Recherche',
    'search-by-name-placeholder': 'Recherche par nom...',
    'no-result-select-criteria': 'Pas de résultat. Veuillez saisir au moins un critère.',

    // CategoriesSearchBlock
    'dynamic-search-title': 'Recherche dynamique',

    // SkillsCategories
    'skills-categories-title': 'Talents & Catégories',
    'update-cat-for-lang': 'Modification de la catégorie pour la langue {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modification du talent pour la catégorie "{cat}" et la langue FR',
    'add-cat-for-lang-fr': 'Ajout de la catégorie pour la langue FR',
    'add-skill-for-cat-and-lang-fr': 'Ajout du talent pour la catégorie "{cat}" et la langue FR',
    'delete-cat-confirm-message': 'Etes-vous sûr de vouloir supprimer cette catégorie ?',
    'delete-skill-confirm-message': 'Etes-vous sûr de vouloir supprimer ce talent ?',
    'choose-lang': 'Choisir la langue',
    'add-lang': 'Ajouter une langue',
    'add-cat': 'Ajouter une catégorie',

    // InfoMessage
    'cat-deleted': 'La catégorie "{cat}" a été supprimée.',
    'error-deleting-cat': 'Un problème est survenu lors de la suppression de la catégorie "{cat}".',
    'skill-deleted': 'Le talent "{skill}" a été supprimé.',
    'error-deleting-skill': 'Un problème est survenu lors de la suppression du talent "{skill}".',

    // SkillCategoriesModal
    'already-existing-cat': 'Catégorie(s) déjà existante(s)',
    'already-existing-skill': 'Talent(s) déjà existant(s)',
    'no-existing-cat': 'Aucune catégorie existante',
    'no-existing-skill': 'Aucun talent existant',

    // CreateLanguageModal
    'add-new-lang': 'Ajout d\'une nouvelle langue',
    'already-implemented-langs': 'Langues déjà implémentées',

    // WhasqsList
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Etes-vous sûr de vouloir bloquer ce whasq ?',
    'unblock-whasq-confirm-message': 'Etes-vous sûr de vouloir débloquer ce whasq ?',
    'ban-user-confirm-message': 'Etes-vous sûr de vouloir bannir cet utilisateur ?',
    'unban-user-confirm-message': 'Etes-vous sûr de vouloir retirer le bannissement de cet utilisateur ?',
    'remove-whasq-confirm-message': 'Etes-vous sûr de vouloir supprimer ce whasq ?',
    'add-whasq': 'Ajouter un Whasq',
    'whasqs-list': 'Liste de Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Création',
    'whasqs-column-update': 'Mise à jour',
    'whasqs-column-title': 'Titre',
    'whasqs-column-status': 'Statut',
    'whasqs-column-urgent': 'Urgent',
    'whasqs-column-answers': 'Réponses',
    'whasqs-column-read': 'Lus',
    'whasqs-column-creator': 'Créateur',
    'whasqs-column-skills': 'Talents',
    'whasqs-column-actions': 'Actions',
    'whasq-resolved-by': 'Résolu par',
    'whasq-resolved-at': 'le',
    'whasqs-action-save-updates': 'Sauvegarder les modifications',
    'whasqs-action-edit-whasq': 'Editer le whasq',
    'whasqs-action-unblock-whasq': 'Débloquer le whasq',
    'whasqs-action-block-whasq': 'Bloquer le whasq',
    'whasqs-action-see-whasq-channel': 'Voir la chaine de discussion du whasq',
    'whasqs-action-unban-user': 'Retirer le bannissement de l\'utilisateur',
    'whasqs-action-ban-user': 'Bannir l\'utilisateur',
    'whasqs-action-remove-whasq': 'Suppression du whasq',
    'whasqs-notify-around': 'Notifier autour',
    'whasqs-language': 'Langue',

    // WhasqChannelModal
    'whasq-channel-title': 'Conversation du whasq "{whasq-title}"',
    'usefull-answer': 'utile(s)',
    'champion-answer': 'CHAMPION(NE)',
    'whasq-channel-edit-whasq-title': 'Titre',
    'whasq-channel-edit-whasq-message': 'Message',
    'whasq-channel-edit-answer-message': 'Message',
    'whasq-channel-block-answer-confirm': 'Etes vous sûr de vouloir bloquer cette réponse ?',
    'whasq-channel-unblock-answer-confirm': 'Etes vous sûr de vouloir débloquer cette réponse ?',
    'whasq-channel-delete-answer-confirm': 'Etes vous sûr de vouloir supprimer cette réponse ?',

    // AddWhasqModal
    'add-whasq-title': 'Ajout d\'un nouveau whasq',
    'add-whasq-item-title': 'Titre',
    'add-whasq-item-message': 'Message',
    'add-whasq-item-exchange': 'Echange',
    'add-whasq-item-optionnal': 'Optionnel',
    'add-whasq-item-channel': 'Channel',
    'add-whasq-item-first-skill': 'Premier talent',
    'add-whasq-item-second-skill': 'Second talent',
    'add-whasq-item-third-skill': 'Troisième talent',
    'add-whasq-item-notify-around': 'Notifier autour de vous ?',
    'add-whasq-item-urgent': 'Urgent ?',
    'add-whasq-item-send-everyone': 'Envoyer à tout le monde ?',
    'add-whasq-skill-required': 'Il est obligatoire de renseigner au moins un talent.',
    'add-whasq-title-required': 'Il est obligatoire de renseigner le titre.',
    'add-whasq-message-required': 'Il est obligatoire de renseigner le message.',

    // WhasqsReports
    'whasqs-reports-title': 'Whasqs signalés',
    'whasqs-reports-unblock-whasq-confirm-message': 'Etes-vous sûr de vouloir débloquer ce whasq ?',
    'whasqs-reports-unban-user-confirm-message': 'Etes-vous sûr de vouloir retirer le bannissement de cet utilisateur ?',
    'whasqs-reports-ban-user-confirm-message': 'Etes-vous sûr de vouloir bannir cet utilisateur ?',
    'whasqs-reports-remove-whasq-confirm-message': 'Etes-vous sûr de vouloir supprimer ce whasq ?',
    'whasqs-reports-list': 'Liste des Whasqs signalés',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Date de création',
    'whasqs-reports-column-last-update': 'Dernière mise à jour',
    'whasqs-reports-column-title': 'Titre',
    'whasqs-reports-column-status': 'Statut',
    'whasqs-reports-column-urgent': 'Urgent',
    'whasqs-reports-column-answers': 'Réponses',
    'whasqs-reports-column-creator': 'Créateur',
    'whasqs-reports-column-reported-by': 'Signalé par',
    'whasqs-reports-column-actions': 'Actions',
    'whasq-reports-resolved-by': 'Résolu par',
    'whasq-reports-resolved-at': 'le',
    'whasqs-reports-action-save-updates': 'Sauvegarder les modifications',
    'whasqs-reports-action-edit-whasq': 'Editer le whasq',
    'whasqs-reports-action-unblock-whasq': 'Débloquer le whasq',
    'whasqs-reports-action-see-whasq-channel': 'Voir la chaine de discussion du whasq',
    'whasqs-reports-action-unban-user': 'Retirer le bannissement de l\'utilisateur',
    'whasqs-reports-action-ban-user': 'Bannir l\'utilisateur',
    'whasqs-reports-action-remove-whasq': 'Suppression du whasq',

    // AnswersReports
    'answers-reports-title': 'Réponses signalées',
    'answers-reports-unblock-answer-confirm-message': 'Etes-vous sûr de vouloir débloquer cette réponse ?',
    'answers-reports-unban-user-confirm-message': 'Etes-vous sûr de vouloir retirer le bannissement de cet utilisateur ?',
    'answers-reports-ban-user-confirm-message': 'Etes-vous sûr de vouloir bannir cet utilisateur ?',
    'answers-reports-remove-answer-confirm-message': 'Etes-vous sûr de vouloir supprimer cette réponse ?',
    'answers-reports-list': 'Liste des réponses signalées',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Date de création',
    'answers-reports-column-last-update': 'Dernière mise à jour',
    'answers-reports-column-message': 'Message',
    'answers-reports-column-usefull-count': 'Nb Utiles',
    'answers-reports-column-champion': 'Champion ?',
    'answers-reports-column-creator': 'Créateur',
    'answers-reports-column-reported-by': 'Signalé par',
    'answers-reports-column-actions': 'Actions',
    'answers-reports-action-save-updates': 'Sauvegarder les modifications',
    'answers-reports-action-edit-answer': 'Editer la réponse',
    'answers-reports-action-unblock-answer': 'Débloquer la réponse',
    'answers-reports-action-see-whasq-channel': 'Voir la chaine de discussion du whasq',
    'answers-reports-action-unban-user': 'Retirer le bannissement de l\'utilisateur',
    'answers-reports-action-ban-user': 'Bannir l\'utilisateur',
    'answers-reports-action-remove-answer': 'Suppression de la réponse',

    // Users
    'users-title': 'Utilisateurs',
    'users-ban-confirm-message': 'Etes-vous sûr de vouloir bannir cet utilisateur ?',
    'users-unban-confirm-message': 'Etes-vous sûr de vouloir retirer le bannissement de cet utilisateur ?',
    'users-archive-confirm-message': 'Etes-vous sur de vouloir archiver cet utilisateur ?',
    'users-import-csv': 'Importer CSV',
    'users-list': 'Liste de Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Date d\'inscription',
    'users-column-last-connection': 'Dernière connexion',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nom complet',
    'users-column-title': 'Titre',
    'users-column-email': 'Email',
    'users-column-actions': 'Actions',
    'users-action-see-profile': 'Voir le profil',
    'users-action-unban-user': 'Retirer le bannissement de l\'utilisateur',
    'users-action-ban-user': 'Bannir l\'utilisateur',
    'users-action-archive-user': 'Archiver un utilisateur',
    'users-import-starting': 'L\'import des utilisateurs a bien débuté',
    'users-action-consider-user-admin': 'Considérer cet utilisateur comme étant admin',
    'users-action-stop-consider-user-admin': 'Ne plus considérer cet utilisateur comme étant admin',
    'users-confirm-consider-admin': 'Etes-vous sûr de vouloir considérer cet utilisateur comme étant admin ?',
    'users-confirm-dont-consider-admin': 'Etes-vous sûr de ne plus vouloir considérer cet utilisateur comme étant admin ?',
    'users-action-consider-user-admin-success': 'L\'utilisateur d\'id {userId} est maintenant administrateur.',
    'users-action-stop-consider-user-admin-success': 'L\'utilisateur d\'id {userId} n\'est maintenant plus administrateur.',

    // ImportUsersModal
    'users-import-title': 'Import d\'utilisateurs',
    'import-users-file-limit': 'Seuls les fichiers CSV d\'une taille inférieure à 1Mo sont acceptés',
    'import-users-error': 'Une erreur est survenue lors de l\'import. Veuillez réessayer.',
    'import-users-btn': 'Importer les utilisateurs',
    'import-users-expected-format': 'Format attendu',
    'import-users-fullname': 'Nom complet',
    'import-users-email': 'Email',
    'import-users-job-position': 'Poste',
    'import-users-phone': 'Téléphone',

    // Targets
    'targets-title': 'Objectifs & Gamification',
    'targets-update-message': 'L\'objectif "{target}" a bien été mis à jour',
    'targets-geoloc-perimeter-updated': 'Le périmètre de géolocalisation a bien été mis à jour',
    'targets-points-atribution-updated': 'L\'attribution de points a bien été mise à jour',
    'targets-target': 'Objectifs',
    'targets-trimester': '3 mois',
    'targets-bimester': '6 mois',
    'targets-year': '12 mois',
    'targets-active-users': 'utilisateurs actifs',
    'targets-geoloc-perimeter': 'Périmètre de géolocalisation',
    'targets-perimeter': 'Périmètre',
    'targets-gamification': 'Gamification',
    'targets-approved-answer': 'Réponse approuvée',
    'targets-usefull-answer': 'Réponse utile',
    'targets-recommended-skill': 'Talent recommandé',
    'targets-points': 'points',
    
    // Header
    'header-profile': 'Profil',
    'header-logout': 'Se déconnecter',
    'french': 'Français',
    'english': 'Anglais',
    'spanish': 'Espagnol',
    'italian': 'Italien',
    'russian': 'Russe',

    // Sidebar
    'sidebar-navigation': 'Navigation',

    // Profile
    'profile': 'Profil',
    'profile-title': 'Profil utilisateur',
    'profile-ban-user-confirm-message': 'Etes-vous sûr de vouloir bloquer cet utilisateur ?',
    'profile-edit-skill-confirm-message': 'Attention, l\'édition du talent sera faite de manière globale pour tous les utilisateurs.\r\nEtes-vous sur de vouloir continuer ?',
    'profile-remove-skill-confirm-message': 'Etes-vous sur de vouloir retirer ce talent de cet utilisateur ?',
    'profile-archive-user-confirm-message': 'Etes-vous sûr de vouloir archiver cet utilisateur ?',
    'whasqer-profile': 'Profil du Whasqer',
    'profile-account-creation': 'Création compte',
    'profile-last-connection': 'Dernière connexion',
    'profile-last-update': 'Dernière mise à jour',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'REPONSES',
    'profile-solutions-column': 'SOLUTIONS',
    'profile-block-button': 'Bloquer',
    'profile-archive-button': 'Archiver',
    'profile-user-archived': 'Cet utilisateur est archivé',
    'profile-skills-subtitle': 'Ses talents',
    'profile-no-listed-skill': 'Aucun talent répertorié',

    // AddUserSkillModal
    'add-skill-for-user': 'Ajout d\'un talent pour {fullname}',
    'already-existing-skills-for-user': 'Talent(s) déjà existant(s) pour l\'utilisateur',
    'available-skills-for-user': 'Talent(s) disponible(s) pour l\'utilisateur',

    // SuperAdminStores
    'store-selection': 'Choix du store',
    'store-choice-validation': 'Valider le choix du store',

    // StoreLogoUpload
    'choose-company-logo': 'Choisir le logo de votre société',
    'drop-file-here-or-click': 'Déposez votre fichier ici ou cliquez pour sélectionner le fichier à importer.',
    'company-logo-size-limit': 'Seuls les fichiers images d\'une taille inférieure à 1Mo sont acceptés.',
    'company-logo-square-required': 'L\'image doit avoir un format carré.',
    'error-importing-company-logo': 'Une erreur est survenue lors de l\'import. Veuillez réessayer.',
    'import-company-logo': 'Importer le logo',

    // Notifications
    'notifications-title': 'Notifications',
    'notifications-list': 'Liste de notifications',
    'notifications-column-id': 'Id',
    'notifications-column-type': 'Type',
    'notifications-column-data': 'Données',
    'notifications-column-owner': 'Propriétaire',
    'notifications-column-shared': 'Partagé ?',
    'notifications-column-creation': 'Date de création',
    'notifications-column-message': 'Message',
    'notifications-no-data': 'Vous n\'avez actuellement aucune notification',
}

export default messages