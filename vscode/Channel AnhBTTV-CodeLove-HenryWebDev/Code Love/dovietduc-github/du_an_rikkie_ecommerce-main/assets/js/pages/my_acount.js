const logoutSelector = document.querySelector('.logout-user');
const loginInforSelector = document.querySelector('.user_login');


function getUserIsLoggin() {
    // 1. get data from localStorage
    let users = JSON.parse(localStorage.getItem('users'));
    let userFind;
    // 2. kiểm tra xem có user active hay không?
    if(users) {
        userFind = users.find(
            function(userItem) {
                if(userItem.status === 'active') {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }
    

    // đưa tên đăng nhập để hệ thống biết ai đăng nhập
    if(userFind && loginInforSelector) {
        loginInforSelector.innerText = userFind.name;
    }
    
    
}

function handleLogout(event) {
    event.preventDefault();
    if(confirm('Bạn chắc chắn muốn logout?')) {
        // 1. Lấy ra tất cả user trong localStorage
        let users = JSON.parse(localStorage.getItem('users'));
        // 2. update tất cả user đến status = ''
        for(let i = 0; i < users.length; i++) {
            users[i].status = '';
        }
        // 3. cập nhật lại localStorage
        localStorage.setItem('users', JSON.stringify(users));
        // 4. chuyển về login
        window.location.href = '/login.html';
    }

}



getUserIsLoggin();
logoutSelector.addEventListener('click', handleLogout);