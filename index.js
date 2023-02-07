class person {
    name;
}
class Student extends person {
    course;
    rollNumber;
}
class Teacher extends person {
    course;
    timing;
}
class Course {
    classTeacher;
    students;
    timings;
}
const student1 = new Student();
student1.name = "daniyal";
student1.rollNumber = "1";
const student2 = new Student();
student2.name = "aqdas";
student2.rollNumber = "2";
const student3 = new Student();
student3.name = "ammar";
student3.rollNumber = "3";
const teacher = new Teacher();
teacher.name = "umema";
teacher.course = "PIAIC";
teacher.timing = "6-10";
const course = new Course();
course.classTeacher = teacher;
course.timings = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
const studentArray = [student1, student2, student3];
course.students = studentArray;
console.log(course);
teacher.timing = "10-11";
console.log(course);
export {};
