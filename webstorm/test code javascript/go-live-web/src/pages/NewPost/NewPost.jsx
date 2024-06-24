import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import styles from './style/NewPost.module.scss';
const cx = classNames.bind(styles);

function NewPost() {
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState(null);
  const toolbarConfig = {};
  const editorConfig = {
    placeholder: 'Nhập ghi chú của bạn...',
    autoFocus: true,
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode='default'
          />
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={editor => setHtml(editor.getHtml())}
            mode='default'
            style={{ height: 'calc(100vh - 197px)', overflowY: 'auto' }}
          />
        </div>
      </div>
      <div className={cx('right', 'writer')}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <button className={cx('publish-btn')}>Xuất bản</button>
      </div>
    </div>
  );
}

export default NewPost;
