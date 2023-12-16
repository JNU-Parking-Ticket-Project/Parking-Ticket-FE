import { Txt } from '@quokka/design-system';
import { HomeInformationContent } from './HomeInformationContent';
import { Suspense } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

export const HomeInformation = () => {
  return (
    <article>
      <Txt size="h4" color="primary" className="my-4">
        안내사항
      </Txt>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeInformationContent />
      </Suspense>
    </article>
  );
};

export default HomeInformation;
