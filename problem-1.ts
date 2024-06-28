//Student Grade Management System

//Define Interfaces and Types:
interface Grade {
    subject: string;
    score: number;
}


interface Student {
    id: number;
    name: string;
    grades: Grade[];
}

type Students = Student[]; // Students type alias

// Add Student
const addStudent = (students: Students, student: Student): Students => {
    students.push(student);
    return students;
}

let students: Students = [];
students = addStudent(students, { id: 1, name: "Zyena", grades: [] });
students = addStudent(students, { id: 2, name: "Faizaan", grades: [] });
console.log("Added student: ", students);



// Add Grade
const addGrade = (students: Students, studentId: number, grade: Grade): Students => {
    // TODO: try catch
    try {
        const student = students.find(s => s.id === studentId);
        if (!student) {
            throw new Error(`Student with ID ${studentId} not found`);
        }
        student.grades.push(grade);

    } catch (error) {
        console.error(error);
    }
    return students;
}


students = addGrade(students, 1, { subject: "Computer", score: 95 });
students = addGrade(students, 1, { subject: "Math", score: 90 });

console.log("Students and their grades:");
students.forEach(student => {
    console.log(`Student: ${student.name}`);
    student.grades.forEach(grade => {
        console.log(`${grade.subject}: ${grade.score}`);
    });
    console.log();
});



// Find studentby id
const getStudentById = (students: Students, studentId: number): Student | null => {
    const student = students.find(s => s.id === studentId);
    return student || null;
}

//Calculate average grade of student
const calculateAverageGrade = (student: Student): number => {
    if (student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce((sum, grade) => sum + grade.score, 0);
    const average = total / student.grades.length;

    return average;
}

console.log("Finding the student and calculating average grade")
const student = getStudentById(students, 2);
if (student) {
    console.log(`Student: ${student.name}, Average Grade: ${calculateAverageGrade(student)}`);
}

