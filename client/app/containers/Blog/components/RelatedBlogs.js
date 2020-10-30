import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRelatedBlogsIsLoading,
  makeSelectRelatedBlogs,
} from '../selectors';
import { IMAGE_BASE } from '../../App/constants';
import clock from '../../../assets/img/clock.svg';

function RelatedBlogs(props) {
  if (props.loading) {
    return null;
  }

  return (
    <div
      className="static lg:sticky"
      style={{
        top: 80,
      }}
    >
      {props.blogs.length > 0 && (
        <>
          <div className="mt-10">
            <div className="bg-primary h-14 flex items-center pl-8 mb-4">
              <h2 className="font-bold text-3xl text-white my-0">Related</h2>
            </div>
            {props.blogs.map(blog => (
              <div key={`relateds-${blog._id}`} className="flex py-4">
                <div className="flex-1 mr-7">
                  <Link
                    className="no-underline hover:text-secondary text-xl block text-gray-700"
                    to={`/news/${moment(blog.added_at).format('YYYY/MM/DD')}/${blog._id
                      }`}
                  >
                    {blog.title}
                  </Link>
                  <div className="inline-flex items-center text-gray-600 md:text-gray-800 text-sm sans-serif mt-3 article-date">
                    <img className="mr-2 clock" src={clock} />
                    {moment(blog.added_at).fromNow()}
                  </div>
                </div>
                <Link
                  className="block overflow-hidden w-24 h-24 article-img-container"
                  to={`/news/${moment(blog.added_at).format('YYYY/MM/DD')}/${blog._id
                    }`}
                >
                  <img
                    src={`${IMAGE_BASE}${blog &&
                      blog.image &&
                      blog.image.path}`}
                    alt={blog.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

RelatedBlogs.propTypes = {
  loading: PropTypes.bool.isRequired,
  blogs: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectRelatedBlogsIsLoading(),
  blogs: makeSelectRelatedBlogs(),
});

export default connect(mapStateToProps)(RelatedBlogs);
