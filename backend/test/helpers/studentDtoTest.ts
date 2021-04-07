import { StudentDto } from "src/adapters/dtos/studentDto";

export class StudentTestData {

    static createValidDto() {
        const validStudentDto: StudentDto = {
            firstName: 'Sasuke',
            lastName: 'Uchiha',
            email: 'betrayer@akatsuki.com.br',
            birthDate: new Date(1995, 6, 18),
            password: "password",
            instrumentsArray: [1, 2, 3];
        }
        return validStudentDto;
    }
}
