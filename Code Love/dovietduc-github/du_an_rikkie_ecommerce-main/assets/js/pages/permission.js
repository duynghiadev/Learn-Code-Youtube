// Nếu là user thông thường thì ẩn product, category, order đi

function hideManagementIfIsUserRegular() {
    let users = JSON.parse(localStorage.getItem('users'));
    let userLoggin = users.find(item => item.status === 'active');
    if(userLoggin.role !== 'admin') {
        // ẩn quản lí sản phẩm
        document.querySelector('#dashboard-tab').closest('li').remove();
        // ẩn quản lí order
        document.querySelector('#orders-tab').closest('li').remove();
        // ẩn danh mục sản phẩm
        document.querySelector('#address-tab').closest('li').remove();
    }

    // thêm active cho li đầu tiên
    document.querySelector('.dashboard_menu ul li:first-child a').click();
    
}

hideManagementIfIsUserRegular();