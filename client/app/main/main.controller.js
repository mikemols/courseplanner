'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.syllabuses = [];

    $http.get('/api/syllabuses').then(response => {
      this.syllabyses = response.data;
      socket.syncUpdates('syllabus', this.syllabuses);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('syllabus');
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/syllabuses', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('courseplannerApp')
  .controller('MainController', MainController);

})();
