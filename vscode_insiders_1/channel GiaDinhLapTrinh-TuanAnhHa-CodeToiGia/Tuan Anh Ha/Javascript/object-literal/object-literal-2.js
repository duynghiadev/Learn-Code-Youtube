// Tạo đối tượng studentList bằng cách sử dụng Object Literal
let studentList = {
  students: [
    { id: 1, name: 'Alice', grades: [85, 90, 88] },
    { id: 2, name: 'Bob', grades: [92, 88, 95] },
    { id: 3, name: 'Charlie', grades: [78, 85, 80] }
  ],
  averageGrade: function () {
    // Phương thức tính trung bình điểm của tất cả sinh viên
    let total = 0
    let count = 0
    this.students.forEach(function (student) {
      console.log('student in students:', student)
      student.grades.forEach(function (grade) {
        total += grade
        count++
      })
    })
    console.log('total:', total)
    console.log('count:', count)
    return count > 0 ? total / count : 0
  },
  showStudentInfo: function () {
    // Phương thức hiển thị thông tin của từng sinh viên
    this.students.forEach(function (student) {
      console.log('student.grades:', student.grades)
      console.log(`Student ${student.id}: ${student.name}, Grades: ${student.grades.join(', ')}`)
    })
  }
}

// Hiển thị thông tin và điểm trung bình của danh sách sinh viên
studentList.showStudentInfo()
console.log('Average Grade:', studentList.averageGrade())
