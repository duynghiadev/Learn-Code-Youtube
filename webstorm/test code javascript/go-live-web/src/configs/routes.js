const routes = {
  profile: {
    id: 'profile',
    path: '/:username',
    title: 'Thông tin người dùng',
  },
  courseGroups: {
    id: 'course-groups',
    path: '/course-groups/:slug',
    title: 'Nhóm khoá học',
  },
  setAvatar: {
    id: 'set-avatar',
    path: '/set-avatar',
    title: 'Thay đổi ảnh đại diện',
  },
  chat: { id: 'chat', path: '/chat', title: 'Cuộc hội thoại' },
  courseSlug: { id: 'course-slug', path: '/courses/:slug', title: 'Khóa học' },
  course: { id: 'courses', path: '/courses', title: 'Khóa học' },
  learningPaths: {
    id: 'learning-paths',
    path: '/learning-paths',
    title: 'Lộ trình',
  },
  learningPathsSlug: {
    id: 'learning-paths-slug',
    path: '/learning-paths/:slug',
    title: 'Chi tiết lộ trình',
  },
  blog: { id: 'post', path: '/post', title: 'Bài viết' },
  login: { id: 'login', path: '/login', title: 'Đăng nhập' },
  register: { id: 'register', path: '/register', title: 'Đăng ký' },
  privacy: { id: 'privacy', path: '/privacy', title: 'Chính xác bảo mật' },
  terms: { id: 'terms', path: '/terms', title: 'Điều khoản sử dụng' },
  newPost: { id: 'new-post', path: '/new-post', title: 'Bài viết mới' },
  home: { id: 'home', path: '/', title: 'Học Lập trình mỗi ngày' },
  postDetail: {
    id: 'post-detail',
    path: '/post/:slug',
    title: 'Chi tiết bài viết',
  },
  classroom: {
    id: 'classroom',
    path: '/classroom',
    title: 'Lớp học',
  },
};

export default routes;
