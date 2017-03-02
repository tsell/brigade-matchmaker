var moment = require('moment');
require('moment-timezone');

exports.index = function (req, res) {
/**
/* changed index view to the checkin form
/* which requests email address and name rather
/* than directing use to login with Github
*/
  res.render(res.locals.brigade.theme.slug + '/views/account/login', {
    view: 'checkin',
    title: 'Checkin',
    brigade: res.locals.brigade,
  });
}

/**
/*
/* Changed the taxonomies entry to use start_wizard.jade
/* rather than home.jade.
/* This is where the user will select interests, skills and goals to match.
/*
/*  res.render(res.locals.brigade.theme.slug + '/views/home', {
*/

exports.projectList = function (req, res) {
  res.render(res.locals.brigade.theme.slug + '/views/start_wizard', {
    view: 'start_wizard',
    title: 'Interests, Skills, Goals',
    brigade: res.locals.brigade,
    skills: res.locals.projectTaxonomySkills,
    interests: res.locals.projectTaxonomyInterests,
    goals: res.locals.projectTaxonomyGoals
  });
}
