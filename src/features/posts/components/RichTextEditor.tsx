import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/ariakit";

import { htmlToPlainText } from "../utils/htmlToPlainText";

export interface RichTextEditorHandle {
  /** HTML serializado do conteúdo atual (formato salvo em `post.content`). */
  getHTML: () => string;
  /** Texto puro do conteúdo atual (para validar "vazio"). */
  getPlainText: () => string;
}

interface RichTextEditorProps {
  /** HTML inicial (edição / visualização). */
  initialHTML?: string;
  /** `false` = somente leitura (PostPage). Default `true`. */
  editable?: boolean;
  /** Aplica o estilo de erro do design system na borda. */
  hasError?: boolean;
  /** Disparado a cada mudança — usado só para limpar a mensagem de erro. */
  onInput?: () => void;
}

export const RichTextEditor = forwardRef<
  RichTextEditorHandle,
  RichTextEditorProps
>(({ initialHTML, editable = true, hasError = false, onInput }, ref) => {
  const editor = useCreateBlockNote();
  // guarda a instância de editor já populada — cobre o double-mount do StrictMode
  // e um eventual editor recriado, sem re-popular a cada render (perderia edições).
  const loadedForRef = useRef<unknown>(null);

  useEffect(() => {
    if (loadedForRef.current === editor) return;
    loadedForRef.current = editor;

    if (!initialHTML?.trim()) return;

    const blocks = editor.tryParseHTMLToBlocks(initialHTML);
    editor.replaceBlocks(editor.document, blocks);
  }, [editor, initialHTML]);

  useImperativeHandle(
    ref,
    () => ({
      getHTML: () => editor.blocksToFullHTML(),
      getPlainText: () => htmlToPlainText(editor.blocksToHTMLLossy()),
    }),
    [editor],
  );

  if (!editable) {
    return (
      <div className="text-text-primary">
        <BlockNoteView editor={editor} editable={false} theme="light" />
      </div>
    );
  }

  return (
    <div
      className={`rounded border py-2 ${
        hasError
          ? "border-danger bg-danger-bg"
          : "border-green-light bg-cream focus-within:border-green-primary"
      }`}
    >
      <BlockNoteView
        editor={editor}
        theme="light"
        className="min-h-[16rem] text-sm"
        onChange={onInput}
      />
    </div>
  );
});

RichTextEditor.displayName = "RichTextEditor";
