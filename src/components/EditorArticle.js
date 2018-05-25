import React, { Component } from 'react';

export class EditorArticle extends Component {
  static defaultProps = {
    article: {
      title: '1',
      description: '2',
      body: '3',
      tagList: [1,2]
    }
  };

  constructor(props, defaultProps) {
    super(props, defaultProps);
    const { title, description, body, tagList } = props.article;
    this.state = {
      title,
      description,
      body,
      tagList
    }
  }
  onChangeTitle = (e) => {
    const {value} = e.target;
    this.setState({...this.state, title: value})
  }
  onChangeDescription = (e) => {
    const {value} = e.target;
    this.setState({...this.state, description: value})
  }
  onChangeBody = (e) => {
    const {value} = e.target;
    this.setState({...this.state, body: value})
  }
  onChangeTagList = (e) => {
    const {value} = e.target;
    this.setState({...this.state, tagList: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('state', this.state)
    // const { onSignUp } = this.props;
    // onSignUp({user: this.state});
  }
  render() {
    const { title, description, body, tagList } = this.state;
    return (
      <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      defaultValue={title}
                      onChange={this.onChangeTitle}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      defaultValue={description}
                      onChange={this.onChangeDescription}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      defaultValue={body}
                      onChange={this.onChangeBody}
                    ></textarea>
                </fieldset>
                <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      defaultValue={tagList}
                      onChange={this.onChangeTagList}
                      />
                      <div className="tag-list"></div>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                    Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}