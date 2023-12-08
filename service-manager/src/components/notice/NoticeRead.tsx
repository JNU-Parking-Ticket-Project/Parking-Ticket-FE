import { Button, Txt } from '@quokka/design-system';
import ReactQuill from 'react-quill';
import { NOTICE_CONTENTS } from '../../constants/NoticeContents';
import { Link } from 'react-router-dom';

interface NoticeReadProps {
  title?: string;
  content?: string;
  createdAt?: string;
  className?: string;
}

export const NoticeRead = ({
  title = NOTICE_CONTENTS.title,
  content = NOTICE_CONTENTS.content,
  createdAt = NOTICE_CONTENTS.createdAt,
  className,
}: NoticeReadProps) => {
  return (
    <>
      <div className="flex flex-col">
        <Txt size="h3">{title}</Txt>
        <Txt size="h6" className="flex justify-end">
          {createdAt}
        </Txt>
        <ReactQuill
          className="my-14 border-2 border-gray-200 rounded-lg p-4 bg-gray-1"
          style={{ width: '100%', height: '400px' }}
          value={content}
          readOnly={true}
          theme={'bubble'}
        />
      </div>
      <Link to="/notice-create" className="flex justify-end">
        <Button>수정</Button>
      </Link>
    </>
  );
};
