
const { Challenge } = require('../models');

const challengeData = [
  {
    title: "Walk my dog",
    description: "I should walk my dog three times a week",
  },
  {
    title: "Read a book",
    description: "I should read a book every week",
  },
  {
    title: "Do workout",
    description: "I should do workout four days a week",
    
  },
  {
    title: "Wake up early",
    description: "I should Wake up every day early at 5am",
    
  },
  {
    title: "Learn playing piano",
    description: "I should practice four days a week playing oiano",
    
  },
  {
    title: "Practice typing",
    description: "I should practice typing one hour every day",
    
  },

  
];

const seedChallenges =  () => Challenge.bulkCreate(challengeData);

module.exports = seedChallenges;
 