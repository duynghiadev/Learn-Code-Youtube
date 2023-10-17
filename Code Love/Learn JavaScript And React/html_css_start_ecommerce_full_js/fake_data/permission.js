function craeteUserAdmin() {
    // 1. Lấy dữ liệu users từ localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // 2. thực hiện update user cũ và thêm user admin mới
    let userAdmin = {
        id: crypto.randomUUID(),
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'a@A123456',
        status: '',
        role: 'admin'
    };
    // tạo ra mảng mới gồm dữ liệu user cũ + useradmin
    let userAll = [...users, userAdmin];
    // 3. cập nhật role cho user thông thường
    let userAllUpdate = userAll.map(
        function(item) {
            if(item.role === 'admin') {
                return item;
            } else {
                item.role = 'regular';
                return item;
            }
        }
    );
    // 4. cập nhật localStorage
    let userAdminExit = users.find(item => item.role === 'admin');
    if(!userAdminExit) {
        localStorage.setItem('users', JSON.stringify(userAllUpdate));
    }
    
}



// Tạo user admin
// role: admin -- role: regular
craeteUserAdmin();

