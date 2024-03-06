const grade = (avg_mark) => {
  // [0;10]
  if (avg_mark < 0 || avg_mark > 10) {
    alert('Nhập điểm là số thực >= 0 và <= 10')
    return false
  }

  // Dữ liệu ok => [0;10] => điểm từ 0 đến 10
  if (avg_mark < 5) {
    return 'Yếu'
  }
  if (avg_mark < 7) {
    return 'Trung bình'
  }
  if (avg_mark < 8) {
    return 'Khá'
  } else {
    return 'Giỏi'
  }
}

const frmStudent = document.forms.frmStudent
console.log('frmStudent:', frmStudent)

frmStudent.addEventListener('submit', (e) => {
  e.preventDefault()

  let student = document.getElementById('student').value
  let avg_mark = document.getElementById('avg_mark').value
  let result = document.getElementById('result')

  if (student.length < 2) {
    alert('Bạn cần nhập tên sinh viên phải có 2 ký tự trở lên')
    return false
  }

  avg_mark = parseFloat(avg_mark)
  avg_mark = isNaN(avg_mark) ? -1 : avg_mark

  if (grade(avg_mark) != false) {
    result.style.display = 'block'

    result.innerHTML = `
      Tên: <b>${student}</b><br />
      Điểm trung bình: <b>${avg_mark}</b><br />
      Xếp loại: <b>${grade(avg_mark)}</b>
    `
  }
}) 
