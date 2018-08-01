import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectPost, getPosts } from '../_redux/actions';
import { firstTenPostsSelector } from '../_redux/selectors/postSelector';

const PostItem = ({post}) => (
  <li>
    <h4>{post.title}</h4>
    <p>{post.body}</p>
  </li>
);

class PostList extends Component {
    renderPostLists(){
        let listItems = this.props.posts.map(post => 
            <PostItem key={post.id} post={post} onClick={() => this.props.selectPost(post)}></PostItem>
        )
        return <ul>{listItems}</ul>
    };

    render() {
      return (
        <div>
            {this.props.selected_post}
            {this.renderPostLists()}
        </div>
      ); 
    }
  
    componentDidMount() {
      this.props.getPosts();
    }
};

const mapStateToProps = (state) => {
  return {
    posts: firstTenPostsSelector(state),
    selected_post: state.post.selected_post
  }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    selectPost: (post) => {
      dispatch(selectPost(post))
    },
    getPosts: () => {
      dispatch(getPosts())
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);