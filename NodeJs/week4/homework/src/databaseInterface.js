const util = require('util');
const fs = require('fs');
const unionBy = require('lodash.unionby')

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class DatabaseInterface {

  /**
   * 
   * @param {string} path local json database file path
   */
  constructor(path) {
    this.filePath = path;
  }

  async getCoursesPromise() {
    const fileContent = await readFile(this.filePath, 'utf8');
    return JSON.parse(fileContent);
  }

  async getCourseByIdPromise(id) {
    const fileContent = await readFile(this.filePath, 'utf8');
    return (JSON.parse(fileContent))[id];
  }

  /**
   * 
   * @param {array, Course} newCourse instance of Course Class or array of Course instances
   */
  async postCoursesPromise(newCourses) {
    let courses = await this.getCoursesPromise();
    if (Array.isArray(newCourses)) {
      courses = unionBy(newCourses, courses, 'name');
      // merge and unique course items
    } else {
      courses.push(newCourses);
    }
    await writeFile(this.filePath, JSON.stringify(courses), 'utf8');
    return this.getCoursesPromise();
  }

  async editCoursePromise(id, dataEntry) {
    const courses = await this.getCoursesPromise();
    if (!courses[id]) throw new Error('This id does not exist in course list.');
    courses[id] = {...courses[id], ...dataEntry};
    return this.postCoursesPromise(courses);
  }

  async deleteCoursePromise(id) {
    const courses = await this.getCoursesPromise();
    if (id !== null) {
      if (!courses[id]) throw new Error('This id does not exist in course list.');
      courses.splice(id, 1);
    } else {
      courses.pop();
    }
    await writeFile(this.filePath, JSON.stringify(courses), 'utf8');
    return this.getCoursesPromise();
  }
}

module.exports = DatabaseInterface;
console.log(__dirname);
const db = new DatabaseInterface(__dirname + '/db.json');
// db.getCoursesPromise().then(res => console.log(JSON.stringify(res)));
// db.getCourses().then(res => console.log(res));
// db.postCoursesPromise2({name: "Physics", difficulty: 5}).then(res => console.log(res));
// db.editCourse(4, {difficulty: 1}).then(res => console.log(res));
// db.deleteCourse(0).then(res => console.log(res));
