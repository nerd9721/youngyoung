angular.module('myApp', ['angularSoundManager'])

    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: '001-포스트맨-01-신촌을 못가',
                artist: '포스트맨',
                url: 'http://218.39.51.23:3001/download/001-포스트맨-01-신촌을 못가.mp3'
            },
            {
                id: 'two',
                title: '002-아이언-02-독기',
                artist: '아이언',
                url: 'http://218.39.51.23:3001/download/002-아이언-02-독기.mp3'
            },
            {
                id: 'three',
                title: '005-박보람-01-예뻐졌다 (Feat. 지코 Of Block B)',
                artist: '박보람',
                url: 'http://218.39.51.23:3001/download/005-박보람-01-예뻐졌다 (Feat. 지코 Of Block B).mp3'
            },
            {
                id: 'four',
                title: '006-Bobby-01-가드올리고 Bounce',
                artist: 'Bobby',
                url: 'http://218.39.51.23:3001/download/006-Bobby-01-가드올리고 Bounce.mp3'
            }
        ];
    }]);
