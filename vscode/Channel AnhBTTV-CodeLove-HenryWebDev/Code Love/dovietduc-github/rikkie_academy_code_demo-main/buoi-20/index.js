// 1. phân biệt giữa let và const
// let: cho phép gán lại value
// const: bạn không thể gán lại value

// 2. các phạm vi truy cập dành cho biến
// 2.1 phạm vi toàn cầu(global) là không bị giới hạn
// trong dấu đóng mở ({})
// 2.2 phạm vi cục bộ là phạm vi được giới hạn trong dấu đóng mở {}

// 3. Quy tắc phải nhớ:
// Trong quá trình code thực thi, nếu nó không tìm thấy biến trong phạm vi của nó,
// nó có thể di chuyển lên phạm vi cha, ông, tổ của nó để tìm biến
// cha mẹ không truy cập được biến trong con

function showMessage(message) {
  let result

  if (message) {
    result = 'bạn chọn true'
  } else {
    result = 'bạn chọn false'
  }

  return result
}
result = showMessage(false)

// bài tập viết function có return;
// Viết 1 chương trình js với đầu vào là 1 số nhập vào (promp)
// Nếu số nhập vào lớn hơn 1 và nhỏ hơn 5 -> message -> log -> bạn chọn số bé quá
// Nếu số nhập vào lớn hơn 5 và nhỏ hơn 8 -> message -> log -> bạn chọn số trung bình
// Nếu số nhập vào lớn hơn 8 và nhỏ hơn 10 -> message -> log -> bạn chọn số cao quá

// 4. Học về object
// 4.1 Tại sao chúng ta cần object (kiểu dữ liệu)
let name = 'Duc Do'
let age = 33
let job = 'it'
let address = 'Ha Noi'

// khởi tạo mảng
let userInfo = ['Duc Do', 33, 'it', 'Ha Noi']
console.log('userInfo', userInfo)

// 4.2 object giúp tạo ra cặp key, value rất tường minh
let userInfoObj = {
  name: 'Duc Do',
  age: 33,
  job: 'it',
  address: 'Ha Noi'
}

// 4.3 lấy giá trị value trong object
// 0 gọi key array
console.log(userInfo[0])
// cách 1
console.log(userInfoObj['name'])
console.log(userInfoObj['age'])
// lấy value job và addresss
// cách 2
console.log(userInfoObj.name)
console.log(userInfoObj.age)
console.log(userInfoObj.job)

// 4.4 Khác biệt giữa cách lấy value bằng dấu [] hay dấu .
let nameKey = 'name'
console.log(userInfoObj.nameKey) // nghĩa là khi get value object gián tiếp qua biến không ok
console.log(userInfoObj[nameKey]) // nghĩa là khi get value object gián tiếp qua biến vẫn ok

// 4.5 Đi làm hay dùng cái gì?
// 1. Nếu key rõ ràng, không cần lấy qua biến nên dùng . (trực tiếp)
// 2. Nếu key được thể hiện qua biến, lấy gián tiếp dùng []

// 4.6 Cách thay đổi value trong object
userInfo[0] = 'nhat duy'

userInfoObj.name = 'nhat duy'
userInfoObj.age = 18
userInfoObj['name'] = 'do nhat duy'
console.log('userInfo', userInfo)
console.log('userInfoObj', userInfoObj)

// 4.7 ứng dụng của object
// let newConsole = {
//     log: function(name) {
//         console.log('name', name);
//     }
// }
// console.log('do viet duc');

// newConsole.log('do viet duc');

// kiểu style dữ liệu ứng với bài thi
let users = [{ name: 'dung' }, { name: 'manh' }, { name: 'duc', age: 20 }]
let user2 = ['duc', 'dung', 'manh']

const indexUser = users.indexOf()
console.log('duc' === 'duc')
console.log(indexUser)
// tìm object user có tên là đức (tìm ra index)

let indeFind = users.findIndex(
  // hàm kiểm tra phần tử object thỏa mãn điều kiện đưa ra
  // hàm này được thực thi tự động trong findIndex với biến item = value loop qua với index
  function (item) {
    console.log('run start')
    if (item.name === 'duc' && item.age === 22) {
      return true
    } else {
      return false
    }
  }
)

// đề bài: Viết 1 chương trình quản lí nhân viên trong 1 công ty
// biết rằng thông tin của nhân viên bao gồm name, age, salary
// chứa tất cả staff trong công ty (lập trình cần rõ ràng)
let staffs = [
  {
    id: 1,
    name: 'Angelina Jolie',
    image:
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },
  {
    id: 2,
    name: 'Emma Watson',
    image:
      'https://images.unsplash.com/photo-1620991725187-0dbd1970bbe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  },
  {
    id: 3,
    name: 'Dương Mịch',
    image:
      'https://images.unsplash.com/photo-1620991725187-0dbd1970bbe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }
]

// crud
// c: create -- thêm dữ liệu vào mảng staffs
// r: read -- hiển thị tất cả thông tin staff trong công ty
// u: update -- cập nhật thông tin của 1 staff nào đấy (id cập nhật và thông tin cập nhật)
// d: delete -- xóa 1 staff nào đấy (dựa vào id)

// 1. Hàm đọc thông tin staff và hiển thị
function showStaffs() {
  // 1. vì staff lưu trong mảng nên loop qua để lấy thông tin
  let result = ''
  for (let i = 0; i < staffs.length; i++) {
    result =
      result +
      `<div class='item'>
                                <img class="card-img-top" src="${staffs[i].image}" alt="Card image cap">
                                <div class="content">
                                    <h5 class="card-title">${staffs[i].name}</h5>
                                    <p class="card-text">${staffs[i].description}</p>
                                    <a href="#" class="btn btn-primary">Đặt hàng</a>
                                </div>
                            </div>`
  }
  // 2. quy định html
  // <div class='item'><p>duc</p><p>20</p><p>200</p></div>
  // 3. kiểm tra html đã đúng chưa
  // 4. Hiển thị màn hình
  document.querySelector('body').innerHTML = result
}
// hiển thị thông tin nhân viên
showStaffs()

// 2. Thực hiện hàm thêm nhân viên
function createStaff() {
  // sau này lấy từ form
  let name = prompt('nhập tên nhân viên mới')
  let newStaff = {
    id: staffs.length + 1,
    name: name,
    image:
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    description:
      'Some quick example text to build on the card title and make up the bulk'
  }
  // thêm phần tử vào mảng
  // thay đổi mảng ban đầu là được thêm kết quả
  staffs.push(newStaff)

  // lúc này staffs đã có phần tử thêm vào, tiến hành render lại
  showStaffs()
}
// goi ham tao staff
createStaff()

// 3. Thực hiện chức năng cập nhật(u)
function updateStaff(id, objectChange) {
  // 1. Tìm ra phần tử cần update (object) --> tìm ra index của object cần cập nhật tt
  let indexUpdate = staffs.findIndex(function (item) {
    if (item.id === id) {
      return true
    } else {
      return false
    }
  })

  // 2. lấy ra object cập nhật thông tin
  staffs[indexUpdate].name = objectChange.name
  staffs[indexUpdate].image = objectChange.image

  // render lai du lieu
  showStaffs()
}
// 1. sửa ở đâu tức là truyền id cần sửa vào
// 2. sửa thông tin gì --> truyền object chứa nhiều thông tin sửa
updateStaff(1, {
  name: 'messi',
  image:
    'https://i1-vnexpress.vnecdn.net/2021/12/17/messi-arghentina-7858-1639709584.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=gofrxU407d8LyJ-xAGKx2A'
})

// xóa nhân viên
function deleteStaff(id) {
  // 1. tìm ra index object cần xóa
  let indexDelete = staffs.findIndex(function (item) {
    if (item.id === id) {
      return true
    } else {
      return false
    }
  })
  // 2. tiến hành xóa
  staffs.splice(indexDelete, 1)
  // 3. render lai du lieu theo staffs đã được xóa
  showStaffs()
}

deleteStaff(1)
