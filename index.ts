import inquirer from "inquirer"

class person {
    name?:string;
    }
class Student extends person{
    course?:string;
    rollNumber?:string;
}

class Teacher extends person{
    course?:string;
    timing?:string;
}
class Course{
    classTeacher?:Teacher;
    students?:Student[];
    timings?:string;
    
}
const student1:Student=new Student();
student1.name="daniyal";
student1.rollNumber="1";
const student2:Student=new Student();
student2.name="aqdas";
student2.rollNumber="2";
const student3:Student=new Student();
student3.name="ammar";
student3.rollNumber="3"

const teacher:Teacher=new Teacher();
teacher.name="umema";
teacher.course="PIAIC"
teacher.timing="6-10";

const course:Course=new Course()
course.classTeacher=teacher
course.timings=teacher.timing
student1.course=teacher.course
student2.course=teacher.course
student3.course=teacher.course
const studentArray:Student[]=[student1,student2,student3];
course.students=studentArray;
console.log(course);
teacher.timing="10-11"
console.log(course)













