import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCoursesFree, getCoursesPaid } from '@/store/actions/course';
import { selectCoursesFree, selectCoursesPaid } from '@/store/selector/course';
import Courses from '@/components/Course/Courses';
import CourseSkeleton from '@/components/Course/CourseSkeleton';
import Carousel from '@/components/Carousel/Carousel';

const dataTest = [
  {
    _id: '1',
    name: 'HTML CSS Pro',
    thumbnail: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    description: 'Crawl description',
    price: 0,
    duration: 0,
    status: 'active',
    level: '64d709baef0d986835827274',
    group: '64fd8f375c3e53026ba1d35c',
    user: '648c98195f6a202161f9f1b9',
    author: 'F8 Official (@f8vnofficial)',
    youtubeChannelId: 'UCNSCWwgW-rwmoE3Yc4WmJhw',
    youtubePlaylistId: 'PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3',
    createdAt: '2023-09-10T09:41:10.808Z',
    updatedAt: '2023-09-10T09:41:10.808Z',
    slug: 'clone-tiktok-voi-reactjs',
    __v: 0,
    enrollments: [
      {
        _id: '64fd9707cc1061ceea90804d',
        user: '648aedc878cadfbe95c748d7',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T10:14:31.018Z',
        updatedAt: '2023-09-10T10:14:31.018Z',
        __v: 0,
      },
      {
        _id: '64fda8edfd1fd74de52e6aee',
        user: '64e73e065b0b7e928ce6f602',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T11:30:53.092Z',
        updatedAt: '2023-09-10T11:30:53.092Z',
        __v: 0,
      },
      {
        _id: '64fdc8c3fd1fd74de52e6b28',
        user: '648c98195f6a202161f9f1b9',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T13:46:43.757Z',
        updatedAt: '2023-09-10T13:46:43.757Z',
        __v: 0,
      },
    ],
    registeredStudents: 100000,
  },
  {
    _id: '2',
    name: 'Ngôn ngữ xử lý SASS Pro',
    thumbnail: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    description: 'Crawl description',
    price: 0,
    duration: 0,
    status: 'active',
    level: '64d709baef0d986835827274',
    group: '64fd8f375c3e53026ba1d35c',
    user: '648c98195f6a202161f9f1b9',
    author: 'F8 Official (@f8vnofficial)',
    youtubeChannelId: 'UCNSCWwgW-rwmoE3Yc4WmJhw',
    youtubePlaylistId: 'PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3',
    createdAt: '2023-09-10T09:41:10.808Z',
    updatedAt: '2023-09-10T09:41:10.808Z',
    slug: 'clone-tiktok-voi-reactjs',
    __v: 0,
    enrollments: [
      {
        _id: '64fd9707cc1061ceea90804d',
        user: '648aedc878cadfbe95c748d7',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T10:14:31.018Z',
        updatedAt: '2023-09-10T10:14:31.018Z',
        __v: 0,
      },
      {
        _id: '64fda8edfd1fd74de52e6aee',
        user: '64e73e065b0b7e928ce6f602',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T11:30:53.092Z',
        updatedAt: '2023-09-10T11:30:53.092Z',
        __v: 0,
      },
      {
        _id: '64fdc8c3fd1fd74de52e6b28',
        user: '648c98195f6a202161f9f1b9',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T13:46:43.757Z',
        updatedAt: '2023-09-10T13:46:43.757Z',
        __v: 0,
      },
    ],
    registeredStudents: 100000,
  },
  {
    _id: '3',
    name: 'Javascript Pro',
    thumbnail: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    description: 'Crawl description',
    price: 0,
    duration: 0,
    status: 'active',
    level: '64d709baef0d986835827274',
    group: '64fd8f375c3e53026ba1d35c',
    user: '648c98195f6a202161f9f1b9',
    author: 'F8 Official (@f8vnofficial)',
    youtubeChannelId: 'UCNSCWwgW-rwmoE3Yc4WmJhw',
    youtubePlaylistId: 'PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3',
    createdAt: '2023-09-10T09:41:10.808Z',
    updatedAt: '2023-09-10T09:41:10.808Z',
    slug: 'clone-tiktok-voi-reactjs',
    __v: 0,
    enrollments: [
      {
        _id: '64fd9707cc1061ceea90804d',
        user: '648aedc878cadfbe95c748d7',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T10:14:31.018Z',
        updatedAt: '2023-09-10T10:14:31.018Z',
        __v: 0,
      },
      {
        _id: '64fda8edfd1fd74de52e6aee',
        user: '64e73e065b0b7e928ce6f602',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T11:30:53.092Z',
        updatedAt: '2023-09-10T11:30:53.092Z',
        __v: 0,
      },
      {
        _id: '64fdc8c3fd1fd74de52e6b28',
        user: '648c98195f6a202161f9f1b9',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T13:46:43.757Z',
        updatedAt: '2023-09-10T13:46:43.757Z',
        __v: 0,
      },
    ],
    registeredStudents: 100000,
  },
  {
    _id: '4',
    name: 'NextJs Pro',
    thumbnail: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/VCgk2y-LUJY/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    description: 'Crawl description',
    price: 0,
    duration: 0,
    status: 'active',
    level: '64d709baef0d986835827274',
    group: '64fd8f375c3e53026ba1d35c',
    user: '648c98195f6a202161f9f1b9',
    author: 'F8 Official (@f8vnofficial)',
    youtubeChannelId: 'UCNSCWwgW-rwmoE3Yc4WmJhw',
    youtubePlaylistId: 'PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3',
    createdAt: '2023-09-10T09:41:10.808Z',
    updatedAt: '2023-09-10T09:41:10.808Z',
    slug: 'clone-tiktok-voi-reactjs',
    __v: 0,
    enrollments: [
      {
        _id: '64fd9707cc1061ceea90804d',
        user: '648aedc878cadfbe95c748d7',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T10:14:31.018Z',
        updatedAt: '2023-09-10T10:14:31.018Z',
        __v: 0,
      },
      {
        _id: '64fda8edfd1fd74de52e6aee',
        user: '64e73e065b0b7e928ce6f602',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T11:30:53.092Z',
        updatedAt: '2023-09-10T11:30:53.092Z',
        __v: 0,
      },
      {
        _id: '64fdc8c3fd1fd74de52e6b28',
        user: '648c98195f6a202161f9f1b9',
        course: '64fd8f3641b2b81a8062dfdd',
        process: 1,
        status: 'active',
        createdAt: '2023-09-10T13:46:43.757Z',
        updatedAt: '2023-09-10T13:46:43.757Z',
        __v: 0,
      },
    ],
    registeredStudents: 100000,
  },
];

function Home(props) {
  const { actions, coursesFree, coursesPaid } = props;

  useEffect(() => {
    actions.getCoursesFree();
    actions.getCoursesPaid();
  }, []);

  return (
    <div className='home'>
      <Carousel />
      {(coursesPaid.requesting && <CourseSkeleton />) || (
        <Courses title='Khoá học Pro' courses={dataTest || coursesPaid.data} />
      )}
      {(coursesFree.requesting && <CourseSkeleton />) || (
        <Courses title='Khoá học miễn phí' courses={coursesFree.data} />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  coursesFree: selectCoursesFree(state),
  coursesPaid: selectCoursesPaid(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCoursesFree, getCoursesPaid }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
