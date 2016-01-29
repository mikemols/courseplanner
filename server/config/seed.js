/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';

Syllabus.find({}).removeAsync()
  .then(() => {
    Syllabus.createAsync({
        _id: '5677bcec37407aa60754252b',
        academy: 'Business Academy SouthWest',
        year: 2016,
        title: 'JS Web Apps',
        education: 'Computer Science, 4th Semester, Spring',
        lecturer: 'Lars Juul Bilde',
        iconurl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Meanstack-624x250.jpg',
        owner: '569e69cc1ab998358d37667e',
        objectives: 'Learn how to make a MEAN fullstack using JS',
        weekplans: [{
          week: 4,
          summary: 'Awesome week',
          topics: '<ul><li>Go to this page&nbsp;<a href="http://google.com">http://google.com</a></li><li>Do this</li><li>Do another thing</li><li>Testing lists</li></ul>',
          literature: 'literature',
          videos: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4-zPIYRMmE4" frameborder="0" allowfullscreen></iframe>',
          assignments: 'assignments',
          teaser: 'Introduction, get the IDE up and rinning. Activies and views.'
        }, {
          week: 5,
          summary: 'Awesome week 5',
          topics: '<ul><li>Go to this page&nbsp;<a href="http://google.com">http://google.com</a></li><li>Do this</li><li>Do another thing</li><li>Testing lists</li></ul>',
          literature: 'literature',
          videos: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4-zPIYRMmE4" frameborder="0" allowfullscreen></iframe>',
          assignments: 'assignments',
          teaser: 'Introduction, get the IDE up and rinning. Activies and views.'
        }],
    }, {
      _id: '569d2d9b9f72ae8586bdad04',
      academy: 'Erhvervsakdemiet SydVest',
      iconurl: 'http://canon.dk/Images/Android-logo_tcm81-12322684.png',
      year: 2016,
      title: 'Android Development',
      education: 'Computer Science, 4th Semester, Spring',
      owner: '569e69cc1ab998358d37667d',
      objectives: 'Learn how to make a great Android Application\nImportant stuff'
    })
    .then(() => {
      console.log('finished populating syllabuses');
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      _id: '569e69cc1ab998358d37667e',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id: '569e69cc1ab998358d37667d',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
