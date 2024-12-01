/**
 * Nếu số lượng đội tăng lên, việc sử dụng một mảng để lưu trữ thông tin về các đội có thể giúp làm mã của bạn trở nên ngắn gọn và dễ bảo trì hơn. Dưới đây là một cách tối ưu hơn sử dụng mảng:
 */

/**
 * Trong đoạn mã này, chúng ta sử dụng một mảng teams để lưu trữ thông tin của từng đội. Với sự trợ giúp của forEach, chúng ta tính điểm trung bình cho mỗi đội. Sau đó, chúng ta sử dụng reduce để tìm đội có điểm trung bình cao nhất và in ra kết quả. Mã này linh hoạt và dễ mở rộng khi số lượng đội tăng lên.
 */

// Thông tin của các đội
let teams = [
  { name: 'John', scores: [89, 120, 103] },
  { name: 'Mark', scores: [116, 94, 123] },
  { name: 'Mary', scores: [97, 134, 105] }
  // Thêm thông tin cho các đội khác nếu có
]

// Bước 1: Tính điểm trung bình của mỗi đội
teams.forEach((team) => {
  console.log('team:', team)
  team.average = team.scores.reduce((a, b) => a + b, 0) / team.scores.length
  console.log('team.average:', team.average)
})

// Bước 2: Xác định đội thắng
let winningTeam = teams.reduce((prev, current) => (prev.average > current.average ? prev : current))

// Bước 3: In kết quả
console.log(`Đội thắng là đội của ${winningTeam.name} với điểm trung bình là ${winningTeam.average}`)
