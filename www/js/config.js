angular.module('nibs.config', [])

    .constant('SERVER_URL', 'http://sfmobile.herokuapp.com')
    .constant('FB_APP_ID','1618878675020266')
    .constant('STATUS_LABELS', [
        'Silver Member',
        'Gold Member',
        'Platinum Member'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Silver Member- Access to silver members only store and exclusive sales. All silver members get 5% off!',
        'Gold Member - Access to premium members only store and exclusive sales. All gold members get 15% off!',
        'Platinum Member - Access to platinum members only store and exclusive sales. All platinum members get 25% off!'
    ]);
