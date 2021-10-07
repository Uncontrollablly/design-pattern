import simpleRoleFactory from './patterns/factory/simpleRoleFactory';

const { createRole } = simpleRoleFactory;
const warrior = createRole('warrior');
const marksman = createRole('marksman');

warrior.attack();
marksman.defend();
