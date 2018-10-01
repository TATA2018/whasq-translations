const messages = {

    // Login
    'Email': 'Email',
    'Login': 'Log in',
    'Password': 'Password',
    'Provided by your administrator': 'Provided by your administrator',
    'Remember me': 'Remember me',
    'no-identification-info': 'If you do not have your ID or password, please contact your administrator',
    'bad-credentials': 'Your credentials are incorrect. Try Again.',
    'not-enough-rights': 'You do not have sufficient rights to login.',
    'user-not-found': 'L\'utilisateur n\'a pas été trouvé.', /* TODO */

    // General 
    'more-info': 'More information',
    'from': 'From',
    'to': 'To',
    'real-time': 'in real time',
    'update': 'Update',
    'delete': 'Delete',
    'previous': 'Previous',
    'next': 'Next',
    'send': 'Send',
    'export-all': 'Export everything',
    'yes': 'Yes',
    'no': 'No',
    'open': 'Open',
    'fullname': 'Full name',
    'job-position': 'Job position',
    'assistance': 'Besoin d\'aide ? Contactez-nous.', /* TODO */
    'download-attachment': 'Télécharger la pièce jointe', /* TODO */

    // Menu 
    'activity': 'Activity',
    'actives-users': 'Active users',
    'registered-users': 'Registered users',
    'whasqs-answers': 'Whasqs and Answers',
    'skills': 'Skills',
    'time-savings': 'Time saving',
    'whasqers': 'Whasqers',
    'podium': 'Podium',
    'search': 'Search',
    'manage': 'Manage',
    'skills-categories': 'Skills and Categories',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Reported Whasqs',
    'answers-reports': 'Reported Answers',
    'users': 'Users',
    'admin': 'Administration',
    'targets': 'Objectives and Gamification',
    'notifications': 'Notifications', /* TODO */

    // Activity 
    'eve-computed-kpi': 'indicator calculated on D-1',
    'no-data-for-selected-period': 'No data available for the selected period',
    'no-data-available': 'Aucune donnée disponible', /* TODO */

    // ActivityActiveUsers 
    'actives-title': 'Active Users',
    'actives-kpi-title': 'Active',
    'actives-kpi-help-title': 'Active',
    'actives-kpi-help-message': 'This indicator represents the number of users who logged in at least once during the month "{month}".',
    'actives-dda-kpi-title': 'Active (since the activation date) SAD',
    'actives-dda-kpi-help-title': 'Active SAD',
    'actives-dda-kpi-help-message': 'This indicator represents the number of users who logged in since the beginning of the activity.',
    'actives-target-kpi-title': 'Active - Objectives',
    'actives-target-kpi-help-title': 'Active - Objectives',
    'actives-target-kpi-help-message': 'This indicator represents the ratio of the number of users who logged in at least once during the month "{month}" to the defined goal.',
    'actives-evolution-title': 'Evolution of active users',
    'actives-evolution-help-title': 'Evolution of active users',
    'actives-evolution-help-message': 'This indicator represents the number of active users.',
    'actives-dda-evolution-title': 'Evolution of active users SAD',
    'actives-dda-evolution-help-title': 'Evolution of active users SAD',
    'actives-dda-evolution-help-message': 'This indicator represents the total number of active users since the creation of the store.',
    'actives-notregistered-evolution-title': 'Evolution of active users - registration',
    'actives-notregistered-evolution-help-title': 'Evolution of active users - registration',
    'actives-notregistered-evolution-help-message': 'This indicator represents the number of active users by subtracting registered users.',

    // ActivityRegisteredUsers 
    'registered-title': 'Registered users - {month}',
    'registered-kpi-title': 'Registered',
    'registered-kpi-help-title': 'Registered',
    'registered-kpi-help-message': 'This indicator represents the number of users who logged in during the month "{month}".',
    'registered-inactives-kpi-title': 'Percentage of registered but not active users who are',
    'registered-inactives-kpi-help-title': 'Percentage of registered but not active users',
    'registered-inactives-kpi-help-message': 'This indicator represents the ratio between the number of registered users during the month "{month}" without being logged in and the total number of users during the month.',
    'registered-inactives-evolution-title': 'Evolution of registrations',
    'registered-inactives-evolution-help-title': 'Evolution of registrations',
    'registered-inactives-evolution-help-message': 'This indicator represents the number of registered users.',

    // ActivityWhasqs 
    'whasqs-answers-title': 'Whasqs and Answers - {month}',
    'whasqs-answers-kpi-title': 'Number of Whasqs and answers',
    'whasqs-answers-kpi-help-title': 'Number of Whasqs and answers',
    'whasqs-answers-kpi-help-message': 'This indicator represents the number of posted whasqs plus the number of posted answers during the month "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Number of Whasqs / Author of whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Number of Whasqs / author of whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'This indicator represents the number of whasqs posted during the month "{month}" by author of whasqs.',
    'answers-kpi-title': 'Number of answers',
    'answers-kpi-help-title': 'Number of answers',
    'answers-kpi-help-message': 'This indicator represents the number of answers posted during the month "{month}".',
    'answers-by-creator-kpi-title': 'Number of answers / author of answers',
    'answers-by-creator-kpi-help-title': 'Number of answers / author of answers',
    'answers-by-creator-kpi-help-message': 'This indicator represents the number of answers posted during the month "{month}" by author of answers.',
    'whasqs-with-contribution-kpi-title': 'Percentage of whasqs with interactions',
    'whasqs-with-contribution-kpi-help-title': 'Percentage of whasqs with interactions',
    'whasqs-with-contribution-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have received answers during the month "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Percentage of Whasqs with interactions SAD',
    'whasqs-with-contribution-dda-kpi-help-title': 'Percentage of Whasqs with interactions SAD',
    'whasqs-with-contribution-dda-kpi-help-message': 'This indicator represents the percentage of number of whasqs that received answers.',
    'whasqs-resolved-part-kpi-title': 'Percentage of resolved Whasqs',
    'whasqs-resolved-part-kpi-help-title': 'Percentage of resolved Whasqs',
    'whasqs-resolved-part-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have been resolved during the month "{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Percentage of resolved Whasqs SAD',
    'whasqs-resolved-part-dda-kpi-help-title': 'Percentage of resolved Whasqs SAD',
    'whasqs-resolved-part-dda-kpi-help-message': 'This indicator represents the percentage of the number of whasqs that have been resolved.',
    'whasqs-evolution-title': 'Evolution of the number of whasqs',
    'whasqs-evolution-help-title': 'Evolution of the number of whasqs',
    'whasqs-evolution-help-message': 'This indicator represents the total number of whasqs.',
    'answers-evolution-title': 'Evolution of the number of answers',
    'answers-evolution-help-title': 'Evolution of the number of answers',
    'answers-evolution-help-message': 'This indicator represents the total number of answers.',

    // ActivitySkills 
    'skills-title': 'Skills',
    'skills-dda-kpi-title': 'Total number of identified skills SAD',
    'skills-dda-kpi-help-title': 'Total number of identified skills SAD',
    'skills-dda-kpi-help-message': 'This indicator represents the number of skills identified by the whasqers since the beginning of the activity.',
    'skills-part-kpi-title': 'Percentage of special skills identified',
    'skills-part-kpi-help-title': 'Percentage of special skills identified',
    'skills-part-kpi-help-message': 'This indicator represents the ratio of the number of special skills that have been identified by the whasqers since the begining of the activity in relation to the number of existing talents.',
    'skills-evolution-title': 'Evolution of the number of identified skills in the whasqs',
    'skills-evolution-help-title': 'Evolution of the number of identified skills in the whasqs',
    'skills-evolution-help-message': 'This indicator represents the number of identified skills in the whasq.',
    'most-used-cats-whasqs-kpi-title': 'Top 5 most used categories in the whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Top 5 most used categories in the wahsqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'In this table, you will find 5 categories that contain the most used skills in the whasqs.',
    'most-used-cats-whasqs-kpi-help-message-2': 'The coloured points represent the number of used skills in the whasqs for the corresponding category.',
    'most-used-skills-whasqs-kpi-title': 'Top 5 most used skills in the whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'Top 5 most used skills in the whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'In this table, you will find the 5 most used skills in the whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'The coloured points represent the number of use of each skill in the whasqs.',
    'most-used-whasqers-kpi-title': 'Top 5 most used skills by the whasqers',
    'most-used-whasqers-kpi-help-title': 'Top 5 most used skills by the whasqers',
    'most-used-whasqers-kpi-help-message-1': 'In this table, you will find the 5 most identified skills by the whasqers.',
    'most-used-whasqers-kpi-help-message-2': 'The coloured points represent the number of identification of each skill by the whasqers.',
    'less-used-whasqers-kpi-title': 'Top 5 least used skills by the whasqers',
    'less-used-whasqers-kpi-help-title': 'Top 5 least used skills by the whasqers',
    'less-used-whasqers-kpi-help-message-1': 'In this table, you will find the 5 least identified skills in the whasqs.',
    'less-used-whasqers-kpi-help-message-2': 'The coloured points represent the number of identification of each talent by the whasqers.',

    // TimeSavings 
    'time-savings-title': 'Time saving - {month}',
    'minutes-earned-kpi-title': 'Minutes won this month',
    'minutes-earned-kpi-help-title': 'Minutes won this month',
    'minutes-earned-kpi-help-message': 'This indicator represents the number of minutes won during the month "{month}".',
    'minutes-earned-dda-kpi-title': 'Minutes won SAD',
    'minutes-earned-dda-kpi-help-title': 'Minutes won SAD',
    'minutes-earned-dda-kpi-help-message': 'This indicator represents the number of minutes won since the beginning of the activity.',
    'minutes-earned-month-kpi-title': 'Minutes gagnées du mois', /* TODO */

    // Podium 
    'podium-title': 'Podium',
    'whasqers-of-month': 'Whasqers of',
    'no-podium-for-selected-month': 'The podium is not available for the selected month',

    // Card-user 
    'answers-label': 'ANSWERS',
    'solutions-label': 'SOLUTIONS',
    'see-profile': 'See the profile',
    
    // Search 
    'search-title': 'Search',
    'search-by-name-placeholder': 'Search by name...',
    'no-result-select-criteria': 'No result. Please select at least one character.',

    // CategoriesSearchBlock 
    'dynamic-search-title': 'Dynamic search',

    // SkillsCategories 
    'skills-categories-title': 'Skills and Categories',
    'update-cat-for-lang': 'Update the category for the language {lang}',
    'update-skill-for-cat-and-lang-fr': 'Update the skill for the category "{cat}" and the language EN',
    'add-cat-for-lang-fr': 'Add category for EN language',
    'add-skill-for-cat-and-lang-fr': 'Add skill for the category "{cat}" for EN language',
    'delete-cat-confirm-message': 'Are you sure you want to delete this category?',
    'delete-skill-confirm-message': 'Are you sure you want to delete this talent?',
    'choose-lang': 'Choose the language',
    'add-lang': 'Add a language',
    'add-cat': 'Add a category',

    // InfoMessage 
    'cat-deleted': 'The category "{cat}" has been deleted.',
    'error-deleting-cat': 'Something happened during the removal of the category "{cat}".',
    'skill-deleted': 'The talent "{skill}" has been deleted.',
    'error-deleting-skill': 'Something happened during the removal of the skill "{skill}".',

    // SkillCategoriesModal 
    'already-existing-cat': 'Already existing category/categories',
    'already-existing-skill': 'Already existing skill(s)',
    'no-existing-cat': 'No existing category',
    'no-existing-skill': 'No existing skill',

    // CreateLanguageModal 
    'add-new-lang': 'Add a new language',
    'already-implemented-langs': 'Languages already implemented',

    // WhasqsList 
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Are you sure you want to block this whasq?',
    'unblock-whasq-confirm-message': 'Are you sure you want to unblock this whasq?',
    'ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'unban-user-confirm-message': 'Are you sure you want to remove the ban for this user?',
    'remove-whasq-confirm-message': 'Are you sure you want to delete this whasq?',
    'add-whasq': 'Add a Whasq',
    'whasqs-list': 'List of Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creation',
    'whasqs-column-update': 'Update',
    'whasqs-column-title': 'Title',
    'whasqs-column-status': 'Status',
    'whasqs-column-urgent': 'Urgent',
    'whasqs-column-answers': 'Answers',
    'whasqs-column-read': 'Read',
    'whasqs-column-creator': 'Author',
    'whasqs-column-skills': 'Skills',
    'whasqs-column-actions': 'Actions',
    'whasq-resolved-by': 'Resolved by',
    'whasq-resolved-at': 'on',
    'whasqs-action-save-updates': 'Save the updates',
    'whasqs-action-edit-whasq': 'Edit the whasq',
    'whasqs-action-unblock-whasq': 'Unblock the whasq',
    'whasqs-action-block-whasq': 'Block the whasq',
    'whasqs-action-see-whasq-channel': 'See the discussion of the whasq',
    'whasqs-action-unban-user': 'Remove the ban of the user',
    'whasqs-action-ban-user': 'Ban the user',
    'whasqs-action-remove-whasq': 'Removal of the whasq',
    'whasqs-notify-around': 'Notifier autour', /* TODO */
    'whasqs-language': 'Langue', /* TODO */

    // WhasqChannelModal 
    'whasq-channel-title': 'Whasq title "{whasq-title}"',
    'usefull-answer': 'useful',
    'champion-answer': 'CHAMPION',
    'whasq-channel-edit-whasq-title': 'Titre', /* TODO */
    'whasq-channel-edit-whasq-message': 'Message', /* TODO */
    'whasq-channel-edit-answer-message': 'Message', /* TODO */
    'whasq-channel-block-answer-confirm': 'Etes vous sûr de vouloir bloquer cette réponse ?', /* TODO */
    'whasq-channel-unblock-answer-confirm': 'Etes vous sûr de vouloir débloquer cette réponse ?', /* TODO */
    'whasq-channel-delete-answer-confirm': 'Etes vous sûr de vouloir supprimer cette réponse ?', /* TODO */
    
    // AddWhasqModal 
    'add-whasq-title': 'Add a new whasq',
    'add-whasq-item-title': 'Title',
    'add-whasq-item-message': 'Message',
    'add-whasq-item-exchange': 'Exchange',
    'add-whasq-item-optionnal': 'Optional',
    'add-whasq-item-channel': 'Channel',
    'add-whasq-item-first-skill': 'First skill',
    'add-whasq-item-second-skill': 'Second skill',
    'add-whasq-item-third-skill': 'Third skill',
    'add-whasq-item-notify-around': 'Notify around you?',
    'add-whasq-item-urgent': 'Urgent?',
    'add-whasq-item-send-everyone': 'Envoyer à tout le monde ?', /* TODO */
    'add-whasq-skill-required': 'Il est obligatoire de renseigner au moins un talent.', /* TODO */
    'add-whasq-title-required': 'Il est obligatoire de renseigner le titre.', /* TODO */
    'add-whasq-message-required': 'Il est obligatoire de renseigner le message.', /* TODO */

    // WhasqsReports 
    'whasqs-reports-title': 'Reported Whasqs',
    'whasqs-reports-unblock-whasq-confirm-message': 'Are you sure you want to unblock this whasq?',
    'whasqs-reports-unban-user-confirm-message': 'Are you sure you want to remove this ban of this user?',
    'whasqs-reports-ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'whasqs-reports-remove-whasq-confirm-message': 'Are you sure you want to delete this whasq?',
    'whasqs-reports-list': 'List of reported Whasqs ',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Creation date',
    'whasqs-reports-column-last-update': 'Last update',
    'whasqs-reports-column-title': 'Title',
    'whasqs-reports-column-status': 'Status',
    'whasqs-reports-column-urgent': 'Urgent',
    'whasqs-reports-column-answers': 'Answers',
    'whasqs-reports-column-creator': 'Author',
    'whasqs-reports-column-reported-by': 'Reported by',
    'whasqs-reports-column-actions': 'Actions',
    'whasq-reports-resolved-by': 'Resolved by',
    'whasq-reports-resolved-at': 'on',
    'whasqs-reports-action-save-updates': 'Save the updates',
    'whasqs-reports-action-edit-whasq': 'Edit the whasq',
    'whasqs-reports-action-unblock-whasq': 'Unblock the whasq',
    'whasqs-reports-action-see-whasq-channel': 'See the discussion of the whasq',
    'whasqs-reports-action-unban-user': 'Remove the ban of this user',
    'whasqs-reports-action-ban-user': 'Ban this user',
    'whasqs-reports-action-remove-whasq': 'Removal of the whasq',

    // AnswersReports 
    'answers-reports-title': 'Reported answers',
    'answers-reports-unblock-answer-confirm-message': 'Are you sure you want to unblock this answer?',
    'answers-reports-unban-user-confirm-message': 'Are you sure you want to remove the ban of this user?',
    'answers-reports-ban-user-confirm-message': 'Are you sure you want to ban this user?',
    'answers-reports-remove-answer-confirm-message': 'Are you sure you want to delete this answer?',
    'answers-reports-list': 'List of the reported answers',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Creation date',
    'answers-reports-column-last-update': 'Last update',
    'answers-reports-column-message': 'Message',
    'answers-reports-column-usefull-count': 'Number of likes',
    'answers-reports-column-champion': 'Champion?',
    'answers-reports-column-creator': 'Author',
    'answers-reports-column-reported-by': 'Reported by',
    'answers-reports-column-actions': 'Actions',
    'answers-reports-action-save-updates': 'Save the updates',
    'answers-reports-action-edit-answer': 'Edit the answer',
    'answers-reports-action-unblock-answer': 'Unblock the answer',
    'answers-reports-action-see-whasq-channel': 'See the discussion of the whasq',
    'answers-reports-action-unban-user': 'Remove the ban of the user',
    'answers-reports-action-ban-user': 'Ban the user',
    'answers-reports-action-remove-answer': 'Removal of the answer',

    // Users 
    'users-title': 'Users',
    'users-ban-confirm-message': 'Are you sure you want to ban this user?',
    'users-unban-confirm-message': 'Are you sure you to remove the ban of this user?',
    'users-archive-confirm-message': 'Are you sure you want to archive this user?',
    'users-import-csv': 'Import CSV',
    'users-list': 'List of Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Registration date',
    'users-column-last-connection': 'Last connection',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Full Name',
    'users-column-title': 'Title',
    'users-column-email': 'Email',
    'users-column-actions': 'Actions',
    'users-action-see-profile': 'See the profile',
    'users-action-unban-user': 'Remove the ban of the user',
    'users-action-ban-user': 'Ban the user',
    'users-action-archive-user': 'Archive a user',
    'users-import-starting': 'L\'import des utilisateurs a bien débuté', /* TODO */
    'users-action-consider-user-admin': 'Considérer cet utilisateur comme étant admin', /* TODO */
    'users-action-stop-consider-user-admin': 'Ne plus considérer cet utilisateur comme étant admin', /* TODO */
    'users-confirm-consider-admin': 'Etes-vous sûr de vouloir considérer cet utilisateur comme étant admin ?', /* TODO */
    'users-confirm-dont-consider-admin': 'Etes-vous sûr de ne plus vouloir considérer cet utilisateur comme étant admin ?', /* TODO */
    'users-action-consider-user-admin-success': 'L\'utilisateur d\'id {userId} est maintenant administrateur.', /* TODO */
    'users-action-stop-consider-user-admin-success': 'L\'utilisateur d\'id {userId} n\'est maintenant plus administrateur.', /* TODO */
    'users-column-geolocated': 'Géolocalisé', /* TODO */
    'error-file-format': 'Le format du fichier n\'est pas correct', /* TODO */
  
    // ImportUsersModal
    'users-import-title': 'Import d\'utilisateurs', /* TODO */
    'import-users-file-limit': 'Seuls les fichiers CSV d\'une taille inférieure à 1Mo sont acceptés', /* TODO */
    'import-users-error': 'Une erreur est survenue lors de l\'import. Veuillez réessayer.', /* TODO */
    'import-users-btn': 'Importer les utilisateurs', /* TODO */
    'import-users-expected-format': 'Format attendu', /* TODO */
    'import-users-fullname': 'Nom complet', /* TODO */
    'import-users-email': 'Email', /* TODO */
    'import-users-job-position': 'Poste', /* TODO */
    'import-users-phone': 'Téléphone', /* TODO */

    // Targets 
    'targets-title': 'Objectives and Gamification',
    'targets-update-message': 'The objective "{target}" has been updated',
    'targets-geoloc-perimeter-updated': 'The geolocalization perimeter has been updated',
    'targets-points-atribution-updated': 'The attribution of points has been updated',
    'targets-target': 'Objectives',
    'targets-trimester': '3 months',
    'targets-bimester': '6 months',
    'targets-year': '12 months',
    'targets-active-users': 'active users',
    'targets-geoloc-perimeter': 'Geolocalization perimeter',
    'targets-perimeter': 'Perimeter',
    'targets-gamification': 'Gamification',
    'targets-approved-answer': 'approved answer',
    'targets-usefull-answer': 'Useful answer',
    'targets-recommended-skill': 'Recommended skill',
    'targets-points': 'points',

    // Header 
    'header-profile': 'Profile',
    'header-logout': 'Sign out',
    'french': 'French',
    'english': 'English',
    'spanish': 'Spanish',
    'italian': 'Italian',
    'russian': 'Russe', /* TODO */

    // Sidebar 
    'sidebar-navigation': 'Navigation',

    // Profile 
    'profile': 'Profile',
    'profile-title': 'User’s profile',
    'profile-ban-user-confirm-message': 'Are you sure you want to block this user?',
    'profile-edit-skill-confirm-message': 'Be carreful, the skill editing will be done for all the users. Are you sure you want to continue?',
    'profile-remove-skill-confirm-message': 'Are you sure you want to remove this skill from this user?',
    'profile-archive-user-confirm-message': 'Are you sure you want to archive this user?',
    'whasqer-profile': 'Whasqer’s profile',
    'profile-account-creation': 'Account creation',
    'profile-last-connection': 'Last connection',
    'profile-last-update': 'Last update',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'ANSWERS',
    'profile-solutions-column': 'SOLUTIONS',
    'profile-block-button': 'Block',
    'profile-archive-button': 'Archive',
    'profile-user-archived': 'This user has been archivated',
    'profile-skills-subtitle': 'His/Her talents',
    'profile-no-listed-skill': 'No talent listed',

    // AddUserSkillModal 
    'add-skill-for-user': 'Add a skill for {fullname}',
    'already-existing-skills-for-user': 'Already existing skill(s) for this user',
    'available-skills-for-user': 'Available skill(s) for this user',

    // SuperAdminStores 
    'store-selection': 'Choice of the store',
    'store-choice-validation': 'Validate the choice of the store',

    // StoreLogoUpload 
    'choose-company-logo': 'Choose the logo of your company',
    'drop-file-here-or-click': 'Drop your file here or click to select the file to import',
    'company-logo-size-limit': 'Only image files smaller than 1mo are accepted',
    'company-logo-square-required': 'The image must have a square format.',
    'error-importing-company-logo': 'Something happened during the import. Please try again.',
    'import-company-logo': 'Import the logo',

    // Notifications
    'notifications-title': 'Notifications', /* TODO */
    'notifications-list': 'Liste de notifications', /* TODO */
    'notifications-column-id': 'Id', /* TODO */
    'notifications-column-type': 'Type', /* TODO */
    'notifications-column-data': 'Données', /* TODO */
    'notifications-column-owner': 'Propriétaire', /* TODO */
    'notifications-column-shared': 'Partagé ?', /* TODO */
    'notifications-column-creation': 'Date de création', /* TODO */
    'notifications-column-message': 'Message', /* TODO */
    'notifications-no-data': 'Vous n\'avez actuellement aucune notification', /* TODO */
}

export default messages