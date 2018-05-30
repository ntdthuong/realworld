import React, { Component } from 'react';

import { Input } from '../Common/Input';
import { Textarea } from '../Common/Textarea';

export class EditorArticle extends Component {

  constructor(props) {
    super(props);
    const { id } = this.props.info?this.props.info.match.params:'';
    if(id) {
      this.props.onGetArticle(id);
      const { title, description, body, tagList } = this.props.article;
      this.state = {
        title,
        description,
        body,
        tagList
      }
    } else {
      this.state = {
        title: '',
        description: '',
        body: '',
        tagList:''
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps && nextProps.article) {
      const { title, description, body, tagList } = (prevState.title !== undefined) ? prevState : nextProps.article;
      return {
        title,
        description,
        body,
        tagList
      };
    }
    return null;
  }

  genField = () => {
    const { title, description, body, tagList } = this.state;
    const arrField = [
      { name: 'title', placeholder: 'Article Title', type: 'text', value: title },
      { name: 'description', placeholder: 'What\'s this article about?', type: 'text', value: description },
      { rows: 8, name: 'body', placeholder: 'Write your article (in markdown)', type: 'text', value: body },
      { name: 'tagList', placeholder: 'Enter tags', type: 'text', value: tagList }
    ];
    return arrField.map(
      (field, index) =>
      field.rows
      ? <Textarea
          key={index}
          rows={field.rows}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          value={field.value}
          onChange={this.onChange}
        />
      : <Input
        key={index}
        name={field.name}
        placeholder={field.placeholder}
        type={field.type}
        value={field.value}
        onChange={this.onChange}
      />
    )
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let tagList = this.state.tagList;
    if (!Array.isArray(tagList)) {
      tagList = tagList.split(',');
    }
    tagList = tagList.map((tag, index) => tag.trim());
    const articleInfo = { article: { ...this.state, tagList } };
    const { onEditorArticle } = this.props;
    const { id } = this.props.info?this.props.info.match.params:'';
    onEditorArticle(articleInfo, id);
  }

  handleError = () => {
    const { onGenErrors, article } = this.props;
    return onGenErrors(article.errors);
  }

  genTag = (tags) => {
    if(tags) return tags.map((tag, index) =>
      <span key={index} class="tag-default tag-pill">
        <i class="ion-close-round"></i>
        {tag}
      </span>
    )
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              {this.handleError()}
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  {this.genField()}
                  {/*<fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type='text'
                      name='tagList'
                      placeholder='Enter tags'
                      value={this.state.tagList || ''}
                      onChange={this.props.onChange}
                    />
                    <div class="tag-list">
                      {this.genTag(this.state.tagList)}
                    </div>
                  </fieldset>*/}
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