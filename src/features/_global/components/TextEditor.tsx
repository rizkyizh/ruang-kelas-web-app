import { Box } from '@hudoro/admin';
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  quotePlugin,
  Separator,
  StrikeThroughSupSubToggles,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo
} from '@mdxeditor/editor';

interface ITextEditor {
  onResult: (res: string) => void;
  value: string;
}

export const TextEditor = (props: ITextEditor) => {
  return (
    <Box justify="center">
      <MDXEditor
        markdown={props.value}
        onChange={props.onResult}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {' '}
                <BlockTypeSelect />
                <Separator />
                <BoldItalicUnderlineToggles />
                <StrikeThroughSupSubToggles options={['Strikethrough']} />
                <Separator />
                <CreateLink />
                <ListsToggle />
                <InsertThematicBreak />
                <UndoRedo />
              </>
            )
          }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
          linkDialogPlugin()
        ]}
      />
    </Box>
  );
};
