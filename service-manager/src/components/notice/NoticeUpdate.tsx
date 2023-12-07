import { Button } from '@quokka/design-system';
import { Editor } from '@toast-ui/react-editor';
import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

interface NoticeFormProps {
  content: string;
}

const ToastEditor = lazy(() =>
  import('@toast-ui/react-editor').then((module) => ({
    default: module.Editor,
  })),
);

//TODO: 글 불러오기
