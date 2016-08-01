
var app = angular
                .module('myModule', [])
                .controller('myController', function ($scope, $http, $log) {


                    $scope.onInit = function () {
                        //alert('initialized');


                        $http({
                            method: 'GET',
                            url: 'https://freegeoip.net/json/'
                        }).then(function (data) {
                            $scope.lat = data.data.latitude;
                            $scope.long = data.data.longitude;
                            $log.info($scope.lat);
                            $log.debug('123');
                            //console.log($scope.long);
                            $scope.getWeatherInfo();
                        })
                    }
                    $scope.getWeatherInfo = function () {
                        $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + $scope.lat + '&lon=' + $scope.long + '&APPID=9563e04b446d014ecf069b6c7596ea10')
                        .success(function (response) {
                            $scope.data = response;
                            //console.log(response);
                        })
                        .error(function (data, status, header, config) {
                            alert(data);
                        })
                    }
                })

