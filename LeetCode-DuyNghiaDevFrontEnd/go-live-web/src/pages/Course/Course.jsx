import React, { Suspense, lazy, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCourse, registerCourse } from '@/store/actions/course';
import { selectCourse } from '@/store/selector/course';
import Loading from '@/components/Loading/Loading';

const Content = lazy(() => import('./components/Content'));
const Summary = lazy(() => import('./components/Summary'));

function Course(props) {
  const { slug } = useParams();
  const { actions, course } = props;
  const isRegistered = course.isRegistered;
  const {
    tracks,
    trackOpen,
    trackWatching,
    data: { _id: courseId },
    requesting,
  } = course;

  useEffect(() => {
    if (slug) actions.getCourse({ idOrSlug: slug });
  }, [slug]);

  return (
    <Suspense>
      {(requesting && !isRegistered && <Loading />) ||
        (isRegistered && (
          <Content
            trackOpen={trackOpen}
            trackWatching={trackWatching}
            tracks={tracks}
            courseId={courseId}
          />
        )) || (
          <Summary
            tracks={tracks}
            trackTotalDuration={course.trackTotalDuration}
            trackCount={course.trackCount}
            onRegister={() => actions.registerCourse({ id: courseId })}
            {...course.data}
          />
        )}
    </Suspense>
  );
}

const mapStateToProps = state => ({
  course: selectCourse(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCourse, registerCourse }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
